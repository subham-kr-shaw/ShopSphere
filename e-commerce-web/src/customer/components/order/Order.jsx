// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import Filters from './Filters'
// import Ordercart from './Ordercart'
// import { getallorders } from '../../../state/order/Action'

// const Order = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { orders, loading } = useSelector(store => store.order);
//     const [selectedorderid, setselectedorderid] = useState(null);

//     useEffect(() => {
//         dispatch(getallorders());
//     }, []);

//     // ✅ Auto-select first order on load so status panel isn't blank
//     useEffect(() => {
//         if (orders?.length > 0 && !selectedorderid) {
//             setselectedorderid(orders[0]._id);
//         }
//     }, [orders]);

//     const selectedorder = orders?.find(o => o._id === selectedorderid);
//     const activestatus = selectedorder?.orderstatus?.toUpperCase() || null;

//     if (loading) return (
//         <div className="flex justify-center items-center h-64">
//             <p className="text-gray-400 text-sm">Loading your orders...</p>
//         </div>
//     );

//     return (
//         <div className='md:flex p-4 gap-4 min-h-screen bg-gray-50'>

//             {/* LEFT — Read-only status panel */}
//             <div className='md:w-64 mb-4 md:mb-0 flex-shrink-0'>
//                 <Filters activestatus={activestatus} />
//             </div>

//             {/* RIGHT — Orders list */}
//             <div className='flex flex-col gap-3 flex-1'>
//                 {orders?.length > 0 ? (
//                     orders.map(order =>
//                         order.orderitems?.map((item, idx) => (
//                             <Ordercart
//                                 key={`${order._id}-${idx}`}
//                                 orderid={order._id}
//                                 item={item}
//                                 orderstatus={order.orderstatus}
//                                 orderDate={order.orderDate}
//                                 isselected={selectedorderid === order._id}
//                                 // ✅ Click updates status panel — navigate separately via arrow button
//                                 onclick={() => setselectedorderid(order._id)}
//                                 ondetailclick={() => navigate(`/account/order/${order._id}`)}
//                             />
//                         ))
//                     )
//                 ) : (
//                     <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//                         <span className="text-5xl mb-3">📦</span>
//                         <p className="text-lg font-medium">No orders found</p>
//                         <p className="text-sm">Place your first order to see it here</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Order;
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Filters from './Filters'
import Ordercart from './Ordercart'
import { getallorders } from '../../../state/order/Action'

const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { orders, loading } = useSelector(store => store.order);
    const [selectedorderid, setselectedorderid] = useState(null);

    useEffect(() => {
        dispatch(getallorders());
    }, []);

    // ✅ Refresh when window regains focus — picks up admin status changes
    useEffect(() => {
        const refresh = () => dispatch(getallorders());
        window.addEventListener('focus', refresh);
        return () => window.removeEventListener('focus', refresh);
    }, []);

    // ✅ Auto-select first order on load
    useEffect(() => {
        if (orders?.length > 0 && !selectedorderid) {
            setselectedorderid(orders[0]._id);
        }
    }, [orders]);

    const selectedorder = orders?.find(o => o._id === selectedorderid);
    const activestatus = selectedorder?.orderstatus?.toUpperCase() || null;

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <p className="text-gray-400 text-sm">Loading your orders...</p>
        </div>
    );

    return (
        <div className='md:flex p-4 gap-4 min-h-screen bg-gray-50'>

            {/* LEFT — Read-only status panel */}
            <div className='md:w-64 mb-4 md:mb-0 flex-shrink-0'>
                <Filters activestatus={activestatus} />
            </div>

            {/* RIGHT — ONE card per ORDER (not per item) */}
            <div className='flex flex-col gap-3 flex-1'>
                {orders?.length > 0 ? (
                    orders.map(order => (
                        <Ordercart
                            key={order._id}
                            order={order}
                            isselected={selectedorderid === order._id}
                            // ✅ Click card body → highlight status panel
                            onclick={() => setselectedorderid(order._id)}
                            // ✅ Click arrow → navigate to full order detail
                            ondetailclick={() => navigate(`/account/order/${order._id}`)}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                        <span className="text-5xl mb-3">📦</span>
                        <p className="text-lg font-medium">No orders found</p>
                        <p className="text-sm">Place your first order to see it here</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Order;
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import Filters from './Filters'
// import Ordercart from './Ordercart'
// import { getallorders } from '../../../state/order/Action'

// const Order = () => {
//     const dispatch = useDispatch();
//     const { orders, loading } = useSelector(store => store.order);

//     // ✅ Tracks which order is currently selected/clicked
//     const [selectedorderid, setselectedorderid] = useState(null);

//     useEffect(() => {
//         dispatch(getallorders());
//     }, []);

//     // ✅ Find the currently selected order's status to highlight in the filter panel
//     const selectedorder = orders?.find(o => o._id === selectedorderid);
//     const activestatus = selectedorder?.orderstatus?.toUpperCase() || null;

//     if (loading) return <p className="p-10 text-center text-gray-500">Loading orders...</p>;

//     return (
//         <div className='md:flex p-4 gap-4 min-h-screen bg-gray-50'>

//             {/* LEFT — Filter panel (read-only, just highlights current order status) */}
//             <div className='md:w-64 mb-4 md:mb-0 flex-shrink-0'>
//                 <Filters activestatus={activestatus} />
//             </div>

//             {/* RIGHT — Orders list */}
//             <div className='flex flex-col gap-3 flex-1'>
//                 {orders?.length > 0 ? (
//                     orders.map(order =>
//                         order.orderitems?.map((item, idx) => (
//                             <Ordercart
//                                 key={`${order._id}-${idx}`}
//                                 orderid={order._id}
//                                 item={item}
//                                 orderstatus={order.orderstatus}
//                                 orderDate={order.orderDate}
//                                 isselected={selectedorderid === order._id}
//                                 onclick={() => setselectedorderid(order._id)}
//                             />
//                         ))
//                     )
//                 ) : (
//                     <div className="flex flex-col items-center justify-center py-20 text-gray-400">
//                         <span className="text-5xl mb-3">📦</span>
//                         <p className="text-lg font-medium">No orders found</p>
//                         <p className="text-sm">Place your first order to see it here</p>
//                     </div>
//                 )}
//             </div>

//         </div>
//     );
// };

// export default Order;