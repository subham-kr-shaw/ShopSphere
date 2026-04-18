import { api } from "../../config/apiConfig"
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findproducts = (reqdata) => async (dispatch) => {
    const {
        colors,
        sizes,
        minprice,
        maxprice,
        mindiscount,
        category,
        stock,
        sort,
        pagesize,
        pagenumber
    } = reqdata
    try {
        // const { data } =await api.get(`/api/products?color=${colors}&size=${sizes}&minprice=${minprice}
        //     &maxprice=${maxprice}&category=${category}&stock=${stock}&sort=${sort}&pagenumber=${pagenumber}&pagesize=${pagesize}&mindiscount=${mindiscount}`)
        const { data } = await api.get(
            `/api/products?color=${colors}&size=${sizes}&minprice=${minprice}&maxprice=${maxprice}&category=${category}&stock=${stock}&sort=${sort}&pagenumber=${pagenumber}&pagesize=${pagesize}&mindiscount=${mindiscount}`
        );
        console.log("productdata", data);
        dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });

    }
}
export const findproductsbyid = (productid) => async (dispatch) => {
    // ✅ receive it directly, no destructuring
    try {
        const {data} = await api.get(`/api/products/id/${productid}`)
        console.log("data", data);
        dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
    }
}