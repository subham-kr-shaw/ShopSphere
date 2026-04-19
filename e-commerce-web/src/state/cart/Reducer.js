// import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

// const initialState = {
//     cart: null,
//     Loading: false,
//     error: null,
//     cartitems: []
// }

// export const cartreducer = (state = initialState, action) => {
//     switch (action.type) {

//         case ADD_ITEM_TO_CART_REQUEST:
//             return { ...state, loading: true, error: null }
//         case ADD_ITEM_TO_CART_SUCCESS:
//             return {
//                 ...state,
//                 cartitems: [...state.cartitems, action.payload.cartitems],
//                 loading: false
//             }
//         case ADD_ITEM_TO_CART_FAILURE:
//             return { ...state, loading: false, error: action.payload }
//         case GET_CART_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             }
//         case GET_CART_SUCCESS:
//             return {
//                 ...state,
//                 cartitems: action.payload.cartitems,
//                 cart: action.payload,
//                 loading: false,
//             }

//         case GET_CART_FAILURE:
//             return {
//                 ...state,
//                 error: action.payload,
//                 loading: false
//             }

//         case REMOVE_CART_ITEM_REQUEST:
//         case UPDATE_CART_ITEM_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//                 error: null
//             }

//         case REMOVE_CART_ITEM_SUCCESS:
//             return {
//                 ...state,
//                 deletecartitem: action.payload,
//                 loading: false
//             }
//         // case UPDATE_CART_ITEM_SUCCESS:
//         //     return {
//         //         ...state,
//         //         updatecartitem: action.payload,
//         //         loading: false,
//         //     }
//         case UPDATE_CART_ITEM_SUCCESS:
//             return {
//                 ...state,
//                 // ✅ Replace the updated item in the list
//                 cartitems: state.cartitems.map(item =>
//                     item._id === action.payload._id ? action.payload : item
//                 ),
//                 updatecartitem: action.payload,
//                 loading: false,
//             }

//         case REMOVE_CART_ITEM_FAILURE:

//         case UPDATE_CART_ITEM_FAILURE:         // ✅ clears stale error when switching pages
//             return { ...state, error: action.payload, loading: false }

//         default:
//             return state;
//     }
// }
// import {
//   ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
//   GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS,
//   REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS,
//   UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS
// } from "./ActionType"

// const initialState = {
//   cart: null,
//   loading: false, // ✅ fixed typo: was "Loading"
//   error: null,
//   cartitems: []
// }

// export const cartreducer = (state = initialState, action) => {
//   switch (action.type) {

//     case ADD_ITEM_TO_CART_REQUEST:
//       return { ...state, loading: true, error: null }
//     case ADD_ITEM_TO_CART_SUCCESS:
//       return {
//         ...state,
//         cartitems: [...state.cartitems, action.payload.cartitems],
//         loading: false
//       }
//     case ADD_ITEM_TO_CART_FAILURE:
//       return { ...state, loading: false, error: action.payload }

//     case GET_CART_REQUEST:
//       return { ...state, loading: true, error: null }
//     case GET_CART_SUCCESS:
//       return {
//         ...state,
//         cartitems: action.payload.cartitems, // ✅ flat array always in sync
//         cart: action.payload,
//         loading: false,
//       }
//     case GET_CART_FAILURE:
//       return { ...state, error: action.payload, loading: false }

//     case REMOVE_CART_ITEM_REQUEST:
//     case UPDATE_CART_ITEM_REQUEST:
//       return { ...state, loading: true, error: null }

//     case REMOVE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         // ✅ Remove from cartitems so UI updates without refresh
//         // cartitems: state.cartitems.filter(item => item._id !== action.payload),
//         deletecartitem:action.payload,
//         loading: false
//       }

//     case UPDATE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         // ✅ Replace updated item in cartitems so prices update without refresh
//         updatecartitem: action.payload,
//         loading: false,
//       }

//     case REMOVE_CART_ITEM_FAILURE:
//     case UPDATE_CART_ITEM_FAILURE:
//       return { ...state, error: action.payload, loading: false }

//     default:
//       return state;
//   }
// }
// import {
//   ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
//   GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS,
//   REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS,
//   UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS
// } from "./ActionType"

// const initialState = {
//   cart: null,
//   loading: false,
//   error: null,
//   cartitems: []
// }

// export const cartreducer = (state = initialState, action) => {
//   switch (action.type) {

//     case ADD_ITEM_TO_CART_REQUEST:
//       return { ...state, loading: true, error: null }
//     case ADD_ITEM_TO_CART_SUCCESS:
//       return {
//         ...state,
//         cartitems: [...state.cartitems, action.payload.cartitems],
//         loading: false
//       }
//     case ADD_ITEM_TO_CART_FAILURE:
//       return { ...state, loading: false, error: action.payload }

//     case GET_CART_REQUEST:
//       return { ...state, loading: true, error: null }
//     case GET_CART_SUCCESS:
//       return {
//         ...state,
//         cartitems: action.payload.cartitems,
//         cart: action.payload,
//         loading: false,
//       }
//     case GET_CART_FAILURE:
//       return { ...state, error: action.payload, loading: false }

//     case REMOVE_CART_ITEM_REQUEST:
//     case UPDATE_CART_ITEM_REQUEST:
//       return { ...state, loading: true, error: null }

//     case REMOVE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         // ✅ was commented out — this is what removes item from UI instantly
//         cartitems: state.cartitems.filter(item => item._id !== action.payload),
//         loading: false
//       }

//     case UPDATE_CART_ITEM_SUCCESS:
//       return {
//         ...state,
//         // ✅ was missing — this is what updates price in UI instantly
//         cartitems: state.cartitems.map(item =>
//           item._id === action.payload._id ? action.payload : item
//         ),
//         updatecartitem: action.payload,
//         loading: false,
//       }

//     case REMOVE_CART_ITEM_FAILURE:
//     case UPDATE_CART_ITEM_FAILURE:
//       return { ...state, error: action.payload, loading: false }

//     default:
//       return state;
//   }
// }
import {
  ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS
} from "./ActionType"

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartitems: []
}

export const cartreducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true, error: null }

    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        // ✅ only add if payload.cartitems exists, avoids pushing undefined
        cartitems: action.payload.cartitems
          ? [...state.cartitems, action.payload.cartitems]
          : state.cartitems,
        loading: false
      }

    case ADD_ITEM_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload }

    case GET_CART_REQUEST:
      return { ...state, loading: true, error: null }

    case GET_CART_SUCCESS:
      return {
        ...state,
        cartitems: action.payload.cartitems,
        cart: action.payload,
        loading: false,
      }

    case GET_CART_FAILURE:
      return { ...state, error: action.payload, loading: false }

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true, error: null }

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        // ✅ filter out removed item instantly
        cartitems: state.cartitems.filter(item => item._id !== action.payload),
        loading: false
      }

    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        // ✅ replace updated item instantly
        cartitems: state.cartitems.map(item =>
          item._id === action.payload._id ? action.payload : item
        ),
        updatecartitem: action.payload,
        loading: false,
      }

    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, error: action.payload, loading: false }

    default:
      return state;
  }
}