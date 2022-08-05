import axios, { AxiosResponse } from 'axios';

export const configureAxios = () => {
  axios.interceptors.response.use((response: AxiosResponse) => {
    return response.data;
  })
};