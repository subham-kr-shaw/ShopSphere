// import React from 'react'
// import Address from './Address'
// import Cartpage from '../cart/Cartpage'

// const Ordersummary = () => {
//   return (
//     <div >
//       <div >
//         <Address/>
//       </div>
//       <div>
//         <Cartpage/>
//       </div>
//     </div>
//   )
// }

// export default Ordersummary
// import React from 'react'
// import Address from './Address'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import Cart from '../cart/Cart'
// // import Pricecard from '../cart/Pricecard'
// import Pricecard from './pricecard'

// const Ordersummary = () => {
//     const { cartitems } = useSelector(store => store.cart);
//     const navigate = useNavigate();

//     return (
//         <div className="w-full p-4 flex flex-col gap-6">

//             {/* ✅ Show selected address at top */}
//             <div>
//                 <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
//                     Delivery Address
//                 </h3>
//                 <Address />
//             </div>

//             {/* ✅ Show cart items */}
//             <div>
//                 <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
//                     Order Items ({cartitems?.length || 0})
//                 </h3>
//                 <div className="flex flex-col gap-4">
//                     {cartitems?.filter(Boolean).map((item) => (
//                         <Cart key={item._id} item={item} />
//                     ))}
//                 </div>
//             </div>

//             {/* ✅ Price summary + proceed to payment */}
//             <div className="flex justify-end">
//                 <div className="w-full md:w-80">
//                     <Pricecard
//                         // ✅ override checkout button to go to payment step
//                         oncheckout={() => navigate('/checkout?step=4')}
//                         buttonlabel="Proceed to Payment"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ordersummary;

import React from 'react'
import Address from './Address'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cart from '../cart/Cart'
import Pricecard from './Pricecard'

const Ordersummary = () => {
    const { cartitems } = useSelector(store => store.cart);
    const navigate = useNavigate();

    return (
        <div className="w-full p-4 flex flex-col gap-6">

            {/* Delivery address from Redux */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Delivery Address
                </h3>
                <Address />
            </div>

            {/* Cart items — order NOT created yet, just reviewing */}
            <div>
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Order Items ({cartitems?.length || 0})
                </h3>
                <div className="flex flex-col gap-4">
                    {cartitems?.filter(Boolean).map((item) => (
                        <Cart key={item._id} item={item} />
                    ))}
                </div>
            </div>

            {/* Price summary — go to payment step, order still NOT created */}
            <div className="flex justify-end">
                <div className="w-full md:w-80">
                    <Pricecard
                        oncheckout={() => navigate('/checkout?step=4')}
                        buttonlabel="Proceed to Payment"
                    />
                </div>
            </div>
        </div>
    );
};

export default Ordersummary;