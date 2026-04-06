import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../customer/pages/Homepage/Homepage'
import Cart from '../customer/components/cart/Cart'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/Product/Product'
import Productdetails from '../customer/components/Productdetails/Productdetails'

const Customerroutes = () => {
    return (
        <div>
            <div>
                <div><Navigation /></div>
            </div>
            <Routes>
                <Route path='/' element={<Homepage />}></Route>
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:levelone/:leveltwo/:levelthree' element={<Product/>}></Route>
                <Route path='/:product/:productid' element={<Productdetails/>}></Route>
            </Routes>
            <div><Footer/></div>

        </div>
    )
}

export default Customerroutes