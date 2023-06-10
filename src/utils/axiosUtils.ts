import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

// Thêm interceptor để thêm header chứa token vào mỗi yêu cầu
instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    config.withCredentials = true;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
