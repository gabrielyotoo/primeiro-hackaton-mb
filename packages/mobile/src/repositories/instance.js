import axios from 'axios';

import { apiUrl } from '../config/server.json';

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosInstance.interceptors.request.use((request) => {
  console.log('request', request);

  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('response', response);

    return response;
  },
  (err) => {
    console.log(err.response.data);
    if (err.response && err.response.data && err.response.data.msg) {
      return Promise.reject(err.response.data.msg);
    }
  }
);

export const setAuthorizationHeader = (token) => {
  axiosInstance.defaults.headers.Authorization = token;
};

const getInstance = () => axiosInstance;

export default getInstance;
