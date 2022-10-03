import { practicumAxios } from 'utils/configureAxios';

import { ProfilePayload, PasswordPayload, ProfileResponse } from './types';

export const ProfileService = {
  changeProfile(data: ProfilePayload) {
    return practicumAxios.put<ProfilePayload, ProfileResponse>('user/profile', data);
  },
  changePassword(data: PasswordPayload) {
    return practicumAxios.put<PasswordPayload, ProfileResponse>('user/password', data);
  },
  changeAvatar(data: HTMLInputElement) {
    const formData: any = new FormData();
    formData.append('avatar', data);
    return practicumAxios.put<FormData, ProfileResponse>('user/profile/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
