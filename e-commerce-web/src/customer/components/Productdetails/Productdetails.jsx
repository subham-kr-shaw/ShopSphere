import { StarIcon } from '@heroicons/react/20/solid'
import product from './product'
import Rating from '@mui/material/Rating';
import Reviewcard from './Reviewcard';
import Grid from '@mui/material/Grid';
import Rate from './Rate';
import Maincarosel from '../Homecarosel/Maincarosel';
import Homesectioncarosel from '../homesectioncardcarosel/Homesectioncarosel';
import { useNavigate } from 'react-router-dom';

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Productdetails() {
    const navigate=useNavigate();
    const handleaddtocart=()=>{
      navigate(`/cart`)
    }
    return (
        <>
            <div className="bg-gray-100">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            {product.breadcrumbs.map((breadcrumb) => (
                                <li key={breadcrumb.id}>
                                    <div className="flex items-center">
                                        <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                            {breadcrumb.name}
                                        </a>
                                        <svg
                                            fill="currentColor"
                                            width={16}
                                            height={20}
                                            viewBox="0 0 16 20"
                                            aria-hidden="true"
                                            className="h-5 w-4 text-gray-300"
                                        >
                                            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                        </svg>
                                    </div>
                                </li>
                            ))}
                            <li className="text-sm">
                                <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                    {product.name}
                                </a>
                            </li>
                        </ol>
                    </nav>
                    <section className='grid grid-cols-1 md:grid-cols-2 '>
                        {/* Image gallery */}
                        <div className="flex flex-col items-center ">
                            <img
                                alt={product.images[0].alt}
                                src={product.images[0].src}
                                className="sm:overflow-hidden rounded-lg object-cover object-center md:max-w-[30rem] md:max-h-[35rem] md:shadow-[0_30px_40px_-20px_rgba(0,0,0,0.4)]"
                            />
                            <div className=' flex justify-start gap-2 mt-4 '>
                                <img
                                    alt={product.images[1].alt}
                                    src={product.images[1].src}
                                    className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover  max-w-[6rem] max-h-[6rem] homesection "
                                />
                                <img
                                    alt={product.images[2].alt}
                                    src={product.images[2].src}
                                    className="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover  max-w-[6rem] max-h-[6rem] homesection"
                                />
                                <img
                                    alt={product.images[3].alt}
                                    src={product.images[3].src}
                                    className="row-span-2 aspect-4/5 size-full object-cover rounded-lg lg:aspect-3/4 max-w-[6rem] max-h-[6rem] homesection"
                                />
                            </div>
                        </div>
                        {/* Product info */}
                        <div className="flex flex-col gap-6  max-w-[95%] max-h-[97%] justify-center items-center  p-12 md:shadow-[10px_10px_30px_rgba(0,0,0,0.3)]">
                            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                <h1 className="text-2xl font-bold tracking-tight text-red-900 sm:text-3xl">{product.name}</h1>
                            </div>

                            {/* Options */}
                            <div className="mt-4 lg:row-span-3 lg:mt-0">
                                <div className='flex gap-3 w-[50%]'>
                                    <div className="text-3xl tracking-tight text-gray-900">{product.price}</div>
                                    <div className="text-2xl line-through decoration-red-600 text-gray-900">{product.originalPrice ?? "99"}</div>
                                    <div className="text-2xl tracking-tight text-green-700">{product.discount ?? "20%"}</div>
                                </div>
                                <div className='mt-4'><Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly /></div>
                                <form className="mt-10">
                                    {/* Colors */}
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                        <fieldset aria-label="Choose a color" className="mt-4">
                                            <div className="flex items-center gap-x-3">
                                                {product.colors.map((color) => (
                                                    <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                                                        <input
                                                            defaultValue={color.id}
                                                            defaultChecked={color === product.colors[0]}
                                                            name="color"
                                                            type="radio"
                                                            aria-label={color.name}
                                                            className={classNames(
                                                                color.classes,
                                                                'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
                                                            )}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>
                                    </div>

                                    {/* Sizes */}
                                    <div className="mt-10">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                Size guide
                                            </a>
                                        </div>

                                        <fieldset aria-label="Choose a size" className="mt-4">
                                            <div className="grid grid-cols-4 gap-3">
                                                {product.sizes.map((size) => (
                                                    <label
                                                        key={size.id}
                                                        aria-label={size.name}
                                                        className="group relative flex items-center homesection justify-center rounded-md border border-gray-300 bg-white p-3 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                                                    >
                                                        <input
                                                            defaultValue={size.id}
                                                            defaultChecked={size === product.sizes[2]}
                                                            name="size"
                                                            type="radio"
                                                            disabled={!size.inStock}
                                                            className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                                                        />
                                                        <span className="text-sm font-medium text-gray-900 uppercase group-has-checked:text-white">
                                                            {size.name}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                        </fieldset>
                                    </div>
                                    {/* add to cart */}
                                    <button
                                        type="submit"
                                        onClick={handleaddtocart}
                                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white homesection hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
                                    >
                                        Add to bag
                                    </button>
                                </form>
                            </div>

                            {/* Description and details */}
                            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                                <div>
                                    <h3 className="sr-only">Description</h3>

                                    <div className="space-y-6">
                                        <p className="text-base text-gray-900">{product.description}</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                    <div className="mt-4">
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                            {product.highlights.map((highlight) => (
                                                <li key={highlight} className="text-gray-400">
                                                    <span className="text-gray-600">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                    <div className="mt-4 space-y-6">
                                        <p className="text-sm text-gray-600">{product.details}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 parent flex flex-col gap-4
                md:flex-row md:items-start md:gap-6
                md:[&>div:first-child]:flex-1 md:[&>div:last-child]:w-64">
                <div className='w-full'>
                    <Rate />
                    <textarea
                        placeholder="Write a review..."
                        className="w-full mt-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-[120px]"
                    ></textarea>
                    <button className="mt-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 homesection ">Submit</button>
                </div>
                <div className='w-full flex flex-col gap-4'>
                    <Reviewcard />
                    <Reviewcard />
                    <Reviewcard />
                    <Reviewcard />
                </div>
            </div>
            <div>
                <Homesectioncarosel width="95%" margin="3"/>
            </div>
        </>
    )
}





// mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24


{/* Reviews */ }
// <div className="mt-6">
{/* <h3 className="sr-only">Reviews</h3> */ }
{/* <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                aria-hidden="true"
                                                className={classNames(
                                                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                    'size-5 shrink-0',
                                                )}
                                            />
                                        ))} */}
{/* </div> */ }
{/* <p className="sr-only">{reviews.average} out of 5 stars</p>
                                    <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        {reviews.totalCount} reviews
                                    </a>
                                </div>
                            </div> */}
//                             import Avatar from '@mui/material/Avatar'
// import Rating from '@mui/material/Rating';

// const Reviewcard = () => {
//     return (
//         <div className='flex flex-col shadow-[15px_15px_40px_-10px_rgba(0,0,0,0.12)] m-2 rounded-lg p-4 gap-3 w-full md:w-[48%] lg:w-[30%] bg-white'>
//             <div className='flex items-center gap-3'>
//                 <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48, fontSize: 18 }}>
//                     S
//                 </Avatar>
//                 <div className='flex flex-col'>
//                   <span className='font-semibold text-sm text-gray-800'>Subham Kr Shaw</span>
//                   <span className='text-xs text-gray-500'>2 days ago</span>
//                 </div>
//             </div>
//             <div className='mt-1'>
//                 <div className='mb-2'><Rating value={4.2} precision={0.5} readOnly size="small" /></div>
//                 <div className='text-sm text-gray-700'>Love the color — fits well and looks premium.</div>
//             </div>
//         </div>
//     )
// }

// export default Reviewcard