import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsService } from '../../services/products';
import { types as ProductsTypes } from '../actions/home';

const { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } =
  ProductsTypes;

function* getProducts() {
  try {
    const { data } = yield call(getProductsService);
    yield put({ type: GET_PRODUCTS_SUCCESS, products: data });
  } catch (e) {
    yield put({ type: GET_PRODUCTS_ERROR, message: e.message });
  }
}

function* mySaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
}

export default mySaga;
