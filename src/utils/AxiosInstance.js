import axios from 'axios';
import { BASE_API_USER } from './constant';

const AxiosInstance = axios.create({
  baseURL: BASE_API_USER,
  headers: {
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${token}`
  }
});

export default AxiosInstance;