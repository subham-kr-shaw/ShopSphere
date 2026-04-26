// import {
//     CREATE_RATING_REQUEST, CREATE_RATING_SUCCESS, CREATE_RATING_FAILURE,
//     GET_RATINGS_REQUEST, GET_RATINGS_SUCCESS, GET_RATINGS_FAILURE,
//     DELETE_RATING_REQUEST, DELETE_RATING_SUCCESS, DELETE_RATING_FAILURE,
// } from "./ActionType";

// const initialstate = {
//     ratings: [],
//     loading: false,
//     error: null,
// };

// const ratingreducer = (state = initialstate, action) => {
//     switch (action.type) {

//         case CREATE_RATING_REQUEST:
//         case GET_RATINGS_REQUEST:
//         case DELETE_RATING_REQUEST:
//             return { ...state, loading: true, error: null };

//         case GET_RATINGS_SUCCESS:
//             return { ...state, loading: false, ratings: action.payload };

//         case CREATE_RATING_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 // ✅ replace if already rated, else add new
//                 ratings: state.ratings.some(r => r._id === action.payload._id)
//                     ? state.ratings.map(r =>
//                         r._id === action.payload._id ? action.payload : r
//                     )
//                     : [...state.ratings, action.payload]
//             };

//         case DELETE_RATING_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 // ✅ payload is ratingid
//                 ratings: state.ratings.filter(r => r._id !== action.payload)
//             };

//         case CREATE_RATING_FAILURE:
//         case GET_RATINGS_FAILURE:
//         case DELETE_RATING_FAILURE:
//             return { ...state, loading: false, error: action.payload };

//         default:
//             return state;
//     }
// };

// export default ratingreducer;
import {
    CREATE_RATING_REQUEST, CREATE_RATING_SUCCESS, CREATE_RATING_FAILURE,
    GET_RATINGS_REQUEST, GET_RATINGS_SUCCESS, GET_RATINGS_FAILURE,
    DELETE_RATING_REQUEST, DELETE_RATING_SUCCESS, DELETE_RATING_FAILURE,
} from "./ActionType";

const initialstate = {
    ratings: [],
    loading: false,
    error: null,
};

const ratingreducer = (state = initialstate, action) => {
    switch (action.type) {

        case CREATE_RATING_REQUEST:
        case GET_RATINGS_REQUEST:
        case DELETE_RATING_REQUEST:
            return { ...state, loading: true, error: null };

        case GET_RATINGS_SUCCESS:
            return { ...state, loading: false, ratings: action.payload };

        case CREATE_RATING_SUCCESS:
            return {
                ...state,
                loading: false,
                // ✅ upsert — replace if same user rated before, else add
                ratings: state.ratings.some(r => r._id === action.payload?._id)
                    ? state.ratings.map(r => r._id === action.payload._id ? action.payload : r)
                    : [...state.ratings, action.payload]
            };

        // case DELETE_RATING_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         // ✅ remove instantly — bars recalculate from remaining ratings
        //         ratings: state.ratings.filter(r => r._id !== action.payload)
        //     };
        case DELETE_RATING_SUCCESS:
            return {
                ...state,
                loading: false,
                ratings: state.ratings.filter(r => r._id !== action.payload) // ✅ action.payload is ratingid
            };
        case CREATE_RATING_FAILURE:
        case GET_RATINGS_FAILURE:
        case DELETE_RATING_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default ratingreducer;