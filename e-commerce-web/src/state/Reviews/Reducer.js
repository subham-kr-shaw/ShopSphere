import {
    CREATE_REVIEW_REQUEST, CREATE_REVIEW_SUCCESS, CREATE_REVIEW_FAILURE,
    GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILURE,
    DELETE_REVIEW_REQUEST, DELETE_REVIEW_SUCCESS, DELETE_REVIEW_FAILURE,
} from "./ActionType";

const initialstate = {
    reviews: [],
    loading: false,
    error: null,
};

const reviewreducer = (state = initialstate, action) => {
    switch (action.type) {

        case CREATE_REVIEW_REQUEST:
        case GET_REVIEWS_REQUEST:
        case DELETE_REVIEW_REQUEST:
            return { ...state, loading: true, error: null };

        case GET_REVIEWS_SUCCESS:
            return { ...state, loading: false, reviews: action.payload };

        // case CREATE_REVIEW_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         // ✅ prepend new review to top of list instantly
        //         reviews: [action.payload, ...state.reviews]
        //     };
        case CREATE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                // ✅ if user already has a review, replace it — else prepend
                reviews: state.reviews.some(r => r.user?._id === action.payload?.user?._id)
                    ? state.reviews.map(r =>
                        r.user?._id === action.payload?.user?._id ? action.payload : r
                    )
                    : [action.payload, ...state.reviews]
            };

        // case DELETE_REVIEW_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         // ✅ remove deleted review instantly
        //         reviews: state.reviews.filter(r => r._id !== action.payload)
        //     };
        case DELETE_REVIEW_SUCCESS:
            return {
                ...state,
                loading: false,
                reviews: state.reviews.filter(r => r._id !== action.payload) // ✅ action.payload is reviewid
            };

        case CREATE_REVIEW_FAILURE:
        case GET_REVIEWS_FAILURE:
        case DELETE_REVIEW_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default reviewreducer;