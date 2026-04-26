// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Homesectioncard = ({
//     imagesrc,
//     title,
//     navigateto,     // ✅ the route from nav data e.g. "/women/clothing/tops"
//     category,
//     sectionName,
// }) => {
//     const navigate = useNavigate();

//     const displayImage = imagesrc ||
//         "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/s/u/t/free-matka-04-tejas-sarees-unstitched-original-imagj69c9yy4pcgh.jpeg?q=70";
//     const displayTitle = title || "Category";

//     const handleClick = () => {
//         if (navigateto) {
//             navigate(navigateto); // ✅ navigate to the correct category route
//         }
//     };

//     return (
//         <div
//             onClick={handleClick}
//             className="mx-2 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-1"
//         >
//             {/* Image */}
//             <div className="relative bg-gray-50 overflow-hidden h-48">
//                 <img
//                     src={displayImage}
//                     alt={displayTitle}
//                     className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Category badge */}
//                 {sectionName && (
//                     <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
//                         {sectionName}
//                     </span>
//                 )}
//             </div>

//             {/* Info */}
//             <div className="p-3 flex flex-col gap-1">
//                 <h3 className="text-sm font-semibold text-gray-900 truncate">{displayTitle}</h3>
//                 {category && (
//                     <p className="text-xs text-gray-500 capitalize">{category}</p>
//                 )}
//                 <p className="text-xs text-indigo-500 font-medium mt-1">
//                     Shop Now →
//                 </p>
//             </div>
//         </div>
//     )
// }

// export default Homesectioncard
// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const Homesectioncard = ({ imagesrc, title, description, color, price, original, discount, id }) => {
//     const navigate = useNavigate();

//     const displayImage = imagesrc || "https://rukminim1.flixcart.com/image/612/612/xif0q/sari/s/u/t/free-matka-04-tejas-sarees-unstitched-original-imagj69c9yy4pcgh.jpeg?q=70";
//     const displayTitle = title || "Saree";
//     const displayPrice = price || 370;
//     const displayOriginal = original || 999;
//     const displayDiscount = discount || 20;

//     return (
//         <div
//             onClick={() => navigate(`/product/${id || 5}`)}
//             className="mx-2 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-1"
//         >
//             {/* Image */}
//             <div className="relative bg-gray-50 overflow-hidden h-48">
//                 <img
//                     src={displayImage}
//                     alt={displayTitle}
//                     className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {/* Discount badge */}
//                 {displayDiscount > 0 && (
//                     <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
//                         {displayDiscount}% OFF
//                     </span>
//                 )}
//             </div>

//             {/* Info */}
//             <div className="p-3 flex flex-col gap-1">
//                 <h3 className="text-sm font-semibold text-gray-900 truncate">{displayTitle}</h3>

//                 {description && (
//                     <p className="text-xs text-gray-500 truncate">{description}</p>
//                 )}

//                 {color && (
//                     <div className="flex items-center gap-1">
//                         <span
//                             className="w-3 h-3 rounded-full border border-gray-300 inline-block"
//                             style={{ backgroundColor: color?.toLowerCase() }}
//                         />
//                         <span className="text-xs text-gray-500 capitalize">{color}</span>
//                     </div>
//                 )}

//                 {/* Price row */}
//                 <div className="flex items-center gap-1.5 mt-1">
//                     <span className="text-sm font-bold text-gray-900">₹{displayPrice}</span>
//                     <span className="text-xs line-through text-gray-400">₹{displayOriginal}</span>
//                     <span className="text-xs font-semibold text-green-600">{displayDiscount}% off</span>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Homesectioncard
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homesectioncard = ({ imagesrc, title, navigateto }) => {  // ✅ use navigateto
    const navigate = useNavigate();

    const displayImage = imagesrc || "https://via.placeholder.com/300x300?text=Coming+Soon";
    const displayTitle = title || "Product";

    return (
        <div
            onClick={() => navigate(navigateto || '/')}  // ✅ use navigateto
            className="mx-2 bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 overflow-hidden cursor-pointer group transition-all duration-200 hover:-translate-y-1"
        >
            <div className="relative bg-gray-50 overflow-hidden h-48">
                <img
                    src={displayImage}
                    alt={displayTitle}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-3">
                <h3 className="text-sm font-semibold text-gray-900 truncate text-center">{displayTitle}</h3>
            </div>
        </div>
    )
}

export default Homesectioncard