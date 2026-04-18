import React from 'react'
import { useNavigate } from 'react-router-dom'

const Productcard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/product/${product?._id}`)}
            className="w-[15rem] m-3 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Image */}
            <div className="h-[18rem] bg-gray-100 overflow-hidden">
                <img
                    src={product.imageurl}
                    alt={product.title}
                    className="h-full w-full object-cover hover:scale-105 transition-all duration-300"
                />
            </div>

            {/* Details */}
            <div className="p-4 flex flex-col gap-1">
                
                {/* Brand */}
                <h2 className="text-gray-500 text-sm">
                    {product.brand}
                </h2>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 text-md line-clamp-2">
                    {product.title}
                </h3>

                {/* Color */}
                <p className="text-sm text-gray-400">
                    {product.color}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mt-2">
                    <span className="font-bold text-gray-900">
                        ₹{product.discountedprice}
                    </span>

                    <span className="line-through text-gray-400 text-sm">
                        ₹{product.price}
                    </span>

                    <span className="text-green-600 text-sm font-semibold">
                        {product.discountpercent}% off
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Productcard