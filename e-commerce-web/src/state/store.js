
// export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { authreducer } from "./Auth/Reducer";
import { customerProductReducer } from "./product/Reducer";
import { cartreducer } from "./cart/Reducer";
import { orderreducer } from "./order/Reducer";
import adminorderreducer from "./Admin/order/Reducer";
import ratingreducer from "./Rating/Reducer";
import reviewreducer from "./Reviews/Reducer"; 
import { userReducer } from "./user/Reducer";
import { paymentReducer } from "./payment/Reducer";

const rootReducers = combineReducers({
    auth: authreducer,
    product: customerProductReducer,
    cart: cartreducer,
    order: orderreducer,
    adminorder: adminorderreducer,
    rating: ratingreducer,   // ✅ added
    review: reviewreducer,   // ✅ added
    user:userReducer,
    payment:paymentReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));