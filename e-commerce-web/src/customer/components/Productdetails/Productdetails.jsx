
import Rating from '@mui/material/Rating';
import Reviewcard from './Reviewcard';
import Rate from './Rate';
import Homesectioncarosel from '../homesectioncardcarosel/Homesectioncarosel';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { findproductsbyid } from '../../../state/product/Action';
import { additemtocart } from '../../../state/cart/Action';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Productdetails() {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(store => store.product);

    const p = product?.product;
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        dispatch(findproductsbyid(params.productid));
    }, [params.productid]);

    const handleaddtocart = (e) => {
        e.preventDefault();
        const data={productid:p._id,size:selectedSize}

        if (!selectedSize) {
            alert("Please select a size first!");
            return;
        }
        console.log(data);
        dispatch(additemtocart(data))
        console.log("Added to cart:", { product: p, size: selectedSize });
        navigate(`/cart`);
    };

    if (!p)
        return (
            <div className="flex justify-center items-center h-screen text-xl font-semibold">
                Loading...
            </div>
        );

    return (
        <>
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                    {/* LEFT IMAGE */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 
                          flex justify-center items-start relative ">

                        {/* Discount Badge */}
                        {p.discountpercent > 0 && (
                            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                {p.discountpercent}% OFF
                            </div>
                        )}

                        {/* <img
              src={p.imageurl}
              alt={p.title}
              className="rounded-xl max-h-[450px] object-contain w-full hover:scale-105 transition duration-300"
            /> */}
                        <div className="group rounded-xl p-4 transition duration-300 
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2">

                            <img
                                src={p.imageurl}
                                alt={p.title}
                                className="rounded-xl max-h-[450px] object-contain w-full 
               transition duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* RIGHT DETAILS */}
                    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-6">

                        {/* Title */}
                        <div>
                            <p className="text-sm text-gray-500">{p.brand}</p>
                            <h1 className="text-3xl font-bold text-gray-900">{p.title}</h1>
                        </div>

                        {/* Price */}
                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-indigo-600">
                                ₹{p.discountedprice}
                            </span>
                            <span className="line-through text-gray-400 text-lg">
                                ₹{p.price}
                            </span>
                            <span className="text-green-600 font-medium">
                                {p.discountpercent}% OFF
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <Rating value={p.numratings || 0} precision={0.5} readOnly />
                            <span className="text-gray-500 text-sm">
                                ({p.ratings?.length || 0} ratings)
                            </span>
                        </div>

                        {/* Color */}
                        <div>
                            <h3 className="font-medium text-gray-700">Color</h3>
                            <span
                                className="inline-block mt-2 px-4 py-1 border rounded-full text-sm capitalize"
                                style={{
                                    backgroundColor: p.color?.toLowerCase(),
                                    color: ['white', 'yellow'].includes(p.color?.toLowerCase())
                                        ? 'black'
                                        : 'white',
                                    borderColor: p.color?.toLowerCase()
                                }}
                            >
                                {p.color}
                            </span>
                        </div>

                        {/* Size Selection */}
                        <div>
                            <h3 className="font-medium text-gray-700 mb-2">Select Size</h3>
                            <div className="flex gap-3 flex-wrap">
                                {p.size?.map((s) => (
                                    <button
                                        key={s.name}
                                        disabled={s.quantity === 0}
                                        onClick={() => setSelectedSize(s.name)}
                                        className={classNames(
                                            "px-4 py-2 rounded-lg border transition",
                                            selectedSize === s.name
                                                ? "bg-indigo-600 text-white border-indigo-600"
                                                : "bg-white text-gray-800 border-gray-300",
                                            s.quantity === 0 && "opacity-40 cursor-not-allowed"
                                        )}
                                    >
                                        {s.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart */}
                        <button
                            onClick={handleaddtocart}
                            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Add to Cart
                        </button>

                        {/* Description */}
                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
                            <p className="text-gray-600 text-sm">{p.description}</p>
                        </div>

                        {/* Availability */}
                        <div>
                            <h3 className="font-semibold text-gray-800">Availability</h3>
                            <p className={p.quantity > 0 ? "text-green-600" : "text-red-500"}>
                                {p.quantity > 0
                                    ? `In Stock (${p.quantity})`
                                    : "Out of Stock"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="max-w-7xl mx-auto mt-12 px-6 grid md:grid-cols-2 gap-8">
                <div>
                    <Rate />
                    <textarea
                        placeholder="Write your review..."
                        className="w-full mt-4 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                    <button className="mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg">
                        Submit
                    </button>
                </div>

                <div className="flex flex-col gap-4">
                    {p.reviews?.length > 0
                        ? p.reviews.map((review) => (
                            <Reviewcard key={review._id} review={review} />
                        ))
                        : [1, 2, 3].map((i) => <Reviewcard key={i} />)}
                </div>
            </div>

            {/* Carousel */}
            <div className="mt-10">
                <Homesectioncarosel width="95%" margin="3" />
            </div>
        </>
    );
}