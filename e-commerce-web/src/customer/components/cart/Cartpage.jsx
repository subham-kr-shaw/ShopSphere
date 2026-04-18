import React, { useEffect } from 'react'
import Pricedetails from './Pricedetails'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux';
import { getcart } from '../../../state/cart/Action';
import { store } from '../../../state/store';

const Cartpage = () => {
  const dispatch = useDispatch();
  // const { cart} = useSelector((store) => store.cart);
  const { cart } = useSelector((store) => store.cart);
  // console.log("cartitems",cart?.cart?.cartitems)
  // useEffect(() => {
  //   dispatch(getcart())
  // }, [cart?.updatecartitem,cart?.deletecartitem])

  useEffect(() => {
    dispatch(getcart())
  }, [cart?.updatecartitem, cart?.deletecartitem])
  return (
    <div className="w-full h-full p-6">
      <div className="flex flex-col md:flex-row md:items-start md:gap-6">
        <div className="flex-1 flex flex-col gap-4">
          {/* {cart?.cart?.cartitems?.map((items)=>(<Cart />)} */}
          {cart?.cart?.cartitems?.map((item) => (
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