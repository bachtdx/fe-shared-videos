import axios from 'axios';
import Cookies from 'js-cookie';

const cableServerUrl = process.env.REACT_APP_API_URL || "http://localhost:3000";
const instance = axios.create({
  baseURL: cableServerUrl,
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
