'use client'

import { useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { sortOptions, filters, singleFilters } from './productdata'
import Homesectioncard from '../homesectioncard/Homesectioncard'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductSection() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  // const handlefilter = (value, sectionid) => {
  //   const searchparams = new URLSearchParams(location.search);
  //   let filtervalue = searchparams.getAll(sectionid);

  //   if (filtervalue.length > 0 && filtervalue[0].split(",").includes(value)) {
  //     filtervalue = filtervalue[0].split(",").filter((item) => item !== value);
  //     if (filtervalue.length === 0) {
  //       searchparams.delete(sectionid);
  //     }
  //     else {
  //       filtervalue.push(value);
  //     }

  //     if (filtervalue.length > 0) {
  //       searchparams.set(sectionid);
  //       const query = searchparams.toString();
  //       navigate({ search: `?${query}` });
  //     }
  //   }
  // }
  const searchparams = new URLSearchParams(location.search);
  const handlefilter = (value, sectionid) => {
    const searchparams = new URLSearchParams(location.search);

    let filtervalue = searchparams.get(sectionid);
    let values = filtervalue ? filtervalue.split(",") : [];

    if (values.includes(value)) {
      // remove value
      values = values.filter((item) => item !== value);
    } else {
      // add value
      values.push(value);
    }

    if (values.length > 0) {
      searchparams.set(sectionid, values.join(","));
    } else {
      searchparams.delete(sectionid);
    }

    navigate(`${location.pathname}?${searchparams.toString()}`);
  };


  return (
    <div className="bg-white">
      <div>
        {/* * Mobile filter dialog */}
        <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">


                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  type="checkbox"
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={section.id}
                                  value={option.value}
                                  onChange={() => handleFilterChange(section.id, option.value, false)}
                                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
                {singleFilters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-4">

                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-black hover:text-gray-500">

                        <FormLabel className="font-medium text-gray-900">
                          {section.name}
                        </FormLabel>

                        <span className="ml-6 flex items-center">
                          <PlusIcon className="size-5 group-data-open:hidden" />
                          <MinusIcon className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>

                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">

                        <FormControl>
                          <RadioGroup name={section.id}>

                            {section.options.map((option) => (
                              <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                              />
                            ))}

                          </RadioGroup>
                        </FormControl>

                      </div>
                    </DisclosurePanel>

                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                {/* <div>FILTERS</div> */}
                <h8>Filters</h8>
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-open:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <label
                            key={option.value}
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="flex gap-3 cursor-pointer"
                          >
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  onChange={() => handlefilter(option.value, section.id)}
                                  type="checkbox"
                                  name={section.id}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  value={option.value}
                                  className="cursor-pointer h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  checked={
                                    searchparams
                                      .get(section.id)
                                      ?.split(",")
                                      .includes(option.value) || false
                                  }
                                />
                              </div>
                            </div>

                            <span className="text-sm text-gray-600">
                              {option.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>))}
                {singleFilters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">

                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">

                        <FormLabel className="font-medium text-gray-900">
                          {section.name}
                        </FormLabel>

                        <span className="ml-6 flex items-center">
                          <PlusIcon className="size-5 group-data-open:hidden" />
                          <MinusIcon className="size-5 group-not-data-open:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>

                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">

                        <FormControl>
                          <RadioGroup name={section.id}>

                            {section.options.map((option) => (
                              <FormControlLabel
                                key={option.value}   // ✅ FIXED
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                              />
                            ))}

                          </RadioGroup>
                        </FormControl>

                      </div>
                    </DisclosurePanel>

                  </Disclosure>
                ))}

              </form>

              {/* Product grid */}
              < div className="lg:col-span-3 w-full cols-span-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" >
                <div className='flex flex-wrap justify-center '>
                  {[1, 2, 3, 4, 5, 6, 7].map((item) => <div className='md:w-[30%] h-[35%] w-[50%] ' key={item}><Homesectioncard width="95%" margin="4" /></div>)}
                </div>
              </div>
            </div >
          </section >
        </main >
      </div >
    </div >
  )
}