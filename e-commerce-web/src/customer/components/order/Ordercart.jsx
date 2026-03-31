import React from 'react'
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';


const Ordercart = () => {
    return (
        <div className='cursor-pointer homesection'>
            <div className='flex flex-col md:flex-row md:justify-between p-3 border-rounded-lg shadow-2xl'>
                <div className='flex space-x-2.5 w-full md:w-[20%] h-full'>
                    <img src='https://rukminim1.flixcart.com/image/612/612/xif0q/sari/s/u/t/free-matka-04-tejas-sarees-unstitched-original-imagj69c9yy4pcgh.jpeg?q=70' className='rounded-md w-20 h-20 md:w-[30%] md:h-[10%] m-1 object-cover'></img>
                    <div>
                        <h1 className='text-sm md:text-base'>Men slim rise black jeans</h1>
                        <div className='text-gray-400 text-xs md:text-sm'>size M</div>
                    </div>
                </div>
                <div className='mt-2 md:mt-0'>₹21.93</div>
                <div className='flex flex-col md:flex-row items-start md:items-center gap-2 mt-2 md:mt-0'>
                    <div className='flex items-center'>
                        <div className=''><AdjustOutlinedIcon /></div>
                        <h1 className='text-sm ml-1'>expected delivery on mar 03</h1>
                    </div>
                    <div className='text-gray-400 text-xs'>your item has been delivered</div>
                </div>
            </div>
        </div>
    )
}

export default Ordercart