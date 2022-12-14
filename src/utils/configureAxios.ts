import axios, { AxiosResponse, AxiosError } from 'axios';
import { PRACTICUM_ORIGIN } from './constants';

export const configureAxios = () => {
  axios.defaults.baseURL = PRACTICUM_ORIGIN;
  axios.defaults.withCredentials = true;

  axios.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => Promise.reject(error)
  );
};

export const practicumAxios = axios.create({
  baseURL: PRACTICUM_ORIGIN,
  withCredentials: true,
});

practicumAxios.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => Promise.reject(error)
);

export const localAxios = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

localAxios.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => Promise.reject(error)
);
