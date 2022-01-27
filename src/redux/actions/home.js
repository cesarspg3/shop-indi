//GET PRODUCTS
export const types = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
};

export const actions = {
  getProducts: () => ({ type: types.GET_PRODUCTS }),
  getProductsSuccess: (users) => ({ type: types.GET_PRODUCTS_SUCCESS, users }),
  getProductsError: (error) => ({ type: types.GET_PRODUCTS_ERROR, error }),
};
