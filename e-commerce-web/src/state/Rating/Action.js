
import { api } from "../../config/apiConfig";
import {
    CREATE_RATING_REQUEST, CREATE_RATING_SUCCESS, CREATE_RATING_FAILURE,
    GET_RATINGS_REQUEST, GET_RATINGS_SUCCESS, GET_RATINGS_FAILURE,
    DELETE_RATING_REQUEST, DELETE_RATING_SUCCESS, DELETE_RATING_FAILURE,
} from "./ActionType";

export const createrating = (reqdata) => async (dispatch) => {
    dispatch({ type: CREATE_RATING_REQUEST });
    try {
        const { data } = await api.post(`/api/ratings/create`, reqdata);
        dispatch({ type: CREATE_RATING_SUCCESS, payload: data.ratings });
    } catch (error) {
        dispatch({ type: CREATE_RATING_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const getallratings = (productid) => async (dispatch) => {
    dispatch({ type: GET_RATINGS_REQUEST });
    try {
        const { data } = await api.get(`/api/ratings/product/${productid}`);
        dispatch({ type: GET_RATINGS_SUCCESS, payload: data.ratings });
    } catch (error) {
        dispatch({ type: GET_RATINGS_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const deleterating = (ratingid) => async (dispatch) => {
    dispatch({ type: DELETE_RATING_REQUEST });
    try {
        await api.delete(`/api/ratings/${ratingid}`);
        // ✅ payload is ratingid so reducer can filter it out instantly
        dispatch({ type: DELETE_RATING_SUCCESS, payload: ratingid });
    } catch (error) {
        dispatch({ type: DELETE_RATING_FAILURE, payload: error.response?.data?.message || error.message });
    }
};