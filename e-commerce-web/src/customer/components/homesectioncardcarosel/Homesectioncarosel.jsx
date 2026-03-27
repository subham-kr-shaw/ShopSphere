import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Homesectioncard from '../homesectioncard/Homesectioncard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 5 },
};

const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (<Homesectioncard width="90%" margin="3" />))

// 
// relative px-4 lg:px-8

const Homesectioncarosel = () => {
      
    const[activeindex,setactiveindex]=useState(0);
    
     const slidenext=()=>setactiveindex(activeindex+1);
     const slideprev=()=>setactiveindex(activeindex-1);
     const synactiveindex=(e)=>setactiveindex(e.item);      

    return (
    <div className='relative px-4 lg:px-8 cursor-pointer'>
        <div className='relative'>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableButtonsControls
                activeIndex={activeindex}
                onSlideChanged={synactiveindex}
            />
            {activeindex>0&&<button onClick={slideprev}
                    className="absolute top-[40%] -translate-y-1/2 -left-2 sm:-left-1 bg-blue-500 text-white p-2 rounded-full z-50"
                aria-label="Previous"
            >
                <KeyboardArrowLeftIcon />
            </button>}
            {activeindex<items.length-5&&<button onClick={slidenext}
                    className="absolute top-[40%] -translate-y-1/2 right-8 bg-blue-500 text-white p-2 rounded-full z-50"
                aria-label="Next"
            >
                <KeyboardArrowRightIcon />
            </button>}
        </div>
    </div>
)};
export default Homesectioncarosel;