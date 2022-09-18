import { createAsyncThunk } from '@reduxjs/toolkit';
import { PasswordPayload, ProfilePayload, ProfileService } from '@/services/profile';
import { AuthService, SignInPayload, SignUpPayload } from '@/services/auth';

export const changeUser = createAsyncThunk('profile/changeUser', (payload: ProfilePayload) => ProfileService.changeProfile(payload));

export const changePassword = createAsyncThunk('profile/changePassword', (payload: PasswordPayload) =>
  ProfileService.changePassword(payload)
);

export const changeAvatar = createAsyncThunk('profile/changeAvatar', (payload: HTMLInputElement) => ProfileService.changeAvatar(payload));

export const signIn = createAsyncThunk('user/signIn', (payload: SignInPayload) => AuthService.signIn(payload));

export const signUp = createAsyncThunk('user/signUp', (payload: SignUpPayload) => AuthService.signUp(payload));

export const getUserData = createAsyncThunk('user/getUser', () => AuthService.getUser());

export const getUserDataByOAuth = createAsyncThunk('user/getUserDataByOAuth', async (code: string) => {
  await AuthService.signInByOAuth(code);
  return AuthService.getUser();
});

export const logout = createAsyncThunk('user/logout', () => AuthService.logout());

export const getServiceId = createAsyncThunk('user/getServiceId', () => AuthService.getServiceId());
