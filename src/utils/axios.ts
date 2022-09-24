import Axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { message } from 'antd';
import history from './history';
import configs from './configs';
import logging from './logging';

const axiosInstance = Axios.create({
  timeout: 3 * 60 * 1000,
  baseURL: configs.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token');
    if (config) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        }
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let id: NodeJS.Timeout;

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status !== 401) {
      // message.error('Something went wrong. Please try again later.');
      return Promise.reject(error);
    }
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(() => {
      if (typeof window === 'undefined') return;
      history.push(`/refresh-token?callbackUrl=${window.location.pathname}`);
    }, 200);
    logging.error(error);
  }
);

export const sendGet = (url: string, params?: object) => axiosInstance.get(url, { params }).then((res) => res.data);
export const sendPost = (url: string, params?: object, queryParams?: object) => axiosInstance.post(url, params, { params: queryParams }).then((res) => res.data);
export const sendPut = (url: string, params?: object) => axiosInstance.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: object) => axiosInstance.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: object) => axiosInstance.delete(url, { params }).then((res) => res.data);
