import React from 'react'
import Pricedetails from './Pricedetails'
import Cart from './Cart'

const Cartpage = () => {
  return (
    <div className="w-full h-full p-6">
      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>

        <div className="w-full md:w-80">
          <Pricedetails />
        </div>
      </div>
    </div>
  )
}

export default Cartpage