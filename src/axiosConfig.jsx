import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Sử dụng proxy để chuyển tiếp tới API thật
});

export default instance;
