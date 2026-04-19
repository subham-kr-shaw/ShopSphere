
import { CREATE_ORDER_FALIURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FALIURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api, API_BASE_URL } from "../../config/apiConfig";
import { SET_SHIPPING_ADDRESS } from "./ActionType"

// export const createorder=(reqdata)=>async(dispatch)=>{
//     dispatch({type:CREATE_ORDER_REQUEST});
//     try {
//         const {data}=await api.post(
//             `/api/orders`,
//             reqdata.address,
//         );
//         console.log("data==",data);
//         if(data.id){
//             reqdata.navigate({search:`step=3&order_id=${data.id}`})
//         }
//         console.log("created order-",data);
//         dispatch({
//             type:CREATE_ORDER_SUCCESS,
//             payload:data,
//         })
        
//     } catch (error) {
//         dispatch({type:CREATE_ORDER_FALIURE,payload:error.message})
//     }
// }
export const createorder = (reqdata) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post(`/api/orders`, reqdata.address);
        console.log("created order:", data);

        // ✅ backend returns { order: {...} } so use data.order._id
        if (data.order?._id) {
            reqdata.navigate(`/checkout?step=3&order_id=${data.order._id}`)
        }

        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data.order,
        })
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FALIURE, payload: error.message })
    }
}
export const getorderbyid=(reqdata)=>async(dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST});
    try {
        const{data}=await api.get(
            `/api/orders/${orderid}`
        );
        dispatch({
            type:GET_ORDER_BY_ID_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FALIURE,payload:error.message})
    }
}



export const setshippingaddress = (address) => (dispatch) => {
    dispatch({ type: SET_SHIPPING_ADDRESS, payload: address })
}