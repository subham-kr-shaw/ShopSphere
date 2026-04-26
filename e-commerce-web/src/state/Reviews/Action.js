import { api } from "../../config/apiConfig";
import {
    CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILURE,
    GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE,
    DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE,
} from "./ActionType";

// ✅ reqdata: { productid, review }
export const createreview = (reqdata) => async (dispatch) => {
    dispatch({ type: CREATE_REVIEW_REQUEST });
    try {
        const { data } = await api.post(`/api/reviews/create`, reqdata);
        // ✅ backend returns { review } singular
        dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data.review });
    } catch (error) {
        dispatch({ type: CREATE_REVIEW_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const getallreviews = (productid) => async (dispatch) => {
    dispatch({ type: GET_REVIEWS_REQUEST });
    try {
        const { data } = await api.get(`/api/reviews/product/${productid}`);
        dispatch({ type: GET_REVIEWS_SUCCESS, payload: data.reviews });
    } catch (error) {
        dispatch({ type: GET_REVIEWS_FAILURE, payload: error.response?.data?.message || error.message });
    }
};

export const deletereview = (reviewid) => async (dispatch) => {
    dispatch({ type: DELETE_REVIEW_REQUEST });
    try {
        await api.delete(`/api/reviews/${reviewid}`);
        // ✅ dispatch reviewid so reducer can filter it out
        dispatch({ type: DELETE_REVIEW_SUCCESS, payload: reviewid });
    } catch (error) {
        dispatch({ type: DELETE_REVIEW_FAILURE, payload: error.response?.data?.message || error.message });
    }
};