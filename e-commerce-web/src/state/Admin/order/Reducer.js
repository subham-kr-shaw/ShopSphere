import {
    CANCELLED_ORDER_FAILURE, CANCELLED_ORDER_REQUEST, CANCELLED_ORDER_SUCCESS,
    CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS,
    DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS,
    GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,
    PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS,
    SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS
} from "./ActionType";

const initialstate = {
    loading: false,
    isloading: false,
    orders: [],
    error: null,
};

// ✅ Helper — updates a single order's status inside the orders array
const updateorderstatus = (orders, updatedorder) => {
    if (!updatedorder?._id) return orders;
    return orders.map(o =>
        o._id === updatedorder._id
            ? { ...o, orderstatus: updatedorder.orderstatus }
            : o
    );
};

const adminorderreducer = (state = initialstate, action) => {
    switch (action.type) {

        case GET_ORDERS_REQUEST:
            return { ...state, loading: true, error: null };
        case GET_ORDERS_SUCCESS:
            return { ...state, loading: false, orders: action.payload, error: null };
        case GET_ORDERS_FAILURE:
            return { ...state, loading: false, orders: [], error: action.payload };

        case CONFIRMED_ORDER_REQUEST:
        case PLACED_ORDER_REQUEST:
        case DELIVERED_ORDER_REQUEST:
        case CANCELLED_ORDER_REQUEST:
        case SHIP_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
            return { ...state, isloading: true, error: null };

        // ✅ Each success case updates the order status directly in the orders array
        case CONFIRMED_ORDER_SUCCESS:
            return {
                ...state,
                isloading: false,
                orders: updateorderstatus(state.orders, action.payload?.order || action.payload),
            };

        case SHIP_ORDER_SUCCESS:
            return {
                ...state,
                isloading: false,
                orders: updateorderstatus(state.orders, action.payload?.order || action.payload),
            };

        case DELIVERED_ORDER_SUCCESS:
            return {
                ...state,
                isloading: false,
                orders: updateorderstatus(state.orders, action.payload?.order || action.payload),
            };

        case CANCELLED_ORDER_SUCCESS:
            return {
                ...state,
                isloading: false,
                orders: updateorderstatus(state.orders, action.payload?.order || action.payload),
            };

        case PLACED_ORDER_SUCCESS:
            return {
                ...state,
                isloading: false,
                orders: updateorderstatus(state.orders, action.payload?.order || action.payload),
            };

        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                isloading: false,
                // ✅ action.payload is the orderid string
                orders: state.orders.filter(o => o._id !== action.payload),
            };

        case CONFIRMED_ORDER_FAILURE:
        case PLACED_ORDER_FAILURE:
        case DELIVERED_ORDER_FAILURE:
        case CANCELLED_ORDER_FAILURE:
        case SHIP_ORDER_FAILURE:
        case DELETE_ORDER_FAILURE:
            return { ...state, isloading: false, error: action.payload };

        default:
            return state;
    }
};

export default adminorderreducer;
// import {
//     CANCELLED_ORDER_FAILURE, CANCELLED_ORDER_REQUEST, CANCELLED_ORDER_SUCCESS,
//     CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS,
//     DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS,
//     DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS,
//     GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS,
//     PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS,
//     SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS
// } from "./ActionType";

// const initialstate = {
//     loading: false,
//     isloading: false,
//     orders: [],
//     error: null,
// };

// const adminorderreducer = (state = initialstate, action) => {
//     switch (action.type) {

//         case GET_ORDERS_REQUEST:
//             return { ...state, loading: true, error: null };
//         case GET_ORDERS_SUCCESS:
//             return { ...state, loading: false, orders: action.payload, error: null };
//         case GET_ORDERS_FAILURE:
//             return { ...state, loading: false, orders: [], error: action.payload };

//         case CONFIRMED_ORDER_REQUEST:
//         case PLACED_ORDER_REQUEST:
//         case DELIVERED_ORDER_REQUEST:
//         case CANCELLED_ORDER_REQUEST:
//         case SHIP_ORDER_REQUEST:
//         case DELETE_ORDER_REQUEST:
//             return { ...state, isloading: true, error: null };

//         case CONFIRMED_ORDER_SUCCESS:
//         case SHIP_ORDER_SUCCESS:
//         case DELIVERED_ORDER_SUCCESS:
//         case CANCELLED_ORDER_SUCCESS:
//             return {
//                 ...state,
//                 isloading: false,
//                 orders: state.orders.map((order) =>
//                     order._id === action.payload.order._id
//                         ? { ...order, orderstatus: action.payload.order.orderstatus }
//                         : order
//                 ),
//             };

//         case PLACED_ORDER_SUCCESS:
//             return { ...state, isloading: false, placed: action.payload };

//         case DELETE_ORDER_SUCCESS:
//             return {
//                 ...state,
//                 isloading: false,
//                 // ✅ filters out the deleted order from UI immediately
//                 orders: state.orders.filter((order) => order._id !== action.payload),
//             };

//         case CONFIRMED_ORDER_FAILURE:
//         case PLACED_ORDER_FAILURE:
//         case DELIVERED_ORDER_FAILURE:
//         case CANCELLED_ORDER_FAILURE:
//         case SHIP_ORDER_FAILURE:
//         case DELETE_ORDER_FAILURE:
//             return { ...state, isloading: false, error: action.payload };

//         default:
//             return state;
//     }
// };

// export default adminorderreducer;