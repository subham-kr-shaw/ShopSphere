
// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle'
// import LocalShippingIcon from '@mui/icons-material/LocalShipping'
// import QrCodeIcon from '@mui/icons-material/QrCode'
// import LocationOnIcon from '@mui/icons-material/LocationOn'
// import PhoneIcon from '@mui/icons-material/Phone'
// import PersonIcon from '@mui/icons-material/Person'
// import { createorder } from '../../../state/order/Action'
// import { savepayment } from '../../../state/payment/Action'  // ✅ Redux action

// const Payment = () => {
//     const navigate  = useNavigate();
//     const dispatch  = useDispatch();

//     const { shippingaddress }   = useSelector(store => store.order);
//     const { cartitems }         = useSelector(store => store.cart);

//     const totalprice            = cartitems?.reduce((acc, item) => acc + (item.price || 0), 0) || 0;
//     const totaldiscountedprice  = cartitems?.reduce((acc, item) => acc + (item.discountedprice || 0), 0) || 0;
//     const discount              = totalprice - totaldiscountedprice;

//     const [paymentmode, setpaymentmode] = useState(null);
//     const [orderplaced, setorderplaced] = useState(false);
//     const [loading, setloading]         = useState(false);

//     const handleplaceorder = async () => {
//         if (!paymentmode || loading) return;
//         setloading(true);
//         try {
//             // ✅ Step 1: Save payment mode via Redux
//             // → POST /api/payment/save
//             // → backend creates payment_info doc
//             // → pushes its _id into user.payment[] in MongoDB
//             // → Redux stores it in state.payment.lastpayment
//             await dispatch(savepayment({
//                 paymentmode,
//                 amount: totaldiscountedprice,
//             }));

//             // ✅ Step 2: Create the order
//             await dispatch(createorder({ address: shippingaddress }));

//             setorderplaced(true);
//             setTimeout(() => navigate('/account/order'), 2500);
//         } catch (err) {
//             console.error("Order placement failed:", err);
//         } finally {
//             setloading(false);
//         }
//     };

//     if (orderplaced) {
//         return (
//             <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
//                 <CheckCircleIcon sx={{ fontSize: 80, color: '#4ade80' }} />
//                 <h2 className="text-2xl font-bold text-gray-800">Order Placed Successfully!</h2>
//                 <p className="text-gray-500 text-sm">
//                     Payment via:{' '}
//                     <span className="font-semibold">
//                         {paymentmode === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
//                     </span>
//                 </p>
//                 <p className="text-gray-400 text-sm">Redirecting to your orders...</p>
//             </div>
//         );
//     }

//     return (
//         <div className="flex flex-col lg:flex-row gap-6 px-2 py-4">

//             {/* ── LEFT ── */}
//             <div className="flex-1 flex flex-col gap-5">

//                 {/* Delivery address */}
//                 <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
//                     <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
//                         <LocationOnIcon fontSize="small" sx={{ color: '#6366f1' }} />
//                         Delivering To
//                     </h3>
//                     {shippingaddress ? (
//                         <div className="flex flex-col gap-2 text-sm text-gray-700">
//                             <div className="flex items-center gap-2">
//                                 <PersonIcon fontSize="small" sx={{ color: '#9ca3af' }} />
//                                 <span className="font-semibold uppercase">
//                                     {shippingaddress.firstname} {shippingaddress.lastname}
//                                 </span>
//                             </div>
//                             <div className="flex items-start gap-2">
//                                 <LocationOnIcon fontSize="small" sx={{ color: '#9ca3af', marginTop: '2px' }} />
//                                 <span>
//                                     {shippingaddress.streetaddress}, {shippingaddress.city},{' '}
//                                     {shippingaddress.state} - {shippingaddress.zipcode}
//                                 </span>
//                             </div>
//                             <div className="flex items-center gap-2">
//                                 <PhoneIcon fontSize="small" sx={{ color: '#9ca3af' }} />
//                                 <span>{shippingaddress.mobile}</span>
//                             </div>
//                         </div>
//                     ) : (
//                         <p className="text-sm text-red-400 italic">
//                             No address found. Please go back and fill the address form.
//                         </p>
//                     )}
//                 </div>

//                 {/* Payment method */}
//                 <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
//                     <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
//                         Choose Payment Method
//                     </h3>
//                     <div className="flex flex-col gap-3">

//                         {/* COD */}
//                         <div
//                             onClick={() => setpaymentmode('cod')}
//                             className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
//                                 ${paymentmode === 'cod'
//                                     ? 'border-indigo-500 bg-indigo-50'
//                                     : 'border-gray-200 hover:border-indigo-300'}`}
//                         >
//                             <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
//                                 ${paymentmode === 'cod' ? 'border-indigo-600' : 'border-gray-300'}`}>
//                                 {paymentmode === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
//                             </div>
//                             <LocalShippingIcon sx={{ color: paymentmode === 'cod' ? '#6366f1' : '#9ca3af' }} />
//                             <div>
//                                 <p className={`text-sm font-semibold ${paymentmode === 'cod' ? 'text-indigo-700' : 'text-gray-700'}`}>
//                                     Cash on Delivery
//                                 </p>
//                                 <p className="text-xs text-gray-400">Pay when your order arrives</p>
//                             </div>
//                         </div>

//                         {/* Online */}
//                         <div
//                             onClick={() => setpaymentmode('online')}
//                             className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
//                                 ${paymentmode === 'online'
//                                     ? 'border-indigo-500 bg-indigo-50'
//                                     : 'border-gray-200 hover:border-indigo-300'}`}
//                         >
//                             <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
//                                 ${paymentmode === 'online' ? 'border-indigo-600' : 'border-gray-300'}`}>
//                                 {paymentmode === 'online' && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
//                             </div>
//                             <QrCodeIcon sx={{ color: paymentmode === 'online' ? '#6366f1' : '#9ca3af' }} />
//                             <div>
//                                 <p className={`text-sm font-semibold ${paymentmode === 'online' ? 'text-indigo-700' : 'text-gray-700'}`}>
//                                     Online Payment
//                                 </p>
//                                 <p className="text-xs text-gray-400">Pay now via UPI / QR code</p>
//                             </div>
//                         </div>
//                     </div>

//                     {paymentmode === 'online' && (
//                         <div className="mt-5 flex flex-col items-center gap-3 p-5 bg-gray-50 border border-dashed border-indigo-300 rounded-xl">
//                             <p className="text-sm font-semibold text-gray-700">
//                                 Scan QR to Pay ₹{totaldiscountedprice}
//                             </p>
//                             <div className="w-48 h-48 bg-gray-100 rounded-xl flex flex-col items-center justify-center border border-gray-300">
//                                 <QrCodeIcon sx={{ fontSize: 56, color: '#d1d5db' }} />
//                                 <p className="text-xs text-gray-400 mt-1">QR Code coming soon</p>
//                             </div>
//                             <p className="text-xs text-gray-400 text-center">
//                                 After payment, click "Place Order" to confirm
//                             </p>
//                         </div>
//                     )}

//                     {paymentmode === 'cod' && (
//                         <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
//                             <p className="text-sm text-green-700 font-medium">
//                                 ✅ You'll pay ₹{totaldiscountedprice} when your order is delivered.
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* ── RIGHT: Order Summary ── */}
//             <div className="w-full lg:w-80 flex-shrink-0">
//                 <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm sticky top-20">
//                     <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
//                         Order Summary
//                     </h3>

//                     <div className="flex flex-col gap-3 mb-4 max-h-52 overflow-y-auto">
//                         {cartitems?.map((item, idx) => (
//                             <div key={idx} className="flex items-center gap-3">
//                                 <img
//                                     src={item?.product?.imageurl || 'https://via.placeholder.com/48'}
//                                     alt={item?.product?.title}
//                                     className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-gray-100"
//                                 />
//                                 <div className="flex-1 min-w-0">
//                                     <p className="text-xs font-medium text-gray-800 truncate">
//                                         {item?.product?.title}
//                                     </p>
//                                     <p className="text-xs text-gray-400">
//                                         Size: {item?.size} · Qty: {item?.quantity}
//                                     </p>
//                                 </div>
//                                 <p className="text-xs font-bold text-gray-800 flex-shrink-0">
//                                     ₹{item?.discountedprice}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>

//                     <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
//                         <div className="flex justify-between text-sm text-gray-600">
//                             <span>Total MRP</span>
//                             <span>₹{totalprice}</span>
//                         </div>
//                         <div className="flex justify-between text-sm text-green-600">
//                             <span>Discount</span>
//                             <span>- ₹{discount}</span>
//                         </div>
//                         <div className="flex justify-between text-sm text-green-600">
//                             <span>Delivery</span>
//                             <span>Free</span>
//                         </div>
//                         <div className="flex justify-between font-bold text-gray-900 border-t pt-3 mt-1 text-base">
//                             <span>Total Amount</span>
//                             <span>₹{totaldiscountedprice}</span>
//                         </div>
//                     </div>

//                     {/* Selected payment mode pill */}
//                     {paymentmode && (
//                         <div className="mt-3 flex items-center gap-2 p-2 bg-indigo-50 border border-indigo-100 rounded-lg">
//                             {paymentmode === 'cod'
//                                 ? <LocalShippingIcon sx={{ fontSize: 16, color: '#6366f1' }} />
//                                 : <QrCodeIcon sx={{ fontSize: 16, color: '#6366f1' }} />
//                             }
//                             <span className="text-xs font-semibold text-indigo-700">
//                                 {paymentmode === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
//                             </span>
//                         </div>
//                     )}

