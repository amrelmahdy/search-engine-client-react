import types from "./../types/product_types"


const initState = {
    products: [],
    productsIsLoading: true,
};


const productReducer = (state = initState, action) => {
    switch (action.type) {

        case types.GET_PRODUCTS_LIST :
            state = {
                ...state,
                products: action.payload,
                productsIsLoading: false,
            };
            break;
        case types.SEARCH_FOR_PRODUCTS :
            state = {
                ...state,
                products: action.payload,
                productsIsLoading: false,
            };
            break;

        case types.CLEAR_PRODUCTS :
            state = {
                ...state,
                products: [],
                productsIsLoading: true,
            };
            break;
        default:
    }
    return state;
};





export default productReducer;