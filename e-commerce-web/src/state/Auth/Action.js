import { API_BASE_URL } from "../../config/apiConfig"
import {GET_USER_SUCCESS,GET_USER_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, GET_USER_FAILURE } from "./ActionType";

const registerrequest=()=>({type:REGISTER_REQUEST});
const registersuccess=(user)=>({type:REGISTER_SUCCESS,payload:user});
const registerfailure=(error)=>({type:REGISTER_FAILURE,payload:error});

const loginrequest=()=>({type:LOGIN_REQUEST});
const loginsuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginfailure=(error)=>({type:LOGIN_FAILURE,payload:error});

const getuserrequest=()=>({type:GET_USER_REQUEST});
const getusersuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getuserfailure=(error)=>({type:GET_USER_FAILURE,payload:error});

const token=localStorage.getItem("jwt");

 export const register=(userdata)=>async(dispatch)=>{
    dispatch(registerrequest())
    try{
      const response= await axios.post(`${API_BASE_URL}/auth/signup`,userdata)
      const user=response.data;
      if(user.jwt){
        localStorage.setItem("jwt",user.jwt);
      }
      dispatch(registersuccess(user.jwt));
    }
    catch(error){
        dispatch(registerfailure(error.message));

    }
 }

 export const login=(userdata)=>async(dispatch)=>{
    dispatch(loginrequest())
    try{
      const response= await axios.post(`${API_BASE_URL}/auth/signin`,userdata)
      const user=response.data;
      if(user.jwt){
        localStorage.setItem("jwt",user.jwt);
      }
      dispatch(loginsuccess(user.jwt));
    }
    catch(error){
        dispatch(loginfailure(error.message));

    }
 }

 export const getuser=()=>async(dispatch)=>{
    dispatch(getuserrequest())
    try{
      const response= await axios.get(`${API_BASE_URL}/users/profile`,{
        headers:{
            authorization:`Bearer ${token}`
        }
      })
      const user=response.data;
      dispatch(getusersuccess(user));
    }
    catch(error){
        dispatch(getuserfailure(error.message));

    }
 }

 export const logout=()=>async(dispatch)=>{
   dispatch({type:LOGOUT,payload:null})
 }