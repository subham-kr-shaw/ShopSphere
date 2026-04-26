import axios from "axios";
import {
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAILURE,
} from "./ActionType";

const API_URL = "https://shopsphere-backend-oe5a.onrender.com";

export const getallusers = () => async (dispatch) => {
    dispatch({ type: GET_ALL_USERS_REQUEST });
    try {
        const token = localStorage.getItem("jwt");
        const { data } = await axios.get(`${API_URL}/api/user`, {  // ✅ fixed: /api/user not /api/users
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data.users });
    } catch (error) {
        dispatch({
            type: GET_ALL_USERS_FAILURE,
            payload: error.response?.data?.message || error.message,
        });
    }
};