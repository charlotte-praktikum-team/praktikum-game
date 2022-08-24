import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from '@/store/user/types';
import { ProfilePayload, ProfileService, PasswordPayload } from '@/services/profile';

const initialState: UserState = {
  user: {
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

export const changeUser = createAsyncThunk('profile/changeUser', async (payload: ProfilePayload, thunkAPI) => {
  try {
    thunkAPI.dispatch(setLoading(true));
    thunkAPI.dispatch(setErrorMessage(''));
    const profile = await ProfileService.changeProfile(payload);
    return profile;
  } catch (e) {
    thunkAPI.dispatch(setErrorMessage(e as string));
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export const changePassword = createAsyncThunk('profile/changePassword', async (payload: PasswordPayload, thunkAPI) => {
  try {
    thunkAPI.dispatch(setLoading(true));
    thunkAPI.dispatch(setErrorMessage(''));
    const profile = await ProfileService.changePassword(payload);
    return profile;
  } catch (e) {
    thunkAPI.dispatch(setErrorMessage(e as string));
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export const changeAvatar = createAsyncThunk('profile/changeAvatar', async (payload: FormData, thunkAPI) => {
  try {
    thunkAPI.dispatch(setLoading(true));
    thunkAPI.dispatch(setErrorMessage(''));
    const profile = await ProfileService.changeAvatar(payload);
    return profile;
  } catch (e) {
    thunkAPI.dispatch(setErrorMessage(e as string));
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    clearUserData: (state) => {
      state.user = {};
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
    });
    builder.addCase(changeAvatar.fulfilled, (state, action) => {
      state.user = action.payload!;
    });
  },
});

export const { setUserData, clearUserData, setLoading, setErrorMessage } = userSlice.actions;

export default userSlice.reducer;
