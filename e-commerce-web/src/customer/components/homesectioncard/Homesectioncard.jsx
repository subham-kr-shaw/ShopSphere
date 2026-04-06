import React from 'react'
import './homesectioncard.css'
import { useNavigate } from 'react-router-dom'


const Homesectioncard = ({ imagesrc, categories, description, color, price, original, discount,width, margin }) => {
    const navigate=useNavigate();
    return (
        <div onClick={()=>navigate(`/product/${5}`)} className={`w-[${width}] h-[10%] bg-gray-200 flex flex-col items-center justify-center gap-2 py-6 rounded-lg shadow-lg homesection m-${margin} p-3 cursor-pointer`}>
            <div className='mx-auto w-[80%] my-2  shadow-2xl shadow-gray-400'><img src="https://rukminim1.flixcart.com/image/612/612/xif0q/sari/s/u/t/free-matka-04-tejas-sarees-unstitched-original-imagj69c9yy4pcgh.jpeg?q=70" alt="Section" className='object-contain object-top' /></div>
            <div className='mx-auto  flex flex-col items-start justify-center gap-1'>
                <h2 variant="h5" className='text-center font-bold text-gray-900'>Sarees</h2>
                <div>saree designs</div>
                <div>description</div>
                <div>color</div>
                <div className='flex items-center justify-center'>
                    <div >₹370</div>
                    <h2 variant="body2" className='line-through decoration-red-500 text-gray-500 m-2'>₹999</h2>
                    <div className='text-green-500 font-bold '>20% off</div>
                </div>
            </div>
        </div>

    )
}

export default Homesectioncard