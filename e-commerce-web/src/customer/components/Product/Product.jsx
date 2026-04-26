import { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Pagination from '@mui/material/Pagination';
import {
  Dialog, DialogBackdrop, DialogPanel,
  Disclosure, DisclosureButton, DisclosurePanel,
  Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { sortOptions, filters, singleFilters } from './productdata'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { useDispatch, useSelector } from "react-redux";
import { findproducts } from '../../../state/product/Action';
import Productcard from './Productcard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CheckboxFilterSection = ({ section, checkedValues, onchange }) => (
  <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
    <h3 className="-my-3 flow-root">
      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">{section.name}</span>
        <span className="ml-6 flex items-center">
          <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
          <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
        </span>
      </DisclosureButton>
    </h3>
    <DisclosurePanel className="pt-6">
      <div className="space-y-4">
        {section.options.map((option, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={checkedValues.includes(option.value)}
              onChange={() => onchange(option.value, section.id)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <span className="text-sm text-gray-600">{option.label}</span>
          </label>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
);

const RadioFilterSection = ({ section, selectedValue, onchange }) => (
  <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
    <h3 className="-my-3 flow-root">
      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
        <span className="font-medium text-gray-900">{section.name}</span>
        <span className="ml-6 flex items-center">
          <PlusIcon className="h-5 w-5 group-data-[open]:hidden" />
          <MinusIcon className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
        </span>
      </DisclosureButton>
    </h3>
    <DisclosurePanel className="pt-6">
      <FormControl>
        <RadioGroup value={selectedValue || ""}>
          {section.options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio size="small" />}
              label={option.label}
              onClick={() => onchange(option.value, section.id)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </DisclosurePanel>
  </Disclosure>
);

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector(store => store.product);

  // ✅ parse all filters from URL
  const sp = new URLSearchParams(decodeURIComponent(location.search));
  const colorvalue   = sp.get("color");
  const sizevalue    = sp.get("size");
  const pricevalue   = sp.get("price");
  const sortvalue    = sp.get("sort");
  const stockvalue   = sp.get("stock");
  const discount     = sp.get("discount");
  const pagenumber   = Number(sp.get("page") || 1);

  useEffect(() => {
    const [minprice, maxprice] = pricevalue
      ? pricevalue.split("-").map(Number)
      : [0, 0];

    dispatch(findproducts({
      levelone:    params.levelone   || "",
      leveltwo:    params.leveltwo   || "",
      levelthree:  params.levelthree || "",
      color:       colorvalue  || "",
      size:        sizevalue   || "",
      minprice,
      maxprice,
      mindiscount: discount  || 0,
      sort:        sortvalue || "price_low",  // ✅ default sort
      pagenumber,
      pagesize:    10,
      stock:       stockvalue || ""
    }));
  }, [
    params.levelone,
    params.leveltwo,
    params.levelthree,
    colorvalue,
    sizevalue,
    pricevalue,
    sortvalue,
    pagenumber,
    stockvalue,
    discount,
  ]);

  // ✅ checkbox filter — toggle value in URL
  const handlefilter = (value, sectionid) => {
    const p = new URLSearchParams(location.search);
    let values = (p.get(sectionid) || "").split(",").filter(Boolean);
    values = values.includes(value)
      ? values.filter(v => v !== value)
      : [...values, value];
    if (values.length > 0) p.set(sectionid, values.join(","));
    else p.delete(sectionid);
    p.set("page", 1);
    navigate(`${location.pathname}?${p.toString()}`);
  };

  // ✅ radio filter — toggle: click same = remove, click new = set
  const handleRadioFilter = (value, sectionid) => {
    const p = new URLSearchParams(location.search);
    if (p.get(sectionid) === value) p.delete(sectionid);
    else p.set(sectionid, value);
    p.set("page", 1);
    navigate(`${location.pathname}?${p.toString()}`);
  };

  const handlepagination = (e, value) => {
    const p = new URLSearchParams(location.search);
    p.set("page", value);
    navigate({ search: p.toString() });
  };

  return (
    <div className="bg-white min-h-screen">

      {/* Mobile filter dialog */}
      <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4 mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-gray-400 hover:text-gray-500">
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="border-t border-gray-200 px-4">
              {filters.map(s => (
                <CheckboxFilterSection
                  key={s.id}
                  section={s}
                  checkedValues={(sp.get(s.id) || "").split(",").filter(Boolean)}
                  onchange={handlefilter}
                />
              ))}
              {singleFilters.map(s => (
                <RadioFilterSection
                  key={s.id}
                  section={s}
                  selectedValue={sp.get(s.id)}
                  onchange={handleRadioFilter}
                />
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
            {params.levelthree || params.leveltwo || params.levelone || "Products"}
          </h1>

          <div className="flex items-center gap-3">
            {/* Sort dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
                {/* ✅ show active sort name */}
                {sortOptions.find(o => o.value === sortvalue)?.name || "Sort"}
                <ChevronDownIcon className="h-5 w-5 text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <MenuItem key={option.value}>
                      <p
                        onClick={() => handleRadioFilter(option.value, "sort")}
                        className={classNames(
                          option.value === sortvalue
                            ? 'font-semibold text-indigo-600 bg-indigo-50'
                            : 'text-gray-500',
                          'block px-4 py-2 text-sm cursor-pointer hover:bg-gray-50'
                        )}
                      >
                        {option.name}
                      </p>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
            >
              <FunnelIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <section className="pb-24 pt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

            {/* Desktop Filters */}
            <div className="hidden lg:block">
              {filters.map(s => (
                <CheckboxFilterSection
                  key={s.id}
                  section={s}
                  checkedValues={(sp.get(s.id) || "").split(",").filter(Boolean)}
                  onchange={handlefilter}
                />
              ))}
              {singleFilters.map(s => (
                <RadioFilterSection
                  key={s.id}
                  section={s}
                  selectedValue={sp.get(s.id)}
                  onchange={handleRadioFilter}
                />
              ))}
            </div>

            {/* Product Grid */}
            <div className="lg:col-span-3">
              {products?.contents?.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {products.contents.map(item => (
                    <Productcard key={item._id} product={item} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                  <span className="text-5xl mb-3">🛍️</span>
                  <p className="text-lg font-medium">No products found</p>
                  <p className="text-sm">Try adjusting your filters</p>
                </div>
              )}

              {/* ✅ Pagination — only show if more than 1 page */}
              {products?.totalpages > 1 && (
                <div className="flex justify-center mt-10">
                  <Pagination
                    count={products?.totalpages || 1}
                    page={pagenumber}
                    onChange={handlepagination}
                    color="secondary"
                    shape="rounded"
                  />
                </div>
              )}
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

// 'use client'

// import { useEffect, useState } from 'react'
// import { useNavigate, useLocation, useParams } from "react-router-dom";
// import Pagination from '@mui/material/Pagination';
// import {
//   Dialog, DialogBackdrop, DialogPanel,
//   Disclosure, DisclosureButton, DisclosurePanel,
//   Menu, MenuButton, MenuItem, MenuItems,
// } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
// import { sortOptions, filters, singleFilters } from './productdata'
// import Radio from '@mui/material/Radio'
// import RadioGroup from '@mui/material/RadioGroup'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormControl from '@mui/material/FormControl'
// import { useDispatch, useSelector } from "react-redux";
// import { findproducts } from '../../../state/product/Action';
// import Productcard from './Productcard';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// // ✅ Moved OUTSIDE component so it never remounts on navigate() re-render
// // This prevents Disclosure from closing when filters change
// const CheckboxFilterSection = ({ section, checkedValues, onchange }) => (
//   <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
//     <h3 className="-my-3 flow-root">
//       <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//         <span className="font-medium text-gray-900">{section.name}</span>
//         <span className="ml-6 flex items-center">
//           <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
//           <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
//         </span>
//       </DisclosureButton>
//     </h3>
//     <DisclosurePanel className="pt-6">
//       <div className="space-y-4">
//         {section.options.map((option, idx) => (
//           <label key={idx} className="flex items-center gap-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={checkedValues.includes(option.value)}
//               onChange={() => onchange(option.value, section.id)}
//               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <span className="text-sm text-gray-600">{option.label}</span>
//           </label>
//         ))}
//       </div>
//     </DisclosurePanel>
//   </Disclosure>
// );

// const RadioFilterSection = ({ section, selectedValue, onchange }) => (
//   <Disclosure as="div" className="border-b border-gray-200 py-6" defaultOpen>
//     <h3 className="-my-3 flow-root">
//       <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
//         <span className="font-medium text-gray-900">{section.name}</span>
//         <span className="ml-6 flex items-center">
//           <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-[open]:hidden" />
//           <MinusIcon aria-hidden="true" className="h-5 w-5 [.group:not([data-open])_&]:hidden" />
//         </span>
//       </DisclosureButton>
//     </h3>
//     <DisclosurePanel className="pt-6">
//       <FormControl>
//         <RadioGroup value={selectedValue || ""}>
//           {section.options.map((option) => (
//             <FormControlLabel
//               key={option.value}
//               value={option.value}
//               control={<Radio size="small" />}
//               label={option.label}
//               onClick={() => onchange(option.value, section.id)}
//             />
//           ))}
//         </RadioGroup>
//       </FormControl>
//     </DisclosurePanel>
//   </Disclosure>
// );

// export default function Product() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
//   const location = useLocation();
//   const navigate = useNavigate();
//   const params = useParams();

//   const decodestring = decodeURIComponent(location.search);
//   const searchparams = new URLSearchParams(decodestring);
//   const colorvalue = searchparams.get("color");
//   const sizevalue = searchparams.get("size");
//   const pricevalue = searchparams.get("price");
//   const sortvalue = searchparams.get("sort");
//   const pagenumber = Number(searchparams.get("page") || 1);
//   const stock = searchparams.get("stock");
//   const discount = searchparams.get("discount");

//   const dispatch = useDispatch();
//   const { products } = useSelector(store => store.product);

//   useEffect(() => {
//     const [minprice, maxprice] = pricevalue === null
//       ? [0, 0]
//       : pricevalue.split("-").map(Number);

//     const data = {
//       levelone: params.levelone || "",
//       leveltwo: params.leveltwo || "",
//       levelthree: params.levelthree || "",
//       color: colorvalue || "",
//       size: sizevalue || "",
//       minprice,
//       maxprice,
//       mindiscount: discount || 0,
//       sort: sortvalue || "price_low",
//       pagenumber,
//       pagesize: 5,   // ✅ 5 products per page
//       stock: stock || ""
//     };
//     dispatch(findproducts(data));
//   }, [
//     params.levelone,
//     params.leveltwo,
//     params.levelthree,
//     colorvalue,
//     sizevalue,
//     pricevalue,
//     sortvalue,
//     pagenumber,
//     stock,
//     discount
//   ]);

//   const handlefilter = (value, sectionid) => {
//     const sp = new URLSearchParams(location.search);
//     let values = (sp.get(sectionid) || "").split(",").filter(Boolean);
//     if (values.includes(value)) {
//       values = values.filter(v => v !== value);
//     } else {
//       values.push(value);
//     }
//     if (values.length > 0) sp.set(sectionid, values.join(","));
//     else sp.delete(sectionid);
//     // ✅ reset to page 1 when filter changes
//     sp.set("page", 1);
//     navigate(`${location.pathname}?${sp.toString()}`);
//   };

//   const handleRadioFilter = (value, sectionid) => {
//     const sp = new URLSearchParams(location.search);
//     if (sp.get(sectionid) === value) sp.delete(sectionid);
//     else sp.set(sectionid, value);
//     sp.set("page", 1);
//     navigate(`${location.pathname}?${sp.toString()}`);
//   };

//   const handlepagination = (event, value) => {
//     const sp = new URLSearchParams(location.search);
//     sp.set("page", value);
//     navigate({ search: sp.toString() });
//   };

//   return (
//     <div className="bg-white min-h-screen">

//       {/* Mobile filter dialog */}
//       <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
//         <DialogBackdrop className="fixed inset-0 bg-black/25" />
//         <div className="fixed inset-0 z-40 flex">
//           <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//             <div className="flex items-center justify-between px-4 mb-4">
//               <h2 className="text-lg font-medium text-gray-900">Filters</h2>
//               <button onClick={() => setMobileFiltersOpen(false)} className="p-2 text-gray-400 hover:text-gray-500">
//                 <XMarkIcon className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="border-t border-gray-200 px-4">
//               {filters.map(s => (
//                 <CheckboxFilterSection
//                   key={s.id}
//                   section={s}
//                   checkedValues={(searchparams.get(s.id) || "").split(",").filter(Boolean)}
//                   onchange={handlefilter}
//                 />
//               ))}
//               {singleFilters.map(s => (
//                 <RadioFilterSection
//                   key={s.id}
//                   section={s}
//                   selectedValue={searchparams.get(s.id)}
//                   onchange={handleRadioFilter}
//                 />
//               ))}
//             </div>
//           </DialogPanel>
//         </div>
//       </Dialog>

//       <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
//           <h1 className="text-2xl font-bold tracking-tight text-gray-900 capitalize">
//             {params.levelthree || params.leveltwo || "Products"}
//           </h1>
//           <div className="flex items-center gap-3">
//             {/* Sort dropdown */}
//             <Menu as="div" className="relative inline-block text-left">
//               <MenuButton className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900">
//                 Sort <ChevronDownIcon className="h-5 w-5 text-gray-400" />
//               </MenuButton>
//               <MenuItems className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5">
//                 <div className="py-1">
//                   {sortOptions.map((option) => (
//                     <MenuItem key={option.name}>
//                       <p
//                         onClick={() => handleRadioFilter(option.value, "sort")}
//                         className={classNames(
//                           option.value === sortvalue
//                             ? 'font-semibold text-indigo-600 bg-indigo-50'
//                             : 'text-gray-500',
//                           'block px-4 py-2 text-sm cursor-pointer hover:bg-gray-50'
//                         )}
//                       >
//                         {option.name}
//                       </p>
//                     </MenuItem>
//                   ))}
//                 </div>
//               </MenuItems>
//             </Menu>

//             {/* Mobile filter button */}
//             <button
//               type="button"
//               onClick={() => setMobileFiltersOpen(true)}
//               className="p-2 text-gray-400 hover:text-gray-500 lg:hidden"
//             >
//               <FunnelIcon className="h-5 w-5" />
//             </button>
//           </div>
//         </div>

//         <section className="pb-24 pt-6">
//           <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">

//             {/* Desktop Filters */}
//             <div className="hidden lg:block">
//               {filters.map(s => (
//                 <CheckboxFilterSection
//                   key={s.id}
//                   section={s}
//                   checkedValues={(searchparams.get(s.id) || "").split(",").filter(Boolean)}
//                   onchange={handlefilter}
//                 />
//               ))}
//               {singleFilters.map(s => (
//                 <RadioFilterSection
//                   key={s.id}
//                   section={s}
//                   selectedValue={searchparams.get(s.id)}
//                   onchange={handleRadioFilter}
//                 />
//               ))}
//             </div>

//             {/* Product Grid */}
//             <div className="lg:col-span-3">
//               {products?.contents?.length > 0 ? (
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                   {products.contents.map(item => (
//                     <Productcard key={item._id} product={item} />
//                   ))}
//                 </div>
//               ) : (
//                 <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//                   <span className="text-5xl mb-3">🛍️</span>
//                   <p className="text-lg font-medium">No products found</p>
//                   <p className="text-sm">Try adjusting your filters</p>
//                 </div>
//               )}

//               {/* Pagination */}
//               {products?.totalpages > 1 && (
//                 <div className="flex justify-center mt-10">
//                   <Pagination
//                     count={products?.totalpages || 1}
//                     page={pagenumber}
//                     onChange={handlepagination}
//                     color="secondary"
//                     shape="rounded"
//                   />
//                 </div>
//               )}
//             </div>

//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }