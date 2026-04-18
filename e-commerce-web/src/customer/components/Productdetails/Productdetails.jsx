// import { StarIcon } from '@heroicons/react/20/solid'
// import product from './product'
// import Rating from '@mui/material/Rating';
// import Reviewcard from './Reviewcard';
// import Grid from '@mui/material/Grid';
// import Rate from './Rate';
// import Maincarosel from '../Homecarosel/Maincarosel';
// import Homesectioncarosel from '../homesectioncardcarosel/Homesectioncarosel';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { findproductsbyid } from '../../../state/product/Action';

// const reviews = { href: '#', average: 4, totalCount: 117 }

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Productdetails() {
//     const navigate=useNavigate();
//     const params=useParams();
//     const dispatch=useDispatch();
//     // const {product}=useSelector(store=>store.product);

//     const handleaddtocart=()=>{
//       navigate(`/cart`)
//     }
//     console.log(params.productid);
//     useEffect(()=>{
//         dispatch(findproductsbyid(params.productid));
//     },[params.productid])
//     return (
//         <>
//             <div className="bg-gray-100">
//                 <div className="pt-6">
//                     <nav aria-label="Breadcrumb">
//                         <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                             {product.breadcrumbs.map((breadcrumb) => (
//                                 <li key={breadcrumb.id}>
//                                     <div className="flex items-center">
//                                         <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
//                                             {breadcrumb.name}
//                                         </a>
//                                         <svg
//                                             fill="currentColor"
//                                             width={16}
//                                             height={20}
//                                             viewBox="0 0 16 20"
//                                             aria-hidden="true"
//                                             className="h-5 w-4 text-gray-300"
//                                         >
//                                             <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                                         </svg>
//                                     </div>
//                                 </li>
//                             ))}
//                             <li className="text-sm">
//                                 <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
//                                     {product.name}
//                                 </a>
//                             </li>
//                         </ol>
//                     </nav>
//                     <section className='grid grid-cols-1 md:grid-cols-2 '>
//                         {/* Image gallery */}
//                         <div className="flex flex-col items-center ">
//                             <img
//                                 alt={product.images[0].alt}
//                                 src={product.images[0].src}
//                                 className="sm:overflow-hidden rounded-lg object-cover object-center md:max-w-[30rem] md:max-h-[35rem] md:shadow-[0_30px_40px_-20px_rgba(0,0,0,0.4)]"
//                             />
//                             <div className=' flex justify-start gap-2 mt-4 '>
//                                 <img
//                                     alt={product.images[1].alt}
//                                     src={product.images[1].src}
//                                     className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover  max-w-[6rem] max-h-[6rem] homesection "
//                                 />
//                                 <img
//                                     alt={product.images[2].alt}
//                                     src={product.images[2].src}
//                                     className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover  max-w-[6rem] max-h-[6rem] homesection"
//                                 />
//                                 <img
//                                     alt={product.images[3].alt}
//                                     src={product.images[3].src}
//                                     className="row-span-2 aspect-4/5 size-full object-cover rounded-lg lg:aspect-3/4 max-w-[6rem] max-h-[6rem] homesection"
//                                 />
//                             </div>
//                         </div>
//                         {/* Product info */}
//                         <div className="flex flex-col gap-6  max-w-[95%] max-h-[97%] justify-center items-center  p-12 md:shadow-[10px_10px_30px_rgba(0,0,0,0.3)]">
//                             <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//                                 <h1 className="text-2xl font-bold tracking-tight text-red-900 sm:text-3xl">{product.name}</h1>
//                             </div>

//                             {/* Options */}
//                             <div className="mt-4 lg:row-span-3 lg:mt-0">
//                                 <div className='flex gap-3 w-[50%]'>
//                                     <div className="text-3xl tracking-tight text-gray-900">{product.price}</div>
//                                     <div className="text-2xl line-through decoration-red-600 text-gray-900">{product.originalPrice ?? "99"}</div>
//                                     <div className="text-2xl tracking-tight text-green-700">{product.discount ?? "20%"}</div>
//                                 </div>
//                                 <div className='mt-4'><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></div>
//                                 <form className="mt-10">
//                                     {/* Colors */}
//                                     <div>
//                                         <h3 className="text-sm font-medium text-gray-900">Color</h3>

//                                         <fieldset aria-label="Choose a color" className="mt-4">
//                                             <div className="flex items-center gap-x-3">
//                                                 {product.colors.map((color) => (
//                                                     <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
//                                                         <input
//                                                             defaultValue={color.id}
//                                                             defaultChecked={color === product.colors[0]}
//                                                             name="color"
//                                                             type="radio"
//                                                             aria-label={color.name}
//                                                             className={classNames(
//                                                                 color.classes,
//                                                                 'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
//                                                             )}
//                                                         />
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </fieldset>
//                                     </div>

//                                     {/* Sizes */}
//                                     <div className="mt-10">
//                                         <div className="flex items-center justify-between">
//                                             <h3 className="text-sm font-medium text-gray-900">Size</h3>
//                                             <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                                                 Size guide
//                                             </a>
//                                         </div>

//                                         <fieldset aria-label="Choose a size" className="mt-4">
//                                             <div className="grid grid-cols-4 gap-3">
//                                                 {product.sizes.map((size) => (
//                                                     <label
//                                                         key={size.id}
//                                                         aria-label={size.name}
//                                                         className="group relative flex items-center homesection justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
//                                                     >
//                                                         <input
//                                                             defaultValue={size.id}
//                                                             defaultChecked={size === product.sizes[2]}
//                                                             name="size"
//                                                             type="radio"
//                                                             disabled={!size.inStock}
//                                                             className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
//                                                         />
//                                                         <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
//                                                             {size.name}
//                                                         </span>
//                                                     </label>
//                                                 ))}
//                                             </div>
//                                         </fieldset>
//                                     </div>
//                                     {/* add to cart */}
//                                     <button
//                                         type="submit"
//                                         onClick={handleaddtocart}
//                                         className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white homesection hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
//                                     >
//                                         Add to bag
//                                     </button>
//                                 </form>
//                             </div>

//                             {/* Description and details */}
//                             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
//                                 <div>
//                                     <h3 className="sr-only">Description</h3>

//                                     <div className="space-y-6">
//                                         <p className="text-base text-gray-900">{product.description}</p>
//                                     </div>
//                                 </div>

//                                 <div className="mt-10">
//                                     <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

//                                     <div className="mt-4">
//                                         <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
//                                             {product.highlights.map((highlight) => (
//                                                 <li key={highlight} className="text-gray-400">
//                                                     <span className="text-gray-600">{highlight}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 </div>

//                                 <div className="mt-10">
//                                     <h2 className="text-sm font-medium text-gray-900">Details</h2>

//                                     <div className="mt-4 space-y-6">
//                                         <p className="text-sm text-gray-600">{product.details}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//             <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 parent flex flex-col gap-4
//                 md:flex-row md:items-start md:gap-6
//                 md:[&>div:first-child]:flex-1 md:[&>div:last-child]:w-64">
//                 <div className='w-full'>
//                     <Rate />
//                     <textarea
//                         placeholder="Write a review..."
//                         className="w-full mt-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-[120px]"
//                     ></textarea>
//                     <button className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 homesection ">Submit</button>
//                 </div>
//                 <div className='w-full flex flex-col gap-4'>
//                     <Reviewcard />
//                     <Reviewcard />
//                     <Reviewcard />
//                     <Reviewcard />
//                 </div>
//             </div>
//             <div>
//                 <Homesectioncarosel width="95%" margin="3"/>
//             </div>
//         </>
//     )
// }
// import Rating from '@mui/material/Rating';
// import Reviewcard from './Reviewcard';
// import Rate from './Rate';
// import Homesectioncarosel from '../homesectioncardcarosel/Homesectioncarosel';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { findproductsbyid } from '../../../state/product/Action';

// function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
// }

// export default function Productdetails() {
//     const navigate = useNavigate();
//     const params = useParams();
//     const dispatch = useDispatch();
//     const { product } = useSelector(store => store.product);

//     const p = product?.product; // actual product object

//     const handleaddtocart = () => {
//         navigate(`/cart`)
//     }

//     useEffect(() => {
//         dispatch(findproductsbyid(params.productid));
//     }, [params.productid])

//     if (!p) return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>

//     return (
//         <>
//             <div className="bg-gray-100">
//                 <div className="pt-6">
//                     {/* Breadcrumb */}
//                     <nav aria-label="Breadcrumb">
//                         <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//                             <li>
//                                 <div className="flex items-center">
//                                     <a href="/" className="mr-2 text-sm font-medium text-gray-900">Home</a>
//                                     <svg fill="currentColor" width={16} height={20} viewBox="0 0 16 20" aria-hidden="true" className="h-5 w-4 text-gray-300">
//                                         <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
//                                     </svg>
//                                 </div>
//                             </li>
//                             <li className="text-sm">
//                                 <span className="font-medium text-gray-500">{p.title}</span>
//                             </li>
//                         </ol>
//                     </nav>

//                     <section className='grid grid-cols-1 md:grid-cols-2'>
//                         {/* Image */}
//                         <div className="flex flex-col items-center">
//                             <img
//                                 alt={p.title}
//                                 src={p.imageurl}
//                                 className="sm:overflow-hidden rounded-lg object-cover object-center md:max-w-[30rem] md:max-h-[35rem] md:shadow-[0_30px_40px_-20px_rgba(0,0,0,0.4)]"
//                             />
//                         </div>

//                         {/* Product Info */}
//                         <div className="flex flex-col gap-6 max-w-[95%] max-h-[97%] justify-center items-center p-12 md:shadow-[10px_10px_30px_rgba(0,0,0,0.3)]">

//                             {/* Title & Brand */}
//                             <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
//                                 <p className="text-sm text-gray-500 mb-1">{p.brand}</p>
//                                 <h1 className="text-2xl font-bold tracking-tight text-red-900 sm:text-3xl">{p.title}</h1>
//                             </div>

//                             {/* Price */}
//                             <div className="mt-4 lg:row-span-3 lg:mt-0">
//                                 <div className='flex gap-3 items-center'>
//                                     <div className="text-3xl tracking-tight text-gray-900">₹{p.discountedprice}</div>
//                                     <div className="text-2xl line-through decoration-red-600 text-gray-400">₹{p.price}</div>
//                                     <div className="text-xl tracking-tight text-green-700">{p.discountpercent}% off</div>
//                                 </div>

//                                 {/* Rating */}
//                                 <div className='mt-4'>
//                                     <Rating
//                                         name="half-rating-read"
//                                         value={p.numratings || 0}
//                                         precision={0.5}
//                                         readOnly
//                                     />
//                                     <span className="text-sm text-gray-500 ml-2">({p.ratings?.length || 0} ratings)</span>
//                                 </div>

//                                 <form className="mt-10">
//                                     {/* Color */}
//                                     <div>
//                                         <h3 className="text-sm font-medium text-gray-900">Color</h3>
//                                         <div className="mt-2">
//                                             <span className="inline-block px-3 py-1 rounded-full border border-gray-300 text-sm text-gray-700 bg-white">
//                                                 {p.color}
//                                             </span>
//                                         </div>
//                                     </div>

//                                     {/* Sizes */}
//                                     <div className="mt-10">
//                                         <div className="flex items-center justify-between">
//                                             <h3 className="text-sm font-medium text-gray-900">Size</h3>
//                                             <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                                                 Size guide
//                                             </a>
//                                         </div>

//                                         <fieldset aria-label="Choose a size" className="mt-4">
//                                             <div className="grid grid-cols-4 gap-3">
//                                                 {p.size?.map((s) => (
//                                                     <label
//                                                         key={s.name}
//                                                         aria-label={s.name}
//                                                         className={classNames(
//                                                             s.quantity === 0
//                                                                 ? 'cursor-not-allowed opacity-25 bg-gray-200 border-gray-400'
//                                                                 : 'cursor-pointer bg-white border-gray-300 hover:border-indigo-600',
//                                                             'group relative flex items-center justify-center rounded-md border p-3'
//                                                         )}
//                                                     >
//                                                         <input
//                                                             type="radio"
//                                                             name="size"
//                                                             value={s.name}
//                                                             disabled={s.quantity === 0}
//                                                             className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
//                                                         />
//                                                         <span className="text-sm font-medium text-gray-900 uppercase">
//                                                             {s.name}
//                                                         </span>
//                                                         {s.quantity === 0 && (
//                                                             <span className="text-xs text-red-500 absolute -bottom-5">Out</span>
//                                                         )}
//                                                     </label>
//                                                 ))}
//                                             </div>
//                                         </fieldset>
//                                     </div>

//                                     {/* Add to Cart */}
//                                     <button
//                                         type="submit"
//                                         onClick={handleaddtocart}
//                                         className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
//                                     >
//                                         Add to bag
//                                     </button>
//                                 </form>
//                             </div>

//                             {/* Description */}
//                             <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
//                                 <div>
//                                     <h3 className="text-sm font-medium text-gray-900 mb-2">Description</h3>
//                                     <p className="text-base text-gray-900">{p.description}</p>
//                                 </div>

//                                 <div className="mt-6">
//                                     <h3 className="text-sm font-medium text-gray-900">Availability</h3>
//                                     <p className={`mt-1 text-sm font-medium ${p.quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
//                                         {p.quantity > 0 ? `In Stock (${p.quantity} left)` : 'Out of Stock'}
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </div>

//             {/* Reviews */}
//             <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
//                 <div className='w-full'>
//                     <Rate />
//                     <textarea
//                         placeholder="Write a review..."
//                         className="w-full mt-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-[120px]"
//                     ></textarea>
//                     <button className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
//                         Submit
//                     </button>
//                 </div>
//                 <div className='w-full flex flex-col gap-4'>
//                     {p.reviews?.length > 0
//                         ? p.reviews.map((review) => <Reviewcard key={review._id} review={review} />)
//                         : [1, 2, 3].map(i => <Reviewcard key={i} />)
//                     }
//                 </div>
//             </div>

//             <div>
//                 <Homesectioncarosel width="95%" margin="3" />
//             </div>
//         </>
//     )
// // }
// import Rating from '@mui/material/Rating';
// import Reviewcard from './Reviewcard';
// import Rate from './Rate';
// import Homesectioncarosel from '../homesectioncardcarosel/Homesectioncarosel';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { findproductsbyid } from '../../../state/product/Action';

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Productdetails() {
//   const navigate = useNavigate();
//   const params = useParams();
//   const dispatch = useDispatch();
//   const { product } = useSelector(store => store.product);

//   const p = product?.product;

//   const [selectedSize, setSelectedSize] = useState(null);

//   useEffect(() => {
//     dispatch(findproductsbyid(params.productid));
//   }, [params.productid]);

//   const handleaddtocart = (e) => {
//     e.preventDefault();

//     if (!selectedSize) {
//       alert("Please select a size first!");
//       return;
//     }

//     // You can dispatch add-to-cart here
//     console.log("Added to cart:", { product: p, size: selectedSize });

//     navigate(`/cart`);
//   };

//   if (!p)
//     return (
//       <div className="flex justify-center items-center h-screen text-xl font-semibold">
//         Loading...
//       </div>
//     );

//   return (
//     <>
//       <div className="bg-gray-50 min-h-screen py-10">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

//           {/* LEFT IMAGE */}
//           <div className="bg-white p-6 rounded-2xl shadow-md flex justify-center items-center">
//             <img
//               src={p.imageurl}
//               alt={p.title}
//               className="rounded-xl max-h-[450px] object-contain hover:scale-105 transition duration-300"
//             />
//           </div>

//           {/* RIGHT DETAILS */}
//           <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-6">

//             {/* Title */}
//             <div>
//               <p className="text-sm text-gray-500">{p.brand}</p>
//               <h1 className="text-3xl font-bold text-gray-900">{p.title}</h1>
//             </div>

//             {/* Price */}
//             <div className="flex items-center gap-4">
//               <span className="text-3xl font-bold text-indigo-600">
//                 ₹{p.discountedprice}
//               </span>
//               <span className="line-through text-gray-400 text-lg">
//                 ₹{p.price}
//               </span>
//               <span className="text-green-600 font-medium">
//                 {p.discountpercent}% OFF
//               </span>
//             </div>

//             {/* Rating */}
//             <div className="flex items-center gap-2">
//               <Rating value={p.numratings || 0} precision={0.5} readOnly />
//               <span className="text-gray-500 text-sm">
//                 ({p.ratings?.length || 0} ratings)
//               </span>
//             </div>

//             {/* Color */}
//             <div>
//               <h3 className="font-medium text-gray-700">Color</h3>
//               <span className="inline-block mt-2 px-4 py-1 border rounded-full text-sm">
//                 {p.color}
//               </span>
//             </div>

//             {/* Size Selection */}
//             <div>
//               <h3 className="font-medium text-gray-700 mb-2">Select Size</h3>
//               <div className="flex gap-3 flex-wrap">
//                 {p.size?.map((s) => (
//                   <button
//                     key={s.name}
//                     disabled={s.quantity === 0}
//                     onClick={() => setSelectedSize(s.name)}
//                     className={classNames(
//                       "px-4 py-2 rounded-lg border transition",
//                       selectedSize === s.name
//                         ? "bg-indigo-600 text-white border-indigo-600"
//                         : "bg-white text-gray-800 border-gray-300",
//                       s.quantity === 0 && "opacity-40 cursor-not-allowed"
//                     )}
//                   >
//                     {s.name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Add to Cart */}
//             <button
//               onClick={handleaddtocart}
//               className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition"
//             >
//               Add to Cart
//             </button>

//             {/* Description */}
//             <div>
//               <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
//               <p className="text-gray-600 text-sm">{p.description}</p>
//             </div>

//             {/* Availability */}
//             <div>
//               <h3 className="font-semibold text-gray-800">Availability</h3>
//               <p className={p.quantity > 0 ? "text-green-600" : "text-red-500"}>
//                 {p.quantity > 0
//                   ? `In Stock (${p.quantity})`
//                   : "Out of Stock"}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Reviews Section */}
//       <div className="max-w-7xl mx-auto mt-12 px-6 grid md:grid-cols-2 gap-8">
//         <div>
//           <Rate />
//           <textarea
//             placeholder="Write your review..."
//             className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
//           />
//           <button className="mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg">
//             Submit
//           </button>
//         </div>

//         <div className="flex flex-col gap-4">
//           {p.reviews?.length > 0
//             ? p.reviews.map((review) => (
//                 <Reviewcard key={review._id} review={review} />
//               ))
//             : [1, 2, 3].map((i) => <Reviewcard key={i} />)}
//         </div>
//       </div>

//       {/* Carousel */}
//       <div className="mt-10">
//         <Homesectioncarosel width="95%" margin="3" />
//       </div>
//     </>
//   );
// }
import Rating from '@mui/material/Rating';
import Reviewcard from './Reviewcard';
import Rate from './Rate';
import Homesectioncarosel from '../homesectioncardcarosel/Homesectioncarosel';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { findproductsbyid } from '../../../state/product/Action';
import { additemtocart } from '../../../state/cart/Action';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Productdetails() {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(store => store.product);

    const p = product?.product;
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        dispatch(findproductsbyid(params.productid));
    }, [params.productid]);

    const handleaddtocart = (e) => {
        e.preventDefault();
        const data={productid:p._id,size:selectedSize}

        if (!selectedSize) {
            alert("Please select a size first!");
            return;
        }
        console.log(data);
        dispatch(additemtocart(data))
        console.log("Added to cart:", { product: p, size: selectedSize });
        navigate(`/cart`);
    };

    if (!p)
        return (
            <div className="flex justify-center items-center h-screen text-xl font-semibold">
                Loading...
            </div>
        );

    return (
        <>
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                    {/* LEFT IMAGE */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 
                          flex justify-center items-start relative ">

                        {/* Discount Badge */}
                        {p.discountpercent > 0 && (
                            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                {p.discountpercent}% OFF
                            </div>
                        )}

                        {/* <img
              src={p.imageurl}
              alt={p.title}
              className="rounded-xl max-h-[450px] object-contain w-full hover:scale-105 transition duration-300"
            /> */}
                        <div className="group rounded-xl p-4 transition duration-300 
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2">

                            <img
                                src={p.imageurl}
                                alt={p.title}
                                className="rounded-xl max-h-[450px] object-contain w-full 
               transition duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* RIGHT DETAILS */}
                    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-6">

                        {/* Title */}
                        <div>
                            <p className="text-sm text-gray-500">{p.brand}</p>
                            <h1 className="text-3xl font-bold text-gray-900">{p.title}</h1>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-indigo-600">
                                ₹{p.discountedprice}
                            </span>
                            <span className="line-through text-gray-400 text-lg">
                                ₹{p.price}
                            </span>
                            <span className="text-green-600 font-medium">
                                {p.discountpercent}% OFF
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <Rating value={p.numratings || 0} precision={0.5} readOnly />
                            <span className="text-gray-500 text-sm">
                                ({p.ratings?.length || 0} ratings)
                            </span>
                        </div>

                        {/* Color */}
                        <div>
                            <h3 className="font-medium text-gray-700">Color</h3>
                            <span
                                className="inline-block mt-2 px-4 py-1 border rounded-full text-sm capitalize"
                                style={{
                                    backgroundColor: p.color?.toLowerCase(),
                                    color: ['white', 'yellow'].includes(p.color?.toLowerCase())
                                        ? 'black'
                                        : 'white',
                                    borderColor: p.color?.toLowerCase()
                                }}
                            >
                                {p.color}
                            </span>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="font-medium text-gray-700 mb-2">Select Size</h3>
                            <div className="flex gap-3 flex-wrap">
                                {p.size?.map((s) => (
                                    <button
                                        key={s.name}
                                        disabled={s.quantity === 0}
                                        onClick={() => setSelectedSize(s.name)}
                                        className={classNames(
                                            "px-4 py-2 rounded-lg border transition",
                                            selectedSize === s.name
                                                ? "bg-indigo-600 text-white border-indigo-600"
                                                : "bg-white text-gray-800 border-gray-300",
                                            s.quantity === 0 && "opacity-40 cursor-not-allowed"
                                        )}
                                    >
                                        {s.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button
                            onClick={handleaddtocart}
                            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Add to Cart
                        </button>

                        {/* Description */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
                            <p className="text-gray-600 text-sm">{p.description}</p>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="font-semibold text-gray-800">Availability</h3>
                            <p className={p.quantity > 0 ? "text-green-600" : "text-red-500"}>
                                {p.quantity > 0
                                    ? `In Stock (${p.quantity})`
                                    : "Out of Stock"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="max-w-7xl mx-auto mt-12 px-6 grid md:grid-cols-2 gap-8">
                <div>
                    <Rate />
                    <textarea
                        placeholder="Write your review..."
                        className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg">
                        Submit
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {p.reviews?.length > 0
                        ? p.reviews.map((review) => (
                            <Reviewcard key={review._id} review={review} />
                        ))
                        : [1, 2, 3].map((i) => <Reviewcard key={i} />)}
                </div>
            </div>

            {/* Carousel */}
            <div className="mt-10">
                <Homesectioncarosel width="95%" margin="3" />
            </div>
        </>
    );
}