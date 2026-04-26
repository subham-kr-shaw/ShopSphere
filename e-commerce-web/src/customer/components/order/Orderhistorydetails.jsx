// import React from 'react'
// import Address from '../userdetail/Address'
// import Ordertracker from './Ordertracker'
// import Cartwithreview from './Cartwithreview'

// const Orderhistorydetails = () => {
//   return (
//     <div className='px-4 md:px-20'>
//       <div className='mt-4 md:mt-0'>
//         <Address/>
//       </div>
//       <div className='w-full mt-4'>
//         <Ordertracker/>
//       </div>
//       <div className='mt-4'>
//         <Cartwithreview/>
//         <Cartwithreview/>
//         <Cartwithreview/>
//         <Cartwithreview/>
//       </div>
//     </div>
//   )
// }

// export default Orderhistorydetails
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Address from '../userdetail/Address'
import Ordertracker from './Ordertracker'
import Cartwithreview from './Cartwithreview'
import { getorderbyid } from '../../../state/order/Action'

const Orderhistorydetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { order, loading } = useSelector(store => store.order);

    useEffect(() => {
        if (id) dispatch(getorderbyid(id));
    }, [id]);

    if (loading) return <p className="p-10 text-center text-gray-500">Loading order details...</p>;
    if (!order) return <p className="p-10 text-center text-gray-400">Order not found.</p>;

    return (
        <div className='px-4 md:px-20 py-6'>

            {/* Shipping Address */}
            <div className='mb-6'>
                <h2 className='text-base font-semibold text-gray-700 mb-2'>Delivery Address</h2>
                <div className='bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-sm text-gray-700'>
                    <p className='font-semibold'>
                        {order.shippingaddress?.firstname} {order.shippingaddress?.lastname}
                    </p>
                    <p>{order.shippingaddress?.streetaddress}</p>
                    <p>
                        {order.shippingaddress?.city}, {order.shippingaddress?.state} - {order.shippingaddress?.zipcode}
                    </p>
                    <p>📞 {order.shippingaddress?.mobile}</p>
                </div>
            </div>

            {/* Order Tracker — reflects real status */}
            <div className='w-full mb-6'>
                <Ordertracker orderstatus={order.orderstatus} />
            </div>

            {/* Order items with review option */}
            <div className='flex flex-col gap-3'>
                <h2 className='text-base font-semibold text-gray-700'>
                    {order.orderitems?.length} item{order.orderitems?.length !== 1 ? 's' : ''} in this order
                </h2>
                {order.orderitems?.map((item, idx) => (
                    <Cartwithreview
                        key={idx}
                        item={item}
                        orderstatus={order.orderstatus}
                    />
                ))}
            </div>

            {/* Order summary */}
            <div className='mt-6 bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-sm'>
                <h2 className='font-semibold text-gray-700 mb-3'>Order Summary</h2>
                <div className='flex justify-between text-gray-600 mb-1'>
                    <span>Total MRP</span>
                    <span>₹{order.totalprice}</span>
                </div>
                <div className='flex justify-between text-green-600 mb-1'>
                    <span>Discount</span>
                    <span>- ₹{order.discount}</span>
                </div>
                <div className='flex justify-between font-bold text-gray-900 border-t pt-2 mt-2'>
                    <span>Total Amount</span>
                    <span>₹{order.totaldiscountedprice}</span>
                </div>
            </div>

        </div>
    );
};

export default Orderhistorydetails;