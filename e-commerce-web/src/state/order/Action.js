
import { api } from "../../config/apiConfig";
import {
    CREATE_ORDER_FALIURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS,
    GET_ORDER_BY_ID_FALIURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS,
    GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, GET_ALL_ORDERS_FALIURE,
    SET_SHIPPING_ADDRESS
} from "./ActionType";

export const createorder = (reqdata) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post(`/api/orders`, reqdata.address);
        console.log("created order:", data);
        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
        // ✅ Only navigate if navigate is a real router function (not a no-op)
        // Payment.jsx does NOT pass navigate — so no redirect happens from here
        // Deliveryaddress.jsx no longer calls createorder at all
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FALIURE, payload: error.message });
    }
};

export const getorderbyid = (orderid) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
    try {
        const { data } = await api.get(`/api/orders/${orderid}`);
        dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data.order });
    } catch (error) {
        dispatch({ type: GET_ORDER_BY_ID_FALIURE, payload: error.message });
    }
};

export const getallorders = () => async (dispatch) => {
    dispatch({ type: GET_ALL_ORDERS_REQUEST });
    try {
        const { data } = await api.get(`/api/orders/user`);
        dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
        dispatch({ type: GET_ALL_ORDERS_FALIURE, payload: error.message });
    }
};

export const setshippingaddress = (address) => (dispatch) => {
    dispatch({ type: SET_SHIPPING_ADDRESS, payload: address });
};