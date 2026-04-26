// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Homepage from '../customer/pages/Homepage/Homepage'
// import Cart from '../customer/components/cart/Cart'
// import Footer from '../customer/components/footer/Footer'
// import Product from '../customer/components/Product/Product'
// import Productdetails from '../customer/components/Productdetails/Productdetails'
// import Webstepper from '../customer/components/userdetail/Webstepper'
// import Order from '../customer/components/order/Order'
// import Orderhistorydetails from '../customer/components/order/Orderhistorydetails'
// import Navigation from '../customer/components/navigation/Navigation'
// import Cartpage from '../customer/components/cart/Cartpage'
// import Company from '../customer/components/company/Company'

// const Customerroutes = () => {
//     return (
//         <div>
//             <div>
//                 <div><Navigation/></div>
//             </div>
//             <Routes>
//                 <Route path='/signin' element={<Homepage />}></Route>
//                 <Route path='/signup' element={<Homepage />}></Route>
//                 <Route path='/' element={<Homepage />}></Route>
//                 <Route path='/company' element={<Company/>}></Route>
//                 <Route path='/cart' element={<Cartpage/>}></Route>
//                 <Route path='/:levelone/:leveltwo/:levelthree' element={<Product/>}></Route>
//                 <Route path='/:product/:productid' element={<Productdetails/>}></Route>
//                 <Route path='/checkout' element={<Webstepper/>}></Route>
//                 <Route path='/account/order' element={<Order/>}></Route>
//                 <Route path='/account/order/:order' element={<Orderhistorydetails/>}></Route>
//             </Routes>
//             <div><Footer/></div>

//         </div>
//     )
// }

// export default Customerroutes

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../customer/pages/Homepage/Homepage'
import Cart from '../customer/components/cart/Cart'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/Product/Product'
import Productdetails from '../customer/components/Productdetails/Productdetails'
import Webstepper from '../customer/components/userdetail/Webstepper'
import Order from '../customer/components/order/Order'
import Orderhistorydetails from '../customer/components/order/Orderhistorydetails'
import Navigation from '../customer/components/navigation/Navigation'
import Cartpage from '../customer/components/cart/Cartpage'
import Company from '../customer/components/company/Company'
import ProtectedRoute from '../customer/components/protected/ProtectedRoute'

const Customerroutes = () => {
    return (
        <div>
            <Navigation />
            <Routes>
                {/* ✅ public routes — no auth needed */}
                <Route path='/signin' element={<Homepage />} />
                <Route path='/signup' element={<Homepage />} />
                <Route path='/' element={<Homepage />} />
                <Route path='/company' element={<Company />} />
                <Route path='/:levelone/:leveltwo/:levelthree' element={<Product />} />
                <Route path='/:product/:productid' element={<Productdetails />} />

                {/* ✅ protected routes — login required */}
                <Route path='/cart' element={
                    <ProtectedRoute>
                        <Cartpage />
                    </ProtectedRoute>
                } />
                <Route path='/checkout' element={
                    <ProtectedRoute>
                        <Webstepper />
                    </ProtectedRoute>
                } />
                <Route path='/account/order' element={
                    <ProtectedRoute>
                        <Order />
                    </ProtectedRoute>
                } />
                <Route path='/account/order/:order' element={
                    <ProtectedRoute>
                        <Orderhistorydetails />
                    </ProtectedRoute>
                } />
            </Routes>
            <Footer />
        </div>
    );
};

export default Customerroutes;