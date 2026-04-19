// import React, { useEffect } from 'react'
// import Pricedetails from './Pricedetails'
// import Cart from './Cart'
// import { useDispatch, useSelector } from 'react-redux';
// import { getcart } from '../../../state/cart/Action';
// import { store } from '../../../state/store';

// const Cartpage = () => {
//   const dispatch = useDispatch();
//   const { cart } = useSelector((store) => store.cart);
//   useEffect(() => {
//     dispatch(getcart())
//   }, [])
//   return (
//     <div className="w-full h-full p-6">
//       <div className="flex flex-col md:flex-row md:items-start md:gap-6">
//         <div className="flex-1 flex flex-col gap-4">
//           {cart?.cart?.cartitems?.map((item) => (
//             <Cart key={item._id} item={item} />
//           ))}
//         </div>

//         <div className="w-full md:w-80">
//           <Pricedetails />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cartpage
// import React, { useEffect } from 'react'
// import Pricedetails from './Pricedetails'
// import Cart from './Cart'
// import { useDispatch, useSelector } from 'react-redux';
// import { getcart } from '../../../state/cart/Action';

// const Cartpage = () => {
//   const dispatch = useDispatch();
  
//   // ✅ Read cartitems directly — not cart?.cart?.cartitems
//   const { cartitems } = useSelector((store) => store.cart);

//   // ✅ Empty array — runs only once on mount, no infinite loop
//   useEffect(() => {
//     dispatch(getcart());
//   }, []);

//   return (
//     <div className="w-full h-full p-6">
//       <div className="flex flex-col md:flex-row md:items-start md:gap-6">
//         <div className="flex-1 flex flex-col gap-4">
//           {/* ✅ Use cartitems directly */}
//           {cartitems?.map((item) => (
//             <Cart key={item._id} item={item} />
//           ))}
//         </div>
//         <div className="w-full md:w-80">
//           <Pricedetails />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cartpage
import React, { useEffect } from 'react'
import Pricedetails from './Pricedetails'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux';
import { getcart } from '../../../state/cart/Action';

const Cartpage = () => {
  const dispatch = useDispatch();
  const { cartitems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getcart());
  }, []);

  return (
    <div className="w-full h-full p-6">
      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
        <div className="flex-1 flex flex-col gap-4">
          {/* ✅ filter(Boolean) guards against undefined items in array */}
          {cartitems?.filter(Boolean).map((item) => (
            <Cart key={item._id} item={item} />
          ))}
        </div>
        <div className="w-full md:w-80">
          <Pricedetails />
        </div>
      </div>
    </div>
  )
}

export default Cartpage