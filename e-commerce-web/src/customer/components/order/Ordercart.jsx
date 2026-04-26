// import React from 'react'
// import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const statuscolor = {
//     PENDING:   { text: 'text-gray-500',   bg: 'bg-gray-50   border-gray-300',   dot: 'bg-gray-400'   },
//     PLACED:    { text: 'text-teal-600',   bg: 'bg-teal-50   border-teal-300',   dot: 'bg-teal-500'   },
//     CONFIRMED: { text: 'text-blue-600',   bg: 'bg-blue-50   border-blue-300',   dot: 'bg-blue-500'   },
//     SHIPPED:   { text: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-300', dot: 'bg-indigo-500' },
//     DELIVERED: { text: 'text-green-600',  bg: 'bg-green-50  border-green-300',  dot: 'bg-green-500'  },
//     CANCELLED: { text: 'text-red-500',    bg: 'bg-red-50    border-red-300',    dot: 'bg-red-400'    },
// };

// const Ordercart = ({ orderid, item, orderstatus, orderDate, isselected, onclick, ondetailclick }) => {
//     const product = item?.product;
//     const status = orderstatus?.toUpperCase() || 'PENDING';
//     const colors = statuscolor[status] || statuscolor.PENDING;

//     const formatteddate = orderDate
//         ? new Date(orderDate).toLocaleDateString('en-IN', {
//             day: '2-digit', month: 'short', year: 'numeric'
//           })
//         : '';

//     return (
//         <div
//             onClick={onclick}
//             className={`cursor-pointer rounded-xl border-2 transition-all duration-200
//                 ${isselected
//                     ? `${colors.bg} ${colors.text} shadow-md scale-[1.005]`
//                     : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-sm'
//                 }`}
//         >
//             <div className='flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-3'>

//                 {/* Product info */}
//                 <div className='flex items-center gap-3 w-full md:w-[45%]'>
//                     <img
//                         src={product?.imageurl || 'https://via.placeholder.com/80'}
//                         alt={product?.title}
//                         className='rounded-lg w-16 h-16 object-cover flex-shrink-0 border border-gray-100'
//                     />
//                     <div>
//                         <h1 className='text-sm font-semibold text-gray-900 line-clamp-2'>
//                             {product?.title || 'Product'}
//                         </h1>
//                         <p className='text-xs text-gray-400 mt-0.5'>Size: {item?.size}</p>
//                         <p className='text-xs text-gray-400'>Qty: {item?.quantity}</p>
//                     </div>
//                 </div>

//                 {/* Price */}
//                 <div className='text-sm font-bold text-gray-800 md:w-[12%]'>
//                     ₹{item?.discountedprice || item?.price}
//                 </div>

//                 {/* Status */}
//                 <div className='flex flex-col gap-1 md:w-[28%]'>
//                     <div className={`flex items-center gap-1.5 text-sm font-semibold ${colors.text}`}>
//                         <AdjustOutlinedIcon fontSize="small" />
//                         <span className='capitalize'>{status.toLowerCase()}</span>
//                     </div>
//                     {formatteddate && (
//                         <p className='text-xs text-gray-400 ml-6'>Ordered on {formatteddate}</p>
//                     )}
//                 </div>

//                 {/* ✅ Separate detail arrow — doesn't interfere with status panel click */}
//                 <div
//                     onClick={(e) => { e.stopPropagation(); ondetailclick && ondetailclick(); }}
//                     className='p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition self-center cursor-pointer'
//                     title="View order details"
//                 >
//                     <ArrowForwardIosIcon fontSize="small" />
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Ordercart;
import React from 'react'
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const statusconfig = {
    PENDING:   { text: 'text-gray-500',   bg: 'bg-gray-50   border-gray-300',   dot: 'bg-gray-400'   },
    PLACED:    { text: 'text-teal-600',   bg: 'bg-teal-50   border-teal-300',   dot: 'bg-teal-500'   },
    CONFIRMED: { text: 'text-blue-600',   bg: 'bg-blue-50   border-blue-300',   dot: 'bg-blue-500'   },
    SHIPPED:   { text: 'text-indigo-600', bg: 'bg-indigo-50 border-indigo-300', dot: 'bg-indigo-500' },
    DELIVERED: { text: 'text-green-600',  bg: 'bg-green-50  border-green-300',  dot: 'bg-green-500'  },
    CANCELLED: { text: 'text-red-500',    bg: 'bg-red-50    border-red-300',    dot: 'bg-red-400'    },
};

const Ordercart = ({ order, isselected, onclick, ondetailclick }) => {
    const status = order?.orderstatus?.toUpperCase() || 'PENDING';
    const colors = statusconfig[status] || statusconfig.PENDING;

    const formatteddate = order?.orderDate
        ? new Date(order.orderDate).toLocaleDateString('en-IN', {
            day: '2-digit', month: 'short', year: 'numeric'
          })
        : '';

    return (
        <div
            onClick={onclick}
            className={`cursor-pointer rounded-xl border-2 transition-all duration-200
                ${isselected
                    ? `${colors.bg} shadow-md scale-[1.005]`
                    : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'
                }`}
        >
            <div className='p-4'>

                {/* ── Top row: order meta ── */}
                <div className='flex items-center justify-between mb-3'>
                    <div className='flex flex-col'>
                        <span className='text-xs text-gray-400'>Order ID</span>
                        <span className='text-xs font-mono text-gray-600 truncate max-w-[160px]'>
                            #{order?._id?.slice(-8).toUpperCase()}
                        </span>
                    </div>

                    <div className='flex flex-col items-end'>
                        <span className='text-xs text-gray-400'>Ordered on</span>
                        <span className='text-xs text-gray-600'>{formatteddate}</span>
                    </div>
                </div>

                {/* ── Items list — all items in this order ── */}
                <div className='flex flex-col gap-2 mb-3'>
                    {order?.orderitems?.map((item, idx) => {
                        const product = item?.product;
                        return (
                            <div key={idx} className='flex items-center gap-3'>
                                <img
                                    src={product?.imageurl || 'https://via.placeholder.com/56'}
                                    alt={product?.title}
                                    className='w-14 h-14 rounded-lg object-cover flex-shrink-0 border border-gray-100'
                                />
                                <div className='flex-1 min-w-0'>
                                    <p className='text-sm font-semibold text-gray-900 truncate'>
                                        {product?.title || 'Product'}
                                    </p>
                                    <p className='text-xs text-gray-400'>
                                        Size: {item?.size} &nbsp;·&nbsp; Qty: {item?.quantity}
                                    </p>
                                </div>
                                <p className='text-sm font-bold text-gray-800 flex-shrink-0'>
                                    ₹{item?.discountedprice || item?.price}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* ── Bottom row: total + status + arrow ── */}
                <div className='flex items-center justify-between border-t pt-3 mt-1'>

                    {/* Order total */}
                    <div>
                        <span className='text-xs text-gray-400'>Order Total</span>
                        <p className='text-sm font-bold text-gray-900'>
                            ₹{order?.totaldiscountedprice}
                            <span className='text-xs font-normal text-gray-400 ml-1'>
                                ({order?.orderitems?.length} item{order?.orderitems?.length !== 1 ? 's' : ''})
                            </span>
                        </p>
                    </div>

                    {/* Status badge */}
                    <div className={`flex items-center gap-1.5 text-sm font-semibold ${colors.text}`}>
                        <AdjustOutlinedIcon fontSize="small" />
                        <span className='capitalize'>{status.toLowerCase()}</span>
                    </div>

                    {/* ✅ Arrow — navigates to full order detail page */}
                    <div
                        onClick={(e) => { e.stopPropagation(); ondetailclick && ondetailclick(); }}
                        className='p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition cursor-pointer'
                        title="View order details"
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ordercart;
// import React from 'react'
// import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
// import { useNavigate } from 'react-router-dom';

// const statuscolor = {
//     PENDING: 'text-gray-500',
//     CONFIRMED: 'text-blue-500',
//     SHIPPED: 'text-indigo-500',
//     DELIVERED: 'text-green-600',
//     CANCELLED: 'text-red-500',
// };

// const statusbg = {
//     PENDING: 'bg-gray-50 border-gray-200',
//     CONFIRMED: 'bg-blue-50 border-blue-200',
//     SHIPPED: 'bg-indigo-50 border-indigo-200',
//     DELIVERED: 'bg-green-50 border-green-200',
//     CANCELLED: 'bg-red-50 border-red-200',
// };

// const Ordercart = ({ orderid, item, orderstatus, orderDate, isselected, onclick }) => {
//     const navigate = useNavigate();

//     const product = item?.product;
//     const status = orderstatus?.toUpperCase() || 'PENDING';

//     const formatteddate = orderDate
//         ? new Date(orderDate).toLocaleDateString('en-IN', {
//             day: '2-digit', month: 'short', year: 'numeric'
//           })
//         : '';

//     const handleclick = () => {
//         // ✅ First call parent to update the status panel
//         if (onclick) onclick();
//         // ✅ Then navigate to order detail
//         navigate(`/account/order/${orderid}`);
//     };

//     return (
//         <div
//             onClick={handleclick}
//             className={`cursor-pointer rounded-xl border-2 transition-all duration-200 shadow-sm hover:shadow-md
//                 ${isselected
//                     ? `${statusbg[status]} border-current shadow-md scale-[1.01]`
//                     : 'bg-white border-gray-100 hover:border-gray-300'
//                 }`}
//         >
//             <div className='flex flex-col md:flex-row md:items-center md:justify-between p-4 gap-3'>

//                 {/* Product info */}
//                 <div className='flex items-center gap-3 w-full md:w-[40%]'>
//                     <img
//                         src={product?.imageurl || 'https://via.placeholder.com/80'}
//                         alt={product?.title}
//                         className='rounded-lg w-16 h-16 object-cover flex-shrink-0 border border-gray-100'
//                     />
//                     <div>
//                         <h1 className='text-sm font-semibold text-gray-900 line-clamp-2'>
//                             {product?.title || 'Product'}
//                         </h1>
//                         <p className='text-xs text-gray-400 mt-0.5'>Size: {item?.size}</p>
//                         <p className='text-xs text-gray-400'>Qty: {item?.quantity}</p>
//                     </div>
//                 </div>

//                 {/* Price */}
//                 <div className='text-sm font-bold text-gray-800 md:w-[15%]'>
//                     ₹{item?.discountedprice || item?.price}
//                 </div>

//                 {/* Status */}
//                 <div className='flex flex-col gap-1 md:w-[30%]'>
//                     <div className={`flex items-center gap-1.5 text-sm font-semibold ${statuscolor[status]}`}>
//                         <AdjustOutlinedIcon fontSize="small" />
//                         <span className='capitalize'>{status.toLowerCase()}</span>
//                     </div>
//                     {formatteddate && (
//                         <p className='text-xs text-gray-400 ml-6'>Ordered on {formatteddate}</p>
//                     )}
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Ordercart;
