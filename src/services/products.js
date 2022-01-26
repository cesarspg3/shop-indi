import axios from 'axios';
import { API_URL } from '../constants/api';

export const getProductsService = () => {
  return axios.get(`${API_URL}/api/product`);
};
