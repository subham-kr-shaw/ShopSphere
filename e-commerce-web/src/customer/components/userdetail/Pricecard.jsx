import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Pricecard = ({ oncheckout, buttonlabel }) => {
    const navigate = useNavigate();
    const { cartitems } = useSelector(store => store.cart);

    const totalprice = cartitems?.reduce((acc, item) => acc + item.price, 0) || 0;
    const totaldiscountedprice = cartitems?.reduce((acc, item) => acc + item.discountedprice, 0) || 0;
    const discount = totalprice - totaldiscountedprice;

    // ✅ use custom handler if passed (order summary) else default (cart page)
    const handleclick = () => {
        if (oncheckout) {
            oncheckout();
        } else {
            navigate('/checkout?step=2');
        }
    };

    return (
        <div className="w-full h-full m-3 p-4 rounded-lg shadow-md bg-white border border-gray-200 md:sticky md:top-20">
            <div className="text-center font-semibold mb-3">Price Details</div>
            <div className="flex justify-between py-2">
                <div className="text-sm text-gray-600">Price</div>
                <div className="text-sm text-gray-800">₹{totalprice}</div>
            </div>
            <div className="flex justify-between py-2">
                <div className="text-sm text-gray-600">Discount</div>
                <div className="text-sm text-green-600">-₹{discount}</div>
            </div>
            <div className="flex justify-between py-2">
                <div className="text-sm text-gray-600">Delivery</div>
                <div className="text-sm text-green-600">Free</div>
            </div>
            <div className="flex justify-between py-3 border-t border-gray-100 mt-3">
                <div className="text-base font-medium">Total Amount</div>
                <div className="text-base font-semibold text-gray-800">₹{totaldiscountedprice}</div>
            </div>
            <button
                onClick={handleclick}
                disabled={totaldiscountedprice === 0}
                className={`mt-6 w-full rounded-md px-4 py-2 text-base font-medium text-white focus:outline-none
                    ${totaldiscountedprice === 0
                        ? 'bg-indigo-300 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
                    }`}
            >
                {/* ✅ show custom label or default */}
                {buttonlabel || 'Proceed to Checkout'}
            </button>
        </div>
    );
};

export default Pricecard;