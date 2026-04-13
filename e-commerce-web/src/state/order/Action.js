
import { CREATE_ORDER_FALIURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FALIURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api, API_BASE_URL } from "../../config/apiConfig";

export const createorder=(reqdata)=>async(dispatch)=>{
    dispatch({type:CREATE_ORDER_REQUEST});
    try {
        const{data}=await api.post(
            `/api/orders`,
            reqdata.address,
        );
        if(data.id){
            reqdata.navigate({search:`step=3&order_id=${data.id}`})
        }
        console.log("created order-",data);
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({type:CREATE_ORDER_FALIURE,payload:error.message})
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