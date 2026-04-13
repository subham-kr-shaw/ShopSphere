import {  CREATE_ORDER_FALIURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FALIURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS,  } from "./ActionType"

const initialState = {
    orders: [],
    order:null,
    loading:false,
    error: null
}

export const orderreducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_ORDER_REQUEST:
            return { ...state, loading: true, error: null }
        case CREATE_ORDER_SUCCESS:
            return {
                ...state,
                success:true,
                loading:false,
                error:null,
                order:action.payload,
            }
            case CREATE_ORDER_FALIURE:
            return { ...state, loading: false, error: action.payload }
        case GET_ORDER_BY_ID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                loading:false,
                order: action.payload,
                error: null,
            }

        case GET_ORDER_BY_ID_FALIURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}