import { useState } from 'react'
// import Homepage from './customer/pages/Homepage/Homepage'
// import Homesection from './customer/pages/homesection/homesection'
// import Footer from './customer/components/footer/Footer'
// import CustomCursor from './customer/components/small_circle/CustomCursor'
// import Navigation from './customer/components/navigation/Navigation'
// import ProductSection from './customer/components/Product/Product'
// import Productdetails from './customer/components/Productdetails/Productdetails'
// // import Cartpage from './customer/components/add_to_cart/Cartpage'
// import Userdetails from './customer/components/userdetail/Deliveryaddress'
// import Address from './customer/components/userdetail/Address'
// import Webstepper from './customer/components/userdetail/Webstepper'
// import Filters from './customer/components/order/Filters'
// import Ordercart from './customer/components/order/Ordercart'
// import Order from './customer/components/order/Order'
// import Ordertracker from './customer/components/order/Ordertracker'
// import Orderhistorydetails from './customer/components/order/Orderhistorydetails'
import { Route, Routes } from 'react-router-dom'
import Customerroutes from './Routers/Customerroutes'
import Adminroutes from './Routers/Adminroutes'


function App() {

  return (
    <>
      <Routes>
         <Route path='/*' element={<Customerroutes/>}></Route>
         <Route path='/admin/*' element={<Adminroutes/>}></Route>
      </Routes>
    </>
  )
}

export default App