//                     <button
//                         onClick={handleplaceorder}
//                         disabled={!paymentmode || loading}
//                         className={`mt-4 w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-all
//                             ${paymentmode && !loading
//                                 ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer shadow-md'
//                                 : 'bg-gray-200 text-gray-400 cursor-not-allowed'
//                             }`}
//                     >
//                         {loading ? 'Placing Order...' : paymentmode ? 'Place Order' : 'Select Payment Method'}
//                     </button>

//                     {!paymentmode && (
//                         <p className="text-xs text-center text-gray-400 mt-2">
//                             Choose a payment method above to continue
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payment;

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import QrCodeIcon from '@mui/icons-material/QrCode'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import PersonIcon from '@mui/icons-material/Person'
import { createorder } from '../../../state/order/Action'
import { savepayment } from '../../../state/payment/Action'
import { getcart } from '../../../state/cart/Action'   // ✅ import getcart

const Payment = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { shippingaddress } = useSelector(store => store.order);
    const { cart, cartitems } = useSelector(store => store.cart);

    // ✅ On reload cartitems is empty — fetch cart from server on mount
    useEffect(() => {
        dispatch(getcart());
    }, []);

    // ✅ Prefer server-calculated totals from cart object (survives reload)
    //    Fall back to client-calculated from cartitems if cart not loaded yet
    const totalprice = cart?.totalprice
        ?? cartitems?.reduce((acc, item) => acc + (item.price || 0), 0)
        ?? 0;

    const totaldiscountedprice = cart?.totaldiscountedprice
        ?? cartitems?.reduce((acc, item) => acc + (item.discountedprice || 0), 0)
        ?? 0;

    const discount = cart?.discounte        // ✅ use server discount if available
        ?? (totalprice - totaldiscountedprice);

    const [paymentmode, setpaymentmode] = useState(null);
    const [orderplaced, setorderplaced] = useState(false);
    const [loading, setloading] = useState(false);

    const handleplaceorder = async () => {
        if (!paymentmode || loading) return;
        setloading(true);
        try {
            // Step 1: Save payment mode → updates user.payment[] in MongoDB
            await dispatch(savepayment({
                paymentmode,
                amount: totaldiscountedprice,
            }));

            // Step 2: Create the order
            await dispatch(createorder({ address: shippingaddress }));

            setorderplaced(true);
            setTimeout(() => navigate('/account/order'), 2500);
        } catch (err) {
            console.error("Order placement failed:", err);
        } finally {
            setloading(false);
        }
    };

    if (orderplaced) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <CheckCircleIcon sx={{ fontSize: 80, color: '#4ade80' }} />
                <h2 className="text-2xl font-bold text-gray-800">Order Placed Successfully!</h2>
                <p className="text-gray-500 text-sm">
                    Payment via:{' '}
                    <span className="font-semibold">
                        {paymentmode === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                    </span>
                </p>
                <p className="text-gray-400 text-sm">Redirecting to your orders...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6 px-2 py-4">

            {/* ── LEFT ── */}
            <div className="flex-1 flex flex-col gap-5">

                {/* Delivery address */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <LocationOnIcon fontSize="small" sx={{ color: '#6366f1' }} />
                        Delivering To
                    </h3>
                    {shippingaddress ? (
                        <div className="flex flex-col gap-2 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <PersonIcon fontSize="small" sx={{ color: '#9ca3af' }} />
                                <span className="font-semibold uppercase">
                                    {shippingaddress.firstname} {shippingaddress.lastname}
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <LocationOnIcon fontSize="small" sx={{ color: '#9ca3af', marginTop: '2px' }} />
                                <span>
                                    {shippingaddress.streetaddress}, {shippingaddress.city},{' '}
                                    {shippingaddress.state} - {shippingaddress.zipcode}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon fontSize="small" sx={{ color: '#9ca3af' }} />
                                <span>{shippingaddress.mobile}</span>
                            </div>
                        </div>
                    ) : (
                        <p className="text-sm text-red-400 italic">
                            No address found. Please go back and fill the address form.
                        </p>
                    )}
                </div>

                {/* Payment method */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                        Choose Payment Method
                    </h3>
                    <div className="flex flex-col gap-3">

                        {/* COD */}
                        <div
                            onClick={() => setpaymentmode('cod')}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
                                ${paymentmode === 'cod'
                                    ? 'border-indigo-500 bg-indigo-50'
                                    : 'border-gray-200 hover:border-indigo-300'}`}
                        >
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                                ${paymentmode === 'cod' ? 'border-indigo-600' : 'border-gray-300'}`}>
                                {paymentmode === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                            </div>
                            <LocalShippingIcon sx={{ color: paymentmode === 'cod' ? '#6366f1' : '#9ca3af' }} />
                            <div>
                                <p className={`text-sm font-semibold ${paymentmode === 'cod' ? 'text-indigo-700' : 'text-gray-700'}`}>
                                    Cash on Delivery
                                </p>
                                <p className="text-xs text-gray-400">Pay when your order arrives</p>
                            </div>
                        </div>

                        {/* Online */}
                        <div
                            onClick={() => setpaymentmode('online')}
                            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all
                                ${paymentmode === 'online'
                                    ? 'border-indigo-500 bg-indigo-50'
                                    : 'border-gray-200 hover:border-indigo-300'}`}
                        >
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0
                                ${paymentmode === 'online' ? 'border-indigo-600' : 'border-gray-300'}`}>
                                {paymentmode === 'online' && <div className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                            </div>
                            <QrCodeIcon sx={{ color: paymentmode === 'online' ? '#6366f1' : '#9ca3af' }} />
                            <div>
                                <p className={`text-sm font-semibold ${paymentmode === 'online' ? 'text-indigo-700' : 'text-gray-700'}`}>
                                    Online Payment
                                </p>
                                <p className="text-xs text-gray-400">Pay now via UPI / QR code</p>
                            </div>
                        </div>
                    </div>

                    {paymentmode === 'online' && (
                        <div className="mt-5 flex flex-col items-center gap-3 p-5 bg-gray-50 border border-dashed border-indigo-300 rounded-xl">
                            <p className="text-sm font-semibold text-gray-700">
                                Scan QR to Pay ₹{totaldiscountedprice}
                            </p>
                            <div className="w-48 h-48 bg-gray-100 rounded-xl flex flex-col items-center justify-center border border-gray-300">
                                <QrCodeIcon sx={{ fontSize: 56, color: '#d1d5db' }} />
                                <p className="text-xs text-gray-400 mt-1">QR Code coming soon</p>
                            </div>
                            <p className="text-xs text-gray-400 text-center">
                                After payment, click "Place Order" to confirm
                            </p>
                        </div>
                    )}

                    {paymentmode === 'cod' && (
                        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-sm text-green-700 font-medium">
                                ✅ You'll pay ₹{totaldiscountedprice} when your order is delivered.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* ── RIGHT: Order Summary ── */}
            <div className="w-full lg:w-80 flex-shrink-0">
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm sticky top-20">
                    <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">
                        Order Summary
                    </h3>

                    {/* Cart items list */}
                    <div className="flex flex-col gap-3 mb-4 max-h-52 overflow-y-auto">
                        {cartitems?.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <img
                                    src={item?.product?.imageurl || 'https://via.placeholder.com/48'}
                                    alt={item?.product?.title}
                                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 border border-gray-100"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs font-medium text-gray-800 truncate">
                                        {item?.product?.title}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Size: {item?.size} · Qty: {item?.quantity}
                                    </p>
                                </div>
                                <p className="text-xs font-bold text-gray-800 flex-shrink-0">
                                    ₹{item?.discountedprice}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Price breakdown — always from server cart */}
                    <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Total MRP</span>
                            <span>₹{totalprice}</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-600">
                            <span>Discount</span>
                            <span>- ₹{discount}</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-600">
                            <span>Delivery</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between font-bold text-gray-900 border-t pt-3 mt-1 text-base">
                            <span>Total Amount</span>
                            <span>₹{totaldiscountedprice}</span>
                        </div>
                    </div>

                    {/* Selected payment mode pill */}
                    {paymentmode && (
                        <div className="mt-3 flex items-center gap-2 p-2 bg-indigo-50 border border-indigo-100 rounded-lg">
                            {paymentmode === 'cod'
                                ? <LocalShippingIcon sx={{ fontSize: 16, color: '#6366f1' }} />
                                : <QrCodeIcon sx={{ fontSize: 16, color: '#6366f1' }} />
                            }
                            <span className="text-xs font-semibold text-indigo-700">
                                {paymentmode === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                            </span>
                        </div>
                    )}

                    <button
                        onClick={handleplaceorder}
                        disabled={!paymentmode || loading}
                        className={`mt-4 w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-all
                            ${paymentmode && !loading
                                ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer shadow-md'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            }`}
                    >
                        {loading ? 'Placing Order...' : paymentmode ? 'Place Order' : 'Select Payment Method'}
                    </button>

                    {!paymentmode && (
                        <p className="text-xs text-center text-gray-400 mt-2">
                            Choose a payment method above to continue
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Payment;