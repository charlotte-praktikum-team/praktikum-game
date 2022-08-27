import axios from 'axios';

import { ProfilePayload, PasswordPayload, ProfileResponse } from './types';

export const ProfileService = {
  changeProfile(data: ProfilePayload) {
    return axios.put<ProfilePayload, ProfileResponse>('user/profile', data);
  },
  changePassword(data: PasswordPayload) {
    return axios.put<PasswordPayload, ProfileResponse>('user/password', data);
  },
  changeAvatar(data: HTMLInputElement) {
    const formData: any = new FormData();
    formData.append('avatar', data);
    return axios.put<FormData, ProfileResponse>('user/profile/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
