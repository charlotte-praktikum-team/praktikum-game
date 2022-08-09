import axios from 'axios';

import { ProfilePayload, PasswordPayload, ProfileResponse } from './types';

export const ProfileService = {
  sendProfile(data: ProfilePayload) {
    return axios.put<ProfilePayload, ProfileResponse>('user/profile', data);
  },
  getProfile(id: number): Promise<ProfileResponse> {
    return axios.get(`user/${id}`);
  },
  changePassword(data: PasswordPayload) {
    return axios.put<PasswordPayload, ProfileResponse>('user/password', data);
  },
  setAvatar(data: FormData) {
    return axios.put<FormData, ProfileResponse>('user/profile/avatar', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
