import axios from 'axios';
import { trimData } from '@/utils/trimData';
import { ServiceIdResponse, SignInByOAuth, SignInPayload, SignUpPayload, SignUpResponse } from '@/services/auth/types';
import { User } from '@/types';
import { REDIRECT_URI } from '@/utils/constants';

export const AuthService = {
  signIn: (payload: SignInPayload) => {
    const data = trimData(payload);
    return axios.post<SignInPayload>('/auth/signin', data);
  },
  signUp: (payload: SignUpPayload) => {
    const data = trimData(payload);
    return axios.post<SignUpPayload, SignUpResponse>('/auth/signup', data);
  },
  logout: () => axios.post('/auth/logout'),
  getUser: () => axios.get<unknown, User>('/auth/user'),
  signInByOAuth: (code: string) =>
    axios.post<SignInByOAuth>('/oauth/yandex', {
      code,
      redirect_uri: REDIRECT_URI,
    }),
  getServiceId: () => axios.get<unknown, ServiceIdResponse>(`/oauth/yandex/service-id?redirect_uri=${REDIRECT_URI}`),
};
