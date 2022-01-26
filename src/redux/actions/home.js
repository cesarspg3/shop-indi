//GET PRODUCTS
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const getProducts = () => ({ type: GET_PRODUCTS });
export const getProductsSuccess = (users) => ({ type: GET_PRODUCTS_SUCCESS, users });
export const getProductsError = (error) => ({ type: GET_PRODUCTS_ERROR, error });
