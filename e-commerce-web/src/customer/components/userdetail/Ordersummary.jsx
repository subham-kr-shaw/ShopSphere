import React from 'react'
import Address from './Address'
import Cartpage from '../add_to_cart/Cartpage'

const Ordersummary = () => {
  return (
    <div >
      <div >
        <Address/>
      </div>
      <div>
        <Cartpage/>
      </div>
    </div>
  )
}

export default Ordersummary