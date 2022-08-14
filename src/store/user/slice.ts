import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isAuth: false,
  },
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
