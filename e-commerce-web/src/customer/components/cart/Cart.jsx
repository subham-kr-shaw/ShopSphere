// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
// import Input from '@mui/material/Input';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removecartitem, updatecartitem } from '../../../state/cart/Action';
// import Button from '@mui/material/Button';

// const Cart = ({ item }) => {
//     const [count, setCount] = useState(1);
//     const dispatch = useDispatch();
//     const cart = useSelector(store => store.cart)
//     const c = cart.cart;
//     console.log("p", item);
//     const handleupdatecartitem = (newcount) => {
//         const data = { data: { quantity: newcount }, cartitemid: item?._id };
//         dispatch(updatecartitem(data));
//     }
//     const handleremove = () => {
//         dispatch(removecartitem(item._id))
//     }

//     return (
//         <div className="w-full m-0 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
//             <div className="flex gap-4">
//                 <div className="shrink-0">
//                     <img src={item?.product?.imageurl} alt="cart" className="w-24 h-28 object-contain rounded-xl" />
//                 </div>
//                 <div className="flex-1 flex flex-col gap-1">
//                     <div className="text-lg font-semibold">{item.product.title}</div>
//                     {/* <div className="text-gray-600 text-sm">
//                         {`${item.size} ,`}
//                         <span className={`text-${item.product.color}`}>{`${item.product.color}`}</span>
//                     </div> */}
//                     <div className="text-gray-600 text-sm">
//                         {`${item.size}, `}
//                         <span style={{ color: item.product.color?.toLowerCase() }}>
//                             {item.product.color}
//                         </span>
//                     </div>
//                     <div className="text-gray-600 text-sm">{item.product.brand}</div>
//                     <div className="flex items-center gap-2">
//                         <span className="text-lg font-semibold text-gray-800">₹{item.discountedprice}</span>
//                         <span className="text-sm line-through text-gray-500">{item.price}</span>
//                         <span className="text-sm font-medium text-green-600">{item.product.discountpercent} %</span>
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-3 flex items-center gap-3">
//                 <AddCircleOutlineIcon sx={{ color: '#22C55E', fontSize: 26, cursor: 'pointer' }} onClick={() => setCount(count + 1)} />
//                 {/* <input
//                     type="number"
//                     value={count}
//                     onChange={(e) => {
//                         if (e.target.value >= 1) {
//                             setCount(parseInt(e.target.value));
//                             handleupdatecartitem();
//                         }

//                     }}
//                     className="w-16 text-center bg-gray-50 rounded-full border border-gray-200 py-1"
//                 /> */}
//                 <input
//                     type="number"
//                     value={count}
//                     onChange={(e) => {
//                         const val = parseInt(e.target.value);
//                         if (val >= 1) {
//                             setCount(val);
//                             handleupdatecartitem(val);  // ✅ pass val directly, not stale count
//                         }
//                     }}
//                     className="w-16 text-center bg-gray-50 rounded-full border border-gray-200 py-1"
//                 />
//                 <RemoveCircleOutlineOutlinedIcon
//                     sx={{
//                         color: '#EF4444',
//                         fontSize: 26,
//                         cursor: count === 1 ? 'not-allowed' : 'pointer',
//                         opacity: count === 1 ? 0.5 : 1
//                     }}
//                     onClick={() => {
//                         if (count > 1) {
//                             const newcount = count - 1
//                             setCount(newcount);
//                             handleupdatecartitem(newcount);
//                         }
//                     }}
//                 />
//                 <div>
//                     <Button onClick={handleremove} sx={{ color: "RGB(145 85 253)" }}>REMOVE</Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart;
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removecartitem, updatecartitem } from '../../../state/cart/Action';
import Button from '@mui/material/Button';

const Cart = ({ item }) => {
    const [count, setCount] = useState(item?.quantity || 1); // ✅ init from actual quantity
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    // ✅ Use fresh prices if this item was recently updated
    const updatedItem = cart.updatecartitem?._id === item._id ? cart.updatecartitem : null;
    const displayPrice = updatedItem ? updatedItem.price : item.price;
    const displayDiscountedPrice = updatedItem ? updatedItem.discountedprice : item.discountedprice;

    const handleupdatecartitem = (newcount) => {
        const data = { data: { quantity: newcount}, cartitemid: item?._id };
        dispatch(updatecartitem(data));
    }

    const handleremove = () => {
        dispatch(removecartitem(item._id));
    }

    return (
        <div className="w-full m-0 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex gap-4">
                <div className="shrink-0">
                    <img src={item?.product?.imageurl} alt="cart" className="w-24 h-28 object-contain rounded-xl" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                    <div className="text-lg font-semibold">{item?.product?.title}</div>
                    <div className="text-gray-600 text-sm">
                        {`${item.size}, `}
                        <span style={{ color: item?.product?.color?.toLowerCase() }}>
                            {item?.product?.color}
                        </span>
                    </div>
                    <div className="text-gray-600 text-sm">{item?.product?.brand}</div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-800">₹{displayDiscountedPrice}</span>
                        <span className="text-sm line-through text-gray-500">{displayPrice}</span>
                        <span className="text-sm font-medium text-green-600">{item?.product?.discountpercent} %</span>
                    </div>
                </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
                <AddCircleOutlineIcon
                    sx={{ color: '#22C55E', fontSize: 26, cursor: 'pointer' }}
                    onClick={() => {
                        const newcount = count + 1;
                        setCount(newcount);
                        handleupdatecartitem(newcount);
                    }}
                />
                <input
                    type="number"
                    value={count}
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (val >= 1) {
                            setCount(val);
                            handleupdatecartitem(val);
                        }
                    }}
                    className="w-16 text-center bg-gray-50 rounded-full border border-gray-200 py-1"
                />
                <RemoveCircleOutlineOutlinedIcon
                    sx={{
                        color: '#EF4444',
                        fontSize: 26,
                        cursor: count === 1 ? 'not-allowed' : 'pointer',
                        opacity: count === 1 ? 0.5 : 1
                    }}
                    onClick={() => {
                        if (count > 1) {
                            const newcount = count - 1;
                            setCount(newcount);
                            handleupdatecartitem(newcount);
                        }
                    }}
                />
                <div>
                    <Button onClick={handleremove} sx={{ color: "RGB(145 85 253)" }}>REMOVE</Button>
                </div>
            </div>
        </div>
    );
}

export default Cart;