import axios from "axios";
import types from "./../types/product_types";


export const getProductsList = () => {
    return (dispatch, getState) => {
        axios.get("http://localhost:8000/api/products").then(res => {
            dispatch({
                type: types.GET_PRODUCTS_LIST,
                payload: res.data.data
            });
        }).catch(err => {

        });
    }
};


export const search = (searchQuery) => {
    return (dispatch, getState) => {
        axios.post("http://localhost:8000/api/products/search", {searchQuery: searchQuery}).then(res => {
            console.log("search query from actions", searchQuery);
            dispatch({
                type: types.SEARCH_FOR_PRODUCTS,
                payload: res.data.data
            });
        }).catch(err => {

        });
    }
};

export const searchByCategory = (categoryId) => {
    return (dispatch, getState) => {
        axios.post("http://localhost:8000/api/products/search/category", {categoryId: categoryId}).then(res => {
            dispatch({
                type: types.SEARCH_FOR_PRODUCTS,
                payload: res.data.data
            });
        }).catch(err => {

        });
    }
};


export const searchByPrice = (start, end) => {
    return (dispatch, getState) => {
        axios.post("http://localhost:8000/api/products/search/price", {start: start, end: end}).then(res => {
            dispatch({
                type: types.SEARCH_FOR_PRODUCTS,
                payload: res.data.data
            });
        }).catch(err => {

        });
    }
};



export const clear = () => {
    return (dispatch, getState) => {
        dispatch({
            type: types.CLEAR_PRODUCTS,
            payload: []
        });
    }
};
