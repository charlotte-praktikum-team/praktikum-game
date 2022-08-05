import axios, { AxiosResponse } from 'axios';
import { PRACTICUM_ORIGIN } from './constants';

export const configureAxios = () => {
  axios.defaults.baseURL = PRACTICUM_ORIGIN;

  axios.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
  })
};