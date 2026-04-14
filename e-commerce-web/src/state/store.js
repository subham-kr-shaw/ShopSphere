import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { authreducer } from "./Auth/Reducer";
import { customerProductReducer } from "./product/Reducer";
import { cartreducer } from "./cart/Reducer";
import { orderreducer } from "./order/Reducer";
const rootReducers=combineReducers({
 auth:authreducer,
 product:customerProductReducer,
 cart:cartreducer,
 order:orderreducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))