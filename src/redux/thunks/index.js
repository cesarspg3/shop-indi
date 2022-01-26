import * as actionCreators from '../actions/creators';
import axios from 'axios';

import { API_URL } from '../../constants/api';

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(actionCreators.getUsers());
      axios
        .get(`${API_URL}/api/product`)
        .then(function (response) {
          dispatch(actionCreators.getProductsSuccess(response.data));
        })
        .catch(function (error) {
          dispatch(actionCreators.getProductsError('api product error'));
        });
    } catch (error) {
      dispatch(actionCreators.getProductsError('api product error'));
    }
  };
};
