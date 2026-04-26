
// import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,CLEAR_ERROR } from "./ActionType"

// const initialState = {
//     user: null,
//     isLoading: false,
//     error: null,
//     jwt: null
// }

// export const authreducer = (state = initialState, action) => {
//     switch (action.type) {

//         case REGISTER_REQUEST:
//         case LOGIN_REQUEST:
//         case GET_USER_REQUEST:
//             return { ...state, isLoading: true, error: null }

//         case REGISTER_SUCCESS:
//         case LOGIN_SUCCESS:
//             return { ...state, isLoading: false, error: null, jwt: action.payload }

//         case GET_USER_SUCCESS:
//             return { ...state, isLoading: false, error: null, user: action.payload }

//         case REGISTER_FAILURE:
//         case LOGIN_FAILURE:
//         case GET_USER_FAILURE:
//             return { ...state, isLoading: false, error: action.payload }

//         case LOGOUT:
//             return { ...initialState }

//         case CLEAR_ERROR:         // ✅ clears stale error when switching pages
//             return { ...state, error: null }

//         default:
//             return state;
//     }
// }

import {
    GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS,
    LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
    CLEAR_ERROR
} from "./ActionType";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: localStorage.getItem("jwt") || null,           // ✅ rehydrate on refresh
    role: localStorage.getItem("role") || null,          // ✅ rehydrate on refresh
};

export const authreducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, isLoading: true, error: null };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                jwt: action.payload.token,   // ✅ from object now
                role: action.payload.role,   // ✅ store role
            };

        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload };

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        case LOGOUT:
            return { user: null, isLoading: false, error: null, jwt: null, role: null };

        case CLEAR_ERROR:
            return { ...state, error: null };

        default:
            return state;
    }
};