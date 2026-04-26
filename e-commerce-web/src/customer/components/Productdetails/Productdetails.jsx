
import Rating from '@mui/material/Rating';
import Reviewcard from './Reviewcard';
import Rate from './Rate';
import Homesectioncarosel from '../homesectioncardcarosel/Homesectioncarosel';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { findproductsbyid } from '../../../state/product/Action';
import { additemtocart } from '../../../state/cart/Action';
import { createrating, getallratings } from '../../../state/Rating/Action';
import { createreview, getallreviews } from '../../../state/Reviews/Action';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Productdetails() {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();

    const { product } = useSelector(store => store.product);
    const { ratings } = useSelector(store => store.rating);
    const { reviews } = useSelector(store => store.review);

    const p = product?.product;

    const [selectedSize, setSelectedSize] = useState(null);
    const [userrating, setUserrating] = useState(0);
    const [reviewtext, setReviewtext] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [formerror, setFormerror] = useState('');

    useEffect(() => {
        if (params.productid) {
            dispatch(findproductsbyid(params.productid));
            dispatch(getallratings(params.productid));
            dispatch(getallreviews(params.productid));
        }
    }, [params.productid]);

    const handleaddtocart = (e) => {
        e.preventDefault();
        if (!selectedSize) {
            alert("Please select a size first!");
            return;
        }
        dispatch(additemtocart({ productid: p._id, size: selectedSize }));
        navigate(`/cart`);
    };

    const handlesubmit = () => {
        // ✅ Both rating AND review text required
        if (!userrating) {
            setFormerror("Please give a star rating.");
            return;
        }
        if (!reviewtext.trim()) {
            setFormerror("Please write a review before submitting.");
            return;
        }
        setFormerror('');

        // ✅ Always save rating (counted in bar chart)
        dispatch(createrating({ productid: params.productid, rating: userrating }));
        // ✅ Always save review (shown as card with name + stars + text)
        dispatch(createreview({ productid: params.productid, review: reviewtext }));

        setUserrating(0);
        setReviewtext('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    if (!p) {
        return (
            <div className="flex justify-center items-center h-screen text-xl font-semibold">
                Loading...
            </div>
        );
    }

    return (
        <>
            <div className="bg-gray-50 min-h-screen py-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                    {/* LEFT IMAGE */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex justify-center items-start relative">
                        {p.discountpercent > 0 && (
                            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                {p.discountpercent}% OFF
                            </div>
                        )}
                        <div className="group rounded-xl p-4 transition duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2">
                            <img
                                src={p.imageurl}
                                alt={p.title}
                                className="rounded-xl max-h-[450px] object-contain w-full transition duration-300 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* RIGHT DETAILS */}
                    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-6">
                        <div>
                            <p className="text-sm text-gray-500">{p.brand}</p>
                            <h1 className="text-3xl font-bold text-gray-900">{p.title}</h1>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-indigo-600">₹{p.discountedprice}</span>
                            <span className="line-through text-gray-400 text-lg">₹{p.price}</span>
                            <span className="text-green-600 font-medium">{p.discountpercent}% OFF</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Rating value={p.numratings || 0} precision={0.5} readOnly />
                            <span className="text-gray-500 text-sm">({ratings?.length || 0} ratings)</span>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-700">Color</h3>
                            <span
                                className="inline-block mt-2 px-4 py-1 border rounded-full text-sm capitalize"
                                style={{
                                    backgroundColor: p.color?.toLowerCase(),
                                    color: ['white', 'yellow'].includes(p.color?.toLowerCase()) ? 'black' : 'white',
                                    borderColor: p.color?.toLowerCase()
                                }}
                            >
                                {p.color}
                            </span>
                        </div>

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

                        <button
                            onClick={handleaddtocart}
                            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                        >
                            Add to Cart
                        </button>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
                            <p className="text-gray-600 text-sm">{p.description}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800">Availability</h3>
                            <p className={p.quantity > 0 ? "text-green-600" : "text-red-500"}>
                                {p.quantity > 0 ? `In Stock (${p.quantity})` : "Out of Stock"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Ratings & Reviews Section ===== */}
            <div className="max-w-7xl mx-auto mt-12 px-6 mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Ratings & Reviews</h2>

                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT — Rating bars + submit form */}
                    <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-5">

                        {/* ✅ Rate component — counts ALL ratings including those without reviews */}
                        <Rate ratings={ratings} />
                        <hr className="my-2" />

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2">
                                Rate this product <span className="text-red-500">*</span>
                            </h3>
                            <Rating
                                value={userrating}
                                onChange={(e, newvalue) => {
                                    setUserrating(newvalue);
                                    setFormerror('');
                                }}
                                size="large"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-800 mb-2">
                                Write a Review <span className="text-red-500">*</span>
                            </h3>
                            <textarea
                                value={reviewtext}
                                onChange={(e) => {
                                    setReviewtext(e.target.value);
                                    setFormerror('');
                                }}
                                placeholder="Share your experience with this product..."
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none text-sm"
                            />
                        </div>

                        {formerror && (
                            <p className="text-red-500 text-sm font-medium">{formerror}</p>
                        )}

                        {submitted && (
                            <p className="text-green-600 text-sm font-medium">
                                ✅ Thank you! Your rating & review have been submitted.
                            </p>
                        )}

                        <button
                            onClick={handlesubmit}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                        >
                            Submit
                        </button>
                    </div>

                    {/* RIGHT — Only review cards (name + stars + text) */}
                    <div className="flex flex-col gap-4">

                        <h3 className="text-base font-bold text-gray-700 uppercase tracking-wide border-b pb-2">
                            Customer Reviews
                        </h3>

                        {/* ✅ Only users who wrote a review get a card — rating-only users are invisible here */}
                        {reviews?.length > 0 ? (
                            reviews.map((review) => {
                                const matchedrating = ratings?.find(
                                    r => r.user?._id === review.user?._id
                                );
                                return (
                                    <Reviewcard
                                        key={review._id}
                                        review={review}
                                        userrating={matchedrating?.rating || 0}
                                    />
                                );
                            })
                        ) : (
                            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                                <span className="text-5xl mb-3">💬</span>
                                <p className="text-lg font-medium">No reviews yet</p>
                                <p className="text-sm">Be the first to share your experience!</p>
                            </div>
                        )}

                    </div>
                </div>
            </div>

            {/* Carousel */}
            <div className="mt-10">
                <Homesectioncarosel width="95%" margin="3" />
            </div>
        </>
    );
}