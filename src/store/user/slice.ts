import { createSlice, isFulfilled, isPending, isRejected, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types';
import { UserState } from './types';
import { isServer } from 'utils/isServer';
import { changeAvatar, changePassword, changeUser, getServiceId, getUserData, getUserDataByOAuth, logout, signIn, signUp } from './thunk';
import { ProfilePayload } from '../../services/profile';

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

export const userSlice = createSlice({
  name: 'user',
  initialState: !isServer ? window.__INITIAL_STATE__.user : initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(changeAvatar.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(changePassword.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = initialState.user;
      state.isAuth = false;
      state.isLoading = false;
    });
    builder.addCase(getServiceId.fulfilled, (state, action) => {
      state.serviceId = action.payload.service_id;
    });
    builder.addMatcher(isFulfilled(getUserData, getUserDataByOAuth), (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.isLoading = false;
    });
    builder.addMatcher(
      isPending(changeUser, changePassword, changeAvatar, signIn, signUp, logout, getUserData, getUserDataByOAuth),
      (state) => {
        state.isLoading = true;
        state.errorMessage = '';
      }
    );
    builder.addMatcher(
      isRejected(changeUser, changePassword, changeAvatar, signIn, signUp, logout, getUserData, getUserDataByOAuth),
      (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message ?? 'Что-то пошло не так';
      }
    );
  },
});

export const { setErrorMessage, setUser } = userSlice.actions;

export default userSlice.reducer;
