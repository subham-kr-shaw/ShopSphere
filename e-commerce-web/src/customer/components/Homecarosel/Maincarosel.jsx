import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import caroseldata from './caroseldata';

const items = caroseldata.map((item) => (
    <div className="sm:h-500px sm:w-[90%] sm:mx-auto sm:py-1.5" >
        <img
            src={item.url}
            alt="carousel"
            className="w-full h-full object-contain cursor-pointer "
        />
    </div>
));
const Maincarosel = () => (
    <div className="mt-0 relative z-10  h-500px bg-red-400">
        <AliceCarousel
        mouseTracking
            items={items}
            autoPlay
            infinite
            disableButtonsControls
            autoPlayStrategy="none" 
            autoPlayInterval={2000}
            touchTracking={true}
        />
    </div>
);
export default Maincarosel;