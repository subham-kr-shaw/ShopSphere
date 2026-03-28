import { useState } from 'react'
import Homepage from './customer/pages/Homepage/Homepage'
import Homesection from './customer/pages/homesection/homesection'
import Footer from './customer/components/footer/Footer'
import CustomCursor from './customer/components/small_circle/CustomCursor'
import Navigation from './customer/components/navigation/Navigation'
import ProductSection from './customer/components/Productsection/Productsection'
import Productdetails from './customer/components/Productdetails/Productdetails'
import Cartpage from './customer/components/add_to_cart/Cartpage'
import Userdetails from './customer/components/userdetail/Userdetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CustomCursor />
      <div className='relative'>
      <div><Navigation/></div>
      <div><ProductSection/></div>
        {/* <div><Homepage/></div> 
      <div><Homesection/></div>  */}
      {/* <Productdetails/> */}
      {/* <Cartpage/> */}
      {/* <Userdetails/> */}
      <div><Footer/></div>
      </div>
    </>
  )
}

export default App
