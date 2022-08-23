import axios from 'axios';
import { trimData } from '@/utils/trimData';
import { SignInPayload, SignUpPayload, SignUpResponse } from '@/services/auth/types';
import { User } from '@/types';

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
};
