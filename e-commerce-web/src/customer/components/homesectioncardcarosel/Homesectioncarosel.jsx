import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Homesectioncard from '../homesectioncard/Homesectioncard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const responsive = {
    0: { items: 2 },
    640: { items: 3 },
    1024: { items: 5 },
};

const PLACEHOLDER = "https://via.placeholder.com/300x300?text=Coming+Soon";

const Homesectioncarosel = ({ items = [] }) => {
    const [activeindex, setactiveindex] = useState(0);
    const carouselref = useRef(null);  // ✅ use ref to control carousel

    const slidenext = () => carouselref.current?.slideNext();   // ✅ let Alice handle it
    const slideprev = () => carouselref.current?.slidePrev();   // ✅ let Alice handle it
    const synactiveindex = (e) => setactiveindex(e.item);

    // const carouselitems = items.map((item, i) => (
    //     <Homesectioncard
    //         key={item.id || i}
    //         title={item.name}
    //         navigateto={item.to}        // ✅ pass navigateto
    //         imagesrc={item.image || PLACEHOLDER}
    //     />
    // ));
    // ✅ deduplicate by route (item.to) — prevents same category appearing twice
    const carouselitems = [...new Map(items.map(item => [item.to, item])).values()]
        .map((item, i) => (
            <Homesectioncard
                key={item.id || i}
                title={item.name}
                navigateto={item.to}
                imagesrc={item.image || PLACEHOLDER}
            />
        ));

    if (carouselitems.length === 0) return null;

    return (
        <div className="relative">
            <AliceCarousel
                ref={carouselref}           // ✅ attach ref
                mouseTracking
                items={carouselitems}
                responsive={responsive}
                disableButtonsControls
                disableDotsControls
                onSlideChanged={synactiveindex}
            // ✅ remove activeIndex prop — was causing conflict
            />

            {activeindex > 0 && (
                <button
                    onClick={slideprev}
                    className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 bg-white border border-gray-200 shadow-md text-gray-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition p-2 rounded-full"
                    aria-label="Previous"
                >
                    <KeyboardArrowLeftIcon fontSize="small" />
                </button>
            )}

            {activeindex < carouselitems.length - 5 && (
                <button
                    onClick={slidenext}
                    className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 bg-white border border-gray-200 shadow-md text-gray-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition p-2 rounded-full"
                    aria-label="Next"
                >
                    <KeyboardArrowRightIcon fontSize="small" />
                </button>
            )}
        </div>
    );
};

export default Homesectioncarosel;
// import React, { useState } from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import Homesectioncard from '../homesectioncard/Homesectioncard';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// const responsive = {
//     0: { items: 2 },
//     640: { items: 3 },
//     1024: { items: 5 },
// };

// const PLACEHOLDER = "https://via.placeholder.com/300x300?text=Coming+Soon";

// const Homesectioncarosel = ({ items = [] }) => {
//     const [activeindex, setactiveindex] = useState(0);

//     const slidenext = () => setactiveindex(prev => prev + 1);
//     const slideprev = () => setactiveindex(prev => prev - 1);
//     const synactiveindex = (e) => setactiveindex(e.item);

//     const carouselitems = items.map((item, i) => (
//         <Homesectioncard
//             key={item.id || i}
//             title={item.name}
//             navigateto={item.to}
//             imagesrc={item.image || PLACEHOLDER}
//         />
//     ));

//     if (carouselitems.length === 0) return null;

//     return (
//         <div className="relative">
//             <AliceCarousel
//                 mouseTracking
//                 items={carouselitems}
//                 responsive={responsive}
//                 disableButtonsControls
//                 disableDotsControls
//                 activeIndex={activeindex}
//                 onSlideChanged={synactiveindex}
//             />

//             {activeindex > 0 && (
//                 <button
//                     onClick={slideprev}
//                     className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 bg-white border border-gray-200 shadow-md text-gray-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition p-2 rounded-full"
//                     aria-label="Previous"
//                 >
//                     <KeyboardArrowLeftIcon fontSize="small" />
//                 </button>
//             )}

//             {/* ✅ fixed: was carouselitems.length - 5 which hid button too early */}
//             {activeindex < carouselitems.length - 1 && (
//                 <button
//                     onClick={slidenext}
//                     className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 bg-white border border-gray-200 shadow-md text-gray-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition p-2 rounded-full"
//                     aria-label="Next"
//                 >
//                     <KeyboardArrowRightIcon fontSize="small" />
//                 </button>
//             )}
//         </div>
//     );
// };

// export default Homesectioncarosel;