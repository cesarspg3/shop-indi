import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions/home';

export const ProductsinitialState = {
  loading: true,
  error: undefined,
  products: [],
};

const getProducts = (state) => ({
  ...state,
  loading: true,
});

const getProductsSuccess = (state, { products }) => ({
  ...state,
  loading: false,
  error: '',
  products,
});

const getProductsError = (state, { error }) => ({
  ...state,
  loading: false,
  error,
});

const ProductsReducer = (state = ProductsinitialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return getProducts(state);
    case GET_PRODUCTS_SUCCESS:
      return getProductsSuccess(state, action);
    case GET_PRODUCTS_ERROR:
      return getProductsError(state, action);

    default:
      return state;
  }
};

export default ProductsReducer;