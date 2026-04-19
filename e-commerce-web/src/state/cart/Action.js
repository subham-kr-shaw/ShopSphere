// import { api } from "../../config/apiConfig"
// import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

// export const additemtocart=(reqdata)=>async(dispatch)=>{
//     dispatch({type:ADD_ITEM_TO_CART_REQUEST})
//     try {
//         const {data}=await api.put("/api/cart/add",reqdata)
//         console.log(data);
//         dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data})
//     } catch (error) {
//         dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message})
//     }
// }


// // export const removecartitem=(cartitemid)=>async(dispatch)=>{
// //     dispatch({type:REMOVE_CART_ITEM_REQUEST})
// //     try {
// //         const {data}=await api.delete(`/api/cart_items/${cartitemid}`)
// //         dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartitemid})
// //     } catch (error) {
// //         dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})
// //     }
// // }


// // export const updatecartitem=(reqdata)=>async(dispatch)=>{
// //     dispatch({type:UPDATE_CART_ITEM_REQUEST})
// //     try {
// //         const {data} = await api.put(`/api/cart_items/${reqdata.cartitemid}`, reqdata.data)
// //         console.log("update",data)
// //         dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data})
// //     } catch (error) {
// //         dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message})
// //     }
// // }
// export const removecartitem = (cartitemid) => async (dispatch) => {
//   dispatch({ type: REMOVE_CART_ITEM_REQUEST })
//   try {
//     await api.delete(`/api/cart_items/${cartitemid}`)
//     // ✅ no need to read response — just dispatch the id for filtering
//     dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartitemid })
//   } catch (error) {
//     dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
//   }
// }
// export const updatecartitem = (reqdata) => async (dispatch) => {
//     dispatch({ type: UPDATE_CART_ITEM_REQUEST })
//     try {
//         const { data } = await api.put(`/api/cart_items/${reqdata.cartitemid}`, reqdata.data)
//         console.log("update", data)
//         dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data.cartitems}) // ✅ was: data
//     } catch (error) {
//         dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
//     }
// }


// export const getcart=()=>async(dispatch)=>{
//     dispatch({type:GET_CART_REQUEST})
//     try {
//         const {data}=await api.get(`/api/cart`)
//         console.log("cart data ",data);
//         dispatch({type:GET_CART_SUCCESS,payload:data})
//     } catch (error) {
//         dispatch({type:GET_CART_FAILURE,payload:error.message})
//     }
// }
// import { api } from "../../config/apiConfig"
// import {
//   ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
//   GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS,
//   REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS,
//   UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS
// } from "./ActionType"

// export const additemtocart = (reqdata) => async (dispatch) => {
//   dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
//   try {
//     const { data } = await api.put("/api/cart/add", reqdata)
//     console.log("add to cart", data);
//     dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
//   } catch (error) {
//     dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
//   }
// }

// export const removecartitem = (cartitemid) => async (dispatch) => {
//   dispatch({ type: REMOVE_CART_ITEM_REQUEST })
//   try {
//     await api.delete(`/api/cart_items/${cartitemid}`)
//     dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartitemid })
//   } catch (error) {
//     dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
//   }
// }

// export const updatecartitem = (reqdata) => async (dispatch) => {
//   dispatch({ type: UPDATE_CART_ITEM_REQUEST })
//   try {
//     const { data } = await api.put(`/api/cart_items/${reqdata.cartitemid}`, reqdata.data)
//     console.log("update response:", data) // check this in console
//     dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data.cartitems })
//   } catch (error) {
//     dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
//   }
// }

// // export const getcart = () => async (dispatch) => {
// //   dispatch({ type: GET_CART_REQUEST })
// //   try {
// //     const { data } = await api.get(`/api/cart`)
// //     console.log("cart data", data);
// //     // ✅ was: data — backend returns { cart: {...} } so pass data.cart
// //     dispatch({ type: GET_CART_SUCCESS, payload: data.cart })
// //   } catch (error) {
// //     dispatch({ type: GET_CART_FAILURE, payload: error.message })
// //   }
// // }
// export const getcart = () => async (dispatch) => {
//   dispatch({ type: GET_CART_REQUEST })
//   try {
//     const { data } = await api.get(`/api/cart`)
//     console.log("full data:", data)         // check full response
//     console.log("data.cart:", data.cart)    // check cart object
//     console.log("cartitems:", data.cart?.cartitems) // check cartitems array
//     dispatch({ type: GET_CART_SUCCESS, payload: data.cart })
//   } catch (error) {
//     dispatch({ type: GET_CART_FAILURE, payload: error.message })
//   }
// }
import { api } from "../../config/apiConfig"
import {
  ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS
} from "./ActionType"

export const additemtocart = (reqdata) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
  try {
    const { data } = await api.put("/api/cart/add", reqdata)
    console.log("add to cart response:", data)
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
  }
}

export const removecartitem = (cartitemid) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST })
  try {
    await api.delete(`/api/cart_items/${cartitemid}`)
    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartitemid })
  } catch (error) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
  }
}

export const updatecartitem = (reqdata) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST })
  try {
    const { data } = await api.put(`/api/cart_items/${reqdata.cartitemid}`, reqdata.data)
    console.log("update response:", data)
    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data.cartitems })
  } catch (error) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
  }
}

export const getcart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST })
  try {
    const { data } = await api.get(`/api/cart`)
    console.log("cart data:", data)
    // ✅ pass data.cart — backend returns { cart: {...} }
    dispatch({ type: GET_CART_SUCCESS, payload: data.cart })
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message })
  }
}