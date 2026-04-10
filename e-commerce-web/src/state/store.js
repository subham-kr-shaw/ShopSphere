import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { authreducer } from "./Auth/Reducer";
const rootReducers=combineReducers({
 auth:authreducer,
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk))