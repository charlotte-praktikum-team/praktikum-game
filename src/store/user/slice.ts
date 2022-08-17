import { createSlice } from '@reduxjs/toolkit';
import { UserState } from '@/store/user/types';

const initialState: UserState = {
  user: {},
  isAuth: false,
};

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
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
