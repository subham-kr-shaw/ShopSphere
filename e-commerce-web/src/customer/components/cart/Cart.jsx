import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import Input from '@mui/material/Input';
import { useState } from 'react';

const Cart = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full m-0 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex gap-4">
                <div className="shrink-0">
                    <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/sari/s/u/t/free-matka-04-tejas-sarees-unstitched-original-imagj69c9yy4pcgh.jpeg?q=70" alt="cart" className="w-24 h-28 object-contain rounded-xl" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <div className="text-lg font-semibold">Mens slim mid rise black jeans</div>
                    <div className="text-gray-600 text-sm">size-L, White</div>
                    <div className="text-gray-600 text-sm">seller: John Doe</div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-800">₹499</span>
                        <span className="text-sm line-through text-gray-500">₹99</span>
                        <span className="text-sm font-medium text-green-600">72% off</span>
                    </div>
                </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
                <AddCircleOutlineIcon sx={{ color: '#22C55E', fontSize: 26, cursor: 'pointer' }} onClick={() => setCount(count + 1)} />
                <input
                    type="number"
                    value={count}
                    onChange={(e) => {
                        if (e.target.value >= 0) {
                            setCount(parseInt(e.target.value));
                        }
                    }}
                    className="w-16 text-center bg-gray-50 rounded-full border border-gray-200 py-1"
                />
                <RemoveCircleOutlineOutlinedIcon
                    sx={{
                        color: '#EF4444',
                        fontSize: 26,
                        cursor: count === 0 ? 'not-allowed' : 'pointer',
                        opacity: count === 0 ? 0.5 : 1
                    }}
                    onClick={() => {
                        if (count > 0) {
                            setCount(count - 1);
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Cart;