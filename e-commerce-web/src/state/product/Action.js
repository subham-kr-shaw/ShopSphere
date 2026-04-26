// import { api } from "../../config/apiConfig";
// import {
//     CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS,
//     DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS,
//     FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_SUCCESS,
//     FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_SUCCESS
// } from "./ActionType";

// export const findproducts = (reqdata) => async (dispatch) => {
//     const {
//         levelone, leveltwo, levelthree,
//         color, size, minprice, maxprice,
//         mindiscount, stock, sort, pagesize, pagenumber
//     } = reqdata;
//     try {
//         // ✅ Pass all 3 levels to backend for correct category hierarchy lookup
//         const { data } = await api.get(
//             `/api/products?levelone=${levelone}&leveltwo=${leveltwo}&levelthree=${levelthree}&color=${color}&size=${size}&minprice=${minprice}&maxprice=${maxprice}&stock=${stock}&sort=${sort}&pagenumber=${pagenumber}&pagesize=${pagesize}&mindiscount=${mindiscount}`
//         );
//         console.log("productdata", data);
//         dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data.product });
//     } catch (error) {
//         dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//     }
// };

// export const findproductsbyid = (productid) => async (dispatch) => {
//     try {
//         const { data } = await api.get(`/api/products/id/${productid}`);
//         dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
//     }
// };

// export const createproduct = (product, reqdata) => async (dispatch) => {
//     dispatch({ type: CREATE_PRODUCT_REQUEST });
//     try {
//         const { data } = await api.post(`/api/admin/product`, product);
//         dispatch({ type: CREATE_PRODUCT_SUCCESS });
//         dispatch(findproducts(reqdata));
//     } catch (error) {
//         dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.response?.data?.message || error.message });
//     }
// };

// export const deleteproduct = (productid, reqdata) => async (dispatch) => {
//     dispatch({ type: DELETE_PRODUCT_REQUEST });
//     try {
//         await api.delete(`/api/admin/product/${productid}`);
//         dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productid });
//     } catch (error) {
//         dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.response?.data?.message || error.message });
//     }
// };
import { api } from "../../config/apiConfig";
import {
    CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_SUCCESS
} from "./ActionType";

export const findproducts = (reqdata) => async (dispatch) => {
    const {
        // ✅ customer uses these (from URL params)
        levelone, leveltwo, levelthree,
        // ✅ admin/old usage sends category as string
        category,
        // ✅ common filters
        colors, sizes, color, size,
        minprice, maxprice, mindiscount,
        stock, sort, pagesize, pagenumber
    } = reqdata;

    try {
        const params = new URLSearchParams();

        // ✅ level-based routing (customer Product.jsx + admin Producttable)
        if (levelone) params.append('levelone', levelone);
        if (leveltwo) params.append('leveltwo', leveltwo);
        if (levelthree) params.append('levelthree', levelthree);

        // ✅ old cat-based routing fallback (if someone still passes category)
        if (category) params.append('cat', category);

        // ✅ handle both 'colors' (array/string from admin) and 'color' (string from customer)
        params.append('color', color || colors || '');
        // ✅ handle both 'sizes' and 'size'
        params.append('size', size || sizes || '');

        params.append('minprice', minprice ?? 0);
        params.append('maxprice', maxprice ?? 100000);
        params.append('stock', stock || '');
        params.append('sort', sort || 'price_low');
        params.append('pagenumber', pagenumber ?? 1);
        params.append('pagesize', pagesize ?? 10);
        params.append('mindiscount', mindiscount ?? 0);

        const { data } = await api.get(`/api/products?${params.toString()}`);
        console.log("productdata", data);
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data.product });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
    }
};

export const findproductsbyid = (productid) => async (dispatch) => {
    try {
        const { data } = await api.get(`/api/products/id/${productid}`);
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
};

export const createproduct = (product, reqdata) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
    try {
        const { data } = await api.post(`/api/admin/product`, product);
        dispatch({ type: CREATE_PRODUCT_SUCCESS });
        dispatch(findproducts(reqdata));
    } catch (error) {
        dispatch({
            type: CREATE_PRODUCT_FAILURE,
            payload: error.response?.data?.message || error.message
        });
    }
};

export const deleteproduct = (productid, reqdata) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
    try {
        await api.delete(`/api/admin/product/${productid}`);
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productid });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAILURE,
            payload: error.response?.data?.message || error.message
        });
    }
};