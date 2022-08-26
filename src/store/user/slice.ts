import { createAsyncThunk, createSlice, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '@/store/user/types';
import { ProfilePayload, ProfileService, PasswordPayload } from '@/services/profile';
import { ServerError } from '@/types';

const initialState: UserState = {
  user: {
    id: null,
    first_name: '',
    second_name: '',
    display_name: null,
    login: '',
    email: '',
    phone: '',
    avatar: '',
  },
  isAuth: false,
  isLoading: false,
  errorMessage: '',
};

export const changeUser = createAsyncThunk('profile/changeUser', (payload: ProfilePayload) => ProfileService.changeProfile(payload));
export const changePassword = createAsyncThunk('profile/changePassword', (payload: PasswordPayload) =>
  ProfileService.changePassword(payload)
);
export const changeAvatar = createAsyncThunk('profile/changeAvatar', (payload: HTMLInputElement) => ProfileService.changeAvatar(payload));

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    clearUserData: (state) => {
      state.user = initialState.user;
      state.isAuth = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeUser.fulfilled, (state, action) => {
      state.user = action.payload!;
      state.isLoading = false;
    });
    builder.addCase(changeAvatar.fulfilled, (state, action) => {
      state.user = action.payload!;
      state.isLoading = false;
    });
    builder.addCase(changePassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addMatcher(isPending(changeUser, changePassword, changeAvatar), (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    });
    builder.addMatcher(isRejected(changeUser, changePassword, changeAvatar), (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as ServerError).reason;
    });
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
