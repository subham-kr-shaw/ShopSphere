
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import caroseldata from './caroseldata';

const Maincarosel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = caroseldata.map((item, idx) => (
        <div key={idx} className="relative w-full h-[220px] sm:h-[350px] md:h-[480px] lg:h-[560px] overflow-hidden">
            {/* Blurred background fill for letterbox gaps */}
            <div
                className="absolute inset-0 scale-110"
                style={{
                    backgroundImage: `url(${item.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(18px) brightness(0.6)',
                }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
            {/* Main image — centered, full height */}
            <img
                src={item.url}
                alt={`slide-${idx}`}
                className="relative z-20 w-full h-full object-contain object-center cursor-pointer"
            />
            {/* Optional label at bottom */}
            {item.label && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 text-white text-center px-4">
                    <p className="text-lg sm:text-2xl font-bold drop-shadow-lg">{item.label}</p>
                </div>
            )}
        </div>
    ));

    return (
        <div className="w-full overflow-hidden relative group">
            <style>{`
                .alice-carousel__dots {
                    position: absolute;
                    bottom: 12px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 40;
                    margin: 0;
                    padding: 0;
                }
                .alice-carousel__dots-item {
                    width: 8px !important;
                    height: 8px !important;
                    border-radius: 50% !important;
                    background: rgba(255,255,255,0.5) !important;
                    margin: 0 4px !important;
                    transition: all 0.3s ease !important;
                }
                .alice-carousel__dots-item.__active {
                    width: 24px !important;
                    border-radius: 4px !important;
                    background: white !important;
                }
                .alice-carousel__wrapper {
                    border-radius: 0;
                }
            `}</style>

            <AliceCarousel
                mouseTracking
                touchTracking
                items={items}
                autoPlay
                infinite
                autoPlayStrategy="none"
                autoPlayInterval={3500}
                disableButtonsControls
                activeIndex={activeIndex}
                onSlideChanged={(e) => setActiveIndex(e.item)}
            />
        </div>
    );
};

export default Maincarosel;