import axios from 'axios';

import { apiUrl } from '../config/server.json';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const setAuthorizationHeader = (token) => {
  axiosInstance.defaults.headers.Authorization = token;
};

const getInstance = () => axiosInstance;

export default getInstance;
