import axios from 'axios';

const api = axios.create({
  baseURL: 'https://passwordresetflow-backend-om8g.onrender.com/api/auth',
  withCredentials: false
});

export default api;
