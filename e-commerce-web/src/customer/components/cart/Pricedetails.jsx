// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
// import { getcart } from '../../../state/cart/Action';

// const Pricedetails = () => {
//   const navigate=useNavigate();
//   const dispatch=useDispatch()

//    const {cart}=useSelector(store=>store.cart);
//    const c=cart;
//    console.log("price",c);

//   const handlecheckout=()=>{
//     navigate(`/checkout?step=2`)//webstepper.jsx
//   }
//   return (
//     <div className="w-full md:w-80 h-full m-3 p-4 rounded-lg shadow-md bg-white border border-gray-200 md:sticky md:top-20">
//       <div className="text-center font-semibold mb-3">Price Details</div>
//       <div className="flex justify-between py-2">
//         <div className="text-sm text-gray-600">Price</div>
//         <div className="text-sm text-gray-800">₹{cart?.cart?.totalprice}</div>
//       </div>
//       <div className="flex justify-between py-2">
//         <div className="text-sm text-gray-600">Discount</div>
//         <div className="text-sm text-green-600">-₹{cart?.cart?.discount}</div>
//       </div>
//       <div className="flex justify-between py-2">
//         <div className="text-sm text-gray-600">Delivery</div>
//         <div className="text-sm text-green-600">Free</div>
//       </div>
//       <div className="flex justify-between py-3 border-t border-gray-100 mt-3">
//         <div className="text-base font-medium">Total Amount</div>
//         <div className="text-base font-semibold text-gray-800">₹{cart?.cart?.totaldiscountedprice}</div>
//       </div>

//       <button
//         type="submit"
//         onClick={handlecheckout}
//         className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
//       >
//         Add to bag
//       </button>
//     </div>
//   )
// }

// export default Pricedetails;
// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'

// const Pricedetails = () => {
//   const navigate = useNavigate();

//   // ✅ Read cartitems directly — NOT cart?.cart
//   const { cartitems } = useSelector(store => store.cart);

//   // ✅ Compute totals from live cartitems array
//   const totalprice = cartitems?.reduce((acc, item) => acc + item.price, 0) || 0;
//   const totaldiscountedprice = cartitems?.reduce((acc, item) => acc + item.discountedprice, 0) || 0;
//   const discount = totalprice - totaldiscountedprice;

//   const handlecheckout = () => {
//     navigate(`/checkout?step=2`)
//   }

//   return (
//     <div className="w-full md:w-80 h-full m-3 p-4 rounded-lg shadow-md bg-white border border-gray-200 md:sticky md:top-20">
//       <div className="text-center font-semibold mb-3">Price Details</div>
//       <div className="flex justify-between py-2">
//         <div className="text-sm text-gray-600">Price</div>
//         <div className="text-sm text-gray-800">₹{totalprice}</div>
//       </div>
//       <div className="flex justify-between py-2">
//         <div className="text-sm text-gray-600">Discount</div>
//         <div className="text-sm text-green-600">-₹{discount}</div>
//       </div>
//       <div className="flex justify-between py-2">
//         <div className="text-sm text-gray-600">Delivery</div>
//         <div className="text-sm text-green-600">Free</div>
//       </div>
//       <div className="flex justify-between py-3 border-t border-gray-100 mt-3">
//         <div className="text-base font-medium">Total Amount</div>
//         <div className="text-base font-semibold text-gray-800">₹{totaldiscountedprice}</div>
//       </div>
//       <button
//         type="submit"
//         onClick={handlecheckout}
//         className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
//       >
//         Add to bag
//       </button>
//     </div>
//   )
// }

// export default Pricedetails;
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Pricedetails = () => {
  const navigate = useNavigate();

  // ✅ Read cartitems directly — compute totals reactively
  const { cartitems } = useSelector(store => store.cart);

  const totalprice = cartitems?.reduce((acc, item) => acc + item.price, 0) || 0;
  const totaldiscountedprice = cartitems?.reduce((acc, item) => acc + item.discountedprice, 0) || 0;
  const discount = totalprice - totaldiscountedprice;

  const handlecheckout = () => {
    navigate(`/checkout?step=2`)
  }

  return (
    <div className="w-full md:w-80 h-full m-3 p-4 rounded-lg shadow-md bg-white border border-gray-200 md:sticky md:top-20">
      <div className="text-center font-semibold mb-3">Price Details</div>
      <div className="flex justify-between py-2">
        <div className="text-sm text-gray-600">Price</div>
        <div className="text-sm text-gray-800">₹{totalprice}</div>
      </div>
      <div className="flex justify-between py-2">
        <div className="text-sm text-gray-600">Discount</div>
        <div className="text-sm text-green-600">-₹{discount}</div>
      </div>
      <div className="flex justify-between py-2">
        <div className="text-sm text-gray-600">Delivery</div>
        <div className="text-sm text-green-600">Free</div>
      </div>
      <div className="flex justify-between py-3 border-t border-gray-100 mt-3">
        <div className="text-base font-medium">Total Amount</div>
        <div className="text-base font-semibold text-gray-800">₹{totaldiscountedprice}</div>
      </div>
      {/* <button
        type="submit"
        onClick={handlecheckout}
        disabled
        className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
      >
        Add to bag
      </button> */}
      <button
        type="submit"
        onClick={handlecheckout}
        disabled={totaldiscountedprice === 0}
        className={`mt-6 w-full rounded-md px-4 py-2 text-base font-medium text-white focus:outline-none
    ${totaldiscountedprice === 0
            ? 'bg-indigo-300 cursor-not-allowed'
            : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
          }`}
      >
        Add to bag
      </button>
    </div>
  )
}

export default Pricedetails;