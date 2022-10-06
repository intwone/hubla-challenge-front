import { api } from '@src/config/api';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: api.baseUrl,
});

export default axiosClient;
