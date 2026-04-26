import {
    SAVE_PAYMENT_REQUEST,
    SAVE_PAYMENT_SUCCESS,
    SAVE_PAYMENT_FAILURE,
    GET_PAYMENTS_REQUEST,
    GET_PAYMENTS_SUCCESS,
    GET_PAYMENTS_FAILURE,
} from "./ActionType";

const initialState = {
    payments: [],        // all payment_info docs for this user
    lastpayment: null,   // most recently saved payment (used in order confirmation)
    loading: false,
    error: null,
};

export const paymentReducer = (state = initialState, action) => {
    switch (action.type) {

        case SAVE_PAYMENT_REQUEST:
        case GET_PAYMENTS_REQUEST:
            return { ...state, loading: true, error: null };

        // ✅ After save: add to payments[] + set as lastpayment
        case SAVE_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                lastpayment: action.payload,
                payments: [action.payload, ...state.payments],
            };

        // ✅ After fetch: populate full payments list
        case GET_PAYMENTS_SUCCESS:
            return { ...state, loading: false, payments: action.payload };

        case SAVE_PAYMENT_FAILURE:
        case GET_PAYMENTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};