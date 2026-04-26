import axios from "axios";
import {
    SAVE_PAYMENT_REQUEST,
    SAVE_PAYMENT_SUCCESS,
    SAVE_PAYMENT_FAILURE,
    GET_PAYMENTS_REQUEST,
    GET_PAYMENTS_SUCCESS,
    GET_PAYMENTS_FAILURE,
} from "./ActionType";

const API_URL = "https://shopsphere-backend-oe5a.onrender.com"

const gettoken = () => localStorage.getItem("jwt");

// ✅ Called in Payment.jsx when user clicks Place Order
// Saves { paymentmode, amount } → backend creates payment_info doc
// and pushes its _id into user.payment[] in MongoDB
export const savepayment = ({ paymentmode, amount }) => async (dispatch) => {
    dispatch({ type: SAVE_PAYMENT_REQUEST });
    try {
        const { data } = await axios.post(
            `${API_URL}/api/payment/save`,
            { paymentmode, amount },
            { headers: { Authorization: `Bearer ${gettoken()}` } }
        );
        // data.payment = the newly created payment_info doc
        dispatch({ type: SAVE_PAYMENT_SUCCESS, payload: data.payment });
        return data.payment; // so Payment.jsx can await it
    } catch (error) {
        dispatch({
            type: SAVE_PAYMENT_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
        throw error; // re-throw so Payment.jsx catch block fires
    }
};

// ✅ Call this wherever you want to show payment history (order cards, profile, etc.)
export const getpayments = () => async (dispatch) => {
    dispatch({ type: GET_PAYMENTS_REQUEST });
    try {
        const { data } = await axios.get(
            `${API_URL}/api/payment`,
            { headers: { Authorization: `Bearer ${gettoken()}` } }
        );
        // data.payments = array of payment_info docs for this user
        dispatch({ type: GET_PAYMENTS_SUCCESS, payload: data.payments });
    } catch (error) {
        dispatch({
            type: GET_PAYMENTS_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};