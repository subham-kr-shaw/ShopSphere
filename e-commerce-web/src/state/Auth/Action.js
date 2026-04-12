
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_SUCCESS, GET_USER_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, GET_USER_FAILURE, LOGOUT, CLEAR_ERROR } from "./ActionType";
import axios from "axios";

const registerrequest = () => ({ type: REGISTER_REQUEST });
const registersuccess = (token) => ({ type: REGISTER_SUCCESS, payload: token });
const registerfailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

const loginrequest = () => ({ type: LOGIN_REQUEST });
const loginsuccess = (token) => ({ type: LOGIN_SUCCESS, payload: token });
const loginfailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

const getuserrequest = () => ({ type: GET_USER_REQUEST });
const getusersuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getuserfailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const register = (userdata) => async (dispatch) => {
    dispatch(registerrequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userdata)
        const user = response.data;
        if (user.token) {
            localStorage.setItem("jwt", user.token);
        }
        dispatch(registersuccess(user.token));
    } catch (error) {
        dispatch(registerfailure(error.response?.data?.message || error.message));
    }
}

export const login = (userdata) => async (dispatch) => {
    dispatch(loginrequest())
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userdata)
        const user = response.data;
        if (user.token) {
            localStorage.setItem("jwt", user.token);
        }
        dispatch(loginsuccess(user.token));
    } catch (error) {
        dispatch(loginfailure(error.response?.data?.message || error.message));
    }
}

export const getuser = () => async (dispatch) => {
    dispatch(getuserrequest())
    try {
        const token = localStorage.getItem("jwt")
        const response = await axios.get(`${API_BASE_URL}/api/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(getusersuccess(response.data.user));
    } catch (error) {
        dispatch(getuserfailure(error.response?.data?.message || error.message));
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem("jwt")
    dispatch({ type: LOGOUT, payload: null })
}

export const clearerror = () => (dispatch) => {
    dispatch({ type: CLEAR_ERROR })
}