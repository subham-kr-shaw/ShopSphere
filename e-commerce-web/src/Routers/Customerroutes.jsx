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

const Customerroutes = () => {
    return (
        <div>
            <div>
                <div><Navigation/></div>
            </div>
            <Routes>
                <Route path='/signin' element={<Homepage />}></Route>
                <Route path='/signup' element={<Homepage />}></Route>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/cart' element={<Cartpage/>}></Route>
                <Route path='/:levelone/:leveltwo/:levelthree' element={<Product/>}></Route>
                <Route path='/:product/:productid' element={<Productdetails/>}></Route>
                <Route path='/checkout' element={<Webstepper/>}></Route>
                <Route path='/account/order' element={<Order/>}></Route>
                <Route path='/account/order/:order' element={<Orderhistorydetails/>}></Route>
            </Routes>
            <div><Footer/></div>

        </div>
    )
}

export default Customerroutes