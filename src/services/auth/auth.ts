import { practicumAxios } from 'utils/configureAxios';
import { trimData } from 'utils/trimData';
import { ServiceIdResponse, SignInByOAuth, SignInPayload, SignUpPayload, SignUpResponse } from 'services/auth/types';
import { User } from 'types';
import { REDIRECT_URI } from 'utils/constants';

export const AuthService = {
  signIn: (payload: SignInPayload) => {
    const data = trimData(payload);
    return practicumAxios.post<SignInPayload>('/auth/signin', data);
  },
  signUp: (payload: SignUpPayload) => {
    const data = trimData(payload);
    return practicumAxios.post<SignUpPayload, SignUpResponse>('/auth/signup', data);
  },
  logout: () => practicumAxios.post('/auth/logout'),
  getUser: () => practicumAxios.get<unknown, User>('/auth/user'),
  signInByOAuth: (code: string) =>
    practicumAxios.post<SignInByOAuth>('/oauth/yandex', {
      code,
      redirect_uri: REDIRECT_URI,
    }),
  getServiceId: () => practicumAxios.get<unknown, ServiceIdResponse>(`/oauth/yandex/service-id?redirect_uri=${REDIRECT_URI}`),
};
