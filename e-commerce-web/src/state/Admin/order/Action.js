// import { api } from "../../../config/apiConfig";
// import { DELETE_PRODUCT_FAILURE } from "../../product/ActionType";
// import {
//     CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS,
//     DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE,
//     DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS,
//     GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,
//     SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS
// } from "./ActionType";

// export const getorder = () => {
//     return async (dispatch) => {
//         dispatch({ type: GET_ORDERS_REQUEST });
//         try {
//             const {data}  = await api.get(`/api/admin/orders/`);
//             console.log("get all order", data);
//             dispatch({ type: GET_ORDERS_SUCCESS, payload: data.orders });
//         } catch (error) {
//             dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
//         }
//     };
// };

// export const confirmedorder = (orderid) => async (dispatch) => {
//     dispatch({ type: CONFIRMED_ORDER_REQUEST });
//     try {
//         const { data } = await api.put(`/api/admin/orders/${orderid}/confirm`);
//         console.log("confirmdata", data);
//         dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
//     }
// };

// export const shiporder = (orderid) => async (dispatch) => {
//     dispatch({ type: SHIP_ORDER_REQUEST });
//     try {
//         const { data } = await api.put(`/api/admin/orders/${orderid}/ship`);
//         console.log("shipdata", data);
//         dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
//     }
// };

// export const deliverorder = (orderid) => async (dispatch) => {
//     dispatch({ type: DELIVERED_ORDER_REQUEST });
//     try {
//         const { data } = await api.put(`/api/admin/orders/${orderid}/deliver`);
//         console.log("deliverdata", data);
//         dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
//     }
// };

// export const deleteorder = (orderid) => async (dispatch) => {
//     dispatch({ type: DELETE_ORDER_REQUEST });
//     try {
//         const { data } = await api.delete(`/api/admin/orders/${orderid}/delete`);
//         console.log("deletedata", data);
//         dispatch({ type: DELETE_ORDER_SUCCESS, payload: orderid });
//     } catch (error) {
//         dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
//     }
// };
// import { api } from "../../../config/apiConfig";
// import {
//     CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS,
//     DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE,
//     DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS,
//     GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,
//     SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS
// } from "./ActionType";

// export const getorder = () => {
//     return async (dispatch) => {
//         dispatch({ type: GET_ORDERS_REQUEST });
//         try {
//             const { data } = await api.get(`/api/admin/orders/`);
//             console.log("get all order", data);
//             dispatch({ type: GET_ORDERS_SUCCESS, payload: data.orders });
//         } catch (error) {
//             dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
//         }
//     };
// };

// export const confirmedorder = (orderid) => async (dispatch) => {
//     dispatch({ type: CONFIRMED_ORDER_REQUEST });
//     try {
//         const { data } = await api.put(`/api/admin/orders/${orderid}/confirm`);
//         console.log("confirmdata", data);
//         dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
//     }
// };

// export const shiporder = (orderid) => async (dispatch) => {
//     dispatch({ type: SHIP_ORDER_REQUEST });
//     try {
//         const { data } = await api.put(`/api/admin/orders/${orderid}/ship`);
//         console.log("shipdata", data);
//         dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
//     }
// };

// export const deliverorder = (orderid) => async (dispatch) => {
//     dispatch({ type: DELIVERED_ORDER_REQUEST });
//     try {
//         const { data } = await api.put(`/api/admin/orders/${orderid}/deliver`);
//         console.log("deliverdata", data);
//         dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
//     }
// };

// export const deleteorder = (orderid) => async (dispatch) => {
//     dispatch({ type: DELETE_ORDER_REQUEST });
//     try {
//         const { data } = await api.put(`/api/admin/orders/${orderid}/delete`);
//         console.log("deletedata", data);
//         dispatch({ type: DELETE_ORDER_SUCCESS, payload: orderid });
//     } catch (error) {
//         dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
//     }
// };
import { api } from "../../../config/apiConfig";
import {
    CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS,
    DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_FAILURE,
    DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS,
    GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,
    SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS
} from "./ActionType";

export const getorder = () => async (dispatch) => {
    dispatch({ type: GET_ORDERS_REQUEST });
    try {
        const { data } = await api.get(`/api/admin/orders/`);
        dispatch({ type: GET_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
        dispatch({ type: GET_ORDERS_FAILURE, payload: error.message });
    }
};

export const confirmedorder = (orderid) => async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDER_REQUEST });
    try {
        const { data } = await api.put(`/api/admin/orders/${orderid}/confirm`);
        dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
    }
};

export const shiporder = (orderid) => async (dispatch) => {
    dispatch({ type: SHIP_ORDER_REQUEST });
    try {
        const { data } = await api.put(`/api/admin/orders/${orderid}/ship`);
        dispatch({ type: SHIP_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: SHIP_ORDER_FAILURE, payload: error.message });
    }
};

export const deliverorder = (orderid) => async (dispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST });
    try {
        const { data } = await api.put(`/api/admin/orders/${orderid}/deliver`);
        dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
    }
};

export const deleteorder = (orderid) => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
        // ✅ api.delete matches the router's DELETE method now
        await api.delete(`/api/admin/orders/${orderid}/delete`);
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: orderid });
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
};

