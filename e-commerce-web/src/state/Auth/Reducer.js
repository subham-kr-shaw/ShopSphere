// import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST } from "./ActionType"

// const intialstate = {
//     user: null,
//     isloading: false,
//     error: null,
//     jwt: null
// }

// export const authreducer = (state = intialstate, action) => {
//     switch (action.type) {
//         case REGISTER_REQUEST:
//         case LOGIN_REQUEST:
//         case LOGIN_SUCCESS:
//             return { ...state, isloading: false, error: null, jwt: action.payload }
//         case GET_USER_REQUEST:
//         case GET_USER_SUCCESS:
//             return { ...state, isloading: false, error: null, user: action.payload }
//         case GET_USER_FAILURE:
//             return { ...state, isloading: false, error: action.payload }
//         case REGISTER_FAILURE:
//         case LOGIN_FAILURE:
//         case LOGOUT:
//             return { ...intialstate }
//         default:
//             return state;
//     }
// }
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return { ...state, isLoading: true, error: null }  // ✅ loading true

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, error: null, jwt: action.payload }

        case GET_USER_SUCCESS:
            return { ...state, isLoading: false, error: null, user: action.payload }

        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return { ...state, isLoading: false, error: action.payload }

        case LOGOUT:
            return { ...initialState }  // ✅ reset everything

        default:
            return state;
    }
}