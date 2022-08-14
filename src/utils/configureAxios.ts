import axios, { AxiosResponse } from 'axios';
import { PRACTICUM_ORIGIN } from './constants';

export const configureAxios = () => {
  axios.defaults.baseURL = PRACTICUM_ORIGIN;
  axios.defaults.withCredentials = true;

  axios.interceptors.response.use((response: AxiosResponse) => response.data);
};
