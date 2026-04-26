// import {
//     CREATE_PRODUCT_FAILURE,
//     CREATE_PRODUCT_REQUEST,
//     CREATE_PRODUCT_SUCCESS,
//     DELETE_PRODUCT_SUCCESS,
//     FIND_PRODUCT_BY_ID_FAILURE,
//     FIND_PRODUCT_BY_ID_REQUEST,
//     FIND_PRODUCT_BY_ID_SUCCESS,
//     FIND_PRODUCTS_FAILURE,
//     FIND_PRODUCTS_REQUEST,
//     FIND_PRODUCTS_SUCCESS
// } from "./ActionType";

// const initalstate = {
//     products: [],
//     product: null,
//     loading: false,
//     error: null
// }

// export const customerProductReducer = (state = initalstate, action) => {
//     switch (action.type) {
//         case FIND_PRODUCTS_REQUEST:
//         case FIND_PRODUCT_BY_ID_REQUEST:
//             return { ...state, loading: true, error: null };

//         case FIND_PRODUCTS_SUCCESS:
//             return { ...state, loading: false, error: null, products: action.payload }

//         case FIND_PRODUCT_BY_ID_SUCCESS:
//             return { ...state, loading: false, error: null, product: action.payload }

//         case FIND_PRODUCTS_FAILURE:
//             return { ...state, loading: false, error: action.payload }

//         case DELETE_PRODUCT_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 error: null,
//                 products: {
//                     ...state.products,
//                     product: {
//                         ...state.products.product,
//                         contents: state.products.product.contents.filter(
//                             (item) => item._id !== action.payload.id
//                         )
//                     }
//                 }
//             };

//         case FIND_PRODUCT_BY_ID_FAILURE:
//             return { ...state, loading: false, error: action.payload }
//         case CREATE_PRODUCT_REQUEST:
//             return { ...state, loading: true, error: null };

//         case CREATE_PRODUCT_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 error: null,
//                 products: [...state.products, action.payload]
//             };

//         case CREATE_PRODUCT_FAILURE:
//             return { ...state, loading: false, error: action.payload };

//         default:
//             return state
//     }
// }
// import {
//     CREATE_PRODUCT_FAILURE,
//     CREATE_PRODUCT_REQUEST,
//     CREATE_PRODUCT_SUCCESS,
//     DELETE_PRODUCT_SUCCESS,
//     FIND_PRODUCT_BY_ID_FAILURE,
//     FIND_PRODUCT_BY_ID_REQUEST,
//     FIND_PRODUCT_BY_ID_SUCCESS,
//     FIND_PRODUCTS_FAILURE,
//     FIND_PRODUCTS_REQUEST,
//     FIND_PRODUCTS_SUCCESS
// } from "./ActionType";

// const initialState = {
//     products: {
//         contents: [],
//         currentpage: 1,
//         totalpages: 1
//     },
//     product: null,
//     loading: false,
//     error: null
// };

// export const customerProductReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case FIND_PRODUCTS_REQUEST:
//         case FIND_PRODUCT_BY_ID_REQUEST:
//         case CREATE_PRODUCT_REQUEST:
//             return { ...state, loading: true, error: null };

//         case FIND_PRODUCTS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 products: action.payload   // 🔥 correct shape
//             };

//         case FIND_PRODUCT_BY_ID_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 product: action.payload
//             };

//         case CREATE_PRODUCT_SUCCESS:
//             return {
//                 ...state,
//                 loading: false
//             };

//         case DELETE_PRODUCT_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 products: {
//                     ...state.products,
//                     contents: state.products.contents.filter(
//                         (item) => item._id !== action.payload.id
//                     )
//                 }
//             };

//         case FIND_PRODUCTS_FAILURE:
//         case FIND_PRODUCT_BY_ID_FAILURE:
//         case CREATE_PRODUCT_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload
//             };

//         default:
//             return state;
//     }
// };
import {
    CREATE_PRODUCT_FAILURE,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCTS_FAILURE,
    FIND_PRODUCTS_REQUEST,
    FIND_PRODUCTS_SUCCESS
} from "./ActionType";

const initialState = {
    products: {
        contents: [],
        currentpage: 1,
        totalpages: 1
    },
    product: null,
    loading: false,
    error: null
};

export const customerProductReducer = (state = initialState, action) => {
    switch (action.type) {

        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case CREATE_PRODUCT_REQUEST:
        case DELETE_PRODUCT_REQUEST:  // ✅ added
            return { ...state, loading: true, error: null };

        case FIND_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload
            };

        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload
            };

        case CREATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false
            };

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: {
                    ...state.products,
                    // ✅ payload is now just the id string directly
                    contents: state.products.contents.filter(
                        (item) => item._id !== action.payload
                    )
                }
            };

        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case CREATE_PRODUCT_FAILURE:
        case DELETE_PRODUCT_FAILURE:  // ✅ added
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
};