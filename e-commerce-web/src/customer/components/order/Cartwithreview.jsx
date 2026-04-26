// import React from 'react'
// import StarOutlineIcon from '@mui/icons-material/StarOutline';

// const Cartwithreview = () => {
//     return (
//         <div>
//             <div className='cursor-pointer homesection'>
//                 <div className='flex flex-col md:flex-row md:justify-between p-3 border-rounded-lg shadow-2xl'>
//                     <div className='flex space-x-2.5 w-full md:w-[20%] h-full'>
//                         <img src='https://rukminim1.flixcart.com/image/612/612/xif0q/sari/s/u/t/free-matka-04-tejas-sarees-unstitched-original-imagj69c9yy4pcgh.jpeg?q=70' className='rounded-md w-20 h-20 md:w-[30%] md:h-[10%] m-1 object-cover'></img>
//                         <div>
//                             <h1 className='text-sm md:text-base'>Men slim rise black jeans</h1>
//                             <div className='text-gray-400 text-xs md:text-sm'>size M</div>
//                             <div className='mt-2 md:mt-0'>₹1099</div>
//                         </div>
//                     </div>
//                     <div className='flex flex-col md:flex-row items-start md:items-center gap-2 mt-2 md:mt-0'>
//                         <div className='flex items-center'>
//                             <div className='text-purple-600'><StarOutlineIcon></StarOutlineIcon></div>
//                             <h1 className='text-md'>Rate and Reviews</h1>
//                         </div>
//                     </div>
//                     {/* <div></div> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cartwithreview
import React from 'react'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';

const Cartwithreview = ({ item, orderstatus }) => {
    const navigate = useNavigate();
    const product = item?.product;
    const isdelivered = orderstatus?.toUpperCase() === 'DELIVERED';

    return (
        <div className='bg-white rounded-lg shadow-sm border border-gray-100 p-4'>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-3'>

                {/* Product info */}
                <div className='flex items-center gap-3 w-full md:w-[50%]'>
                    <img
                        src={product?.imageurl || 'https://via.placeholder.com/80'}
                        alt={product?.title}
                        className='rounded-md w-16 h-16 object-cover flex-shrink-0'
                    />
                    <div>
                        <h1 className='text-sm font-semibold text-gray-900 line-clamp-2'>
                            {product?.title || 'Product'}
                        </h1>
                        <p className='text-xs text-gray-400 mt-0.5'>Size: {item?.size}</p>
                        <p className='text-xs text-gray-400'>Qty: {item?.quantity}</p>
                        <p className='text-sm font-semibold text-gray-800 mt-1'>
                            ₹{item?.discountedprice || item?.price}
                        </p>
                    </div>
                </div>

                {/* Rate & Review — only show if delivered */}
                {isdelivered && (
                    <button
                        onClick={() => navigate(`/product/${product?._id}`)}
                        className='flex items-center gap-2 px-4 py-2 border border-indigo-500 text-indigo-600 rounded-lg hover:bg-indigo-50 transition text-sm font-medium self-start md:self-center'
                    >
                        <StarOutlineIcon fontSize="small" />
                        Rate & Review
                    </button>
                )}

                {/* If not delivered, show status badge */}
                {!isdelivered && (
                    <span className='text-xs text-gray-400 italic self-start md:self-center'>
                        Review available after delivery
                    </span>
                )}

            </div>
        </div>
    );
};

export default Cartwithreview;