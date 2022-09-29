import { createSlice } from '@reduxjs/toolkit';

import { getLeaderboard } from './thunk';
import { LeaderboardState } from './types';
import { isServer } from 'utils/isServer';

const initialState: LeaderboardState = {
  leaderboardList: [],
  isLoading: false,
  errorMessage: '',
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState: !isServer ? window.__INITIAL_STATE__.leaderboard : initialState,
  reducers: {
    clearData: (state) => {
      state.leaderboardList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLeaderboard.fulfilled, (state, action) => {
      state.leaderboardList = [...state.leaderboardList, ...action.payload];
      state.isLoading = false;
    });
    builder.addCase(getLeaderboard.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLeaderboard.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message || 'Что-то пошло не так';
    });
  },
});

export const { clearData } = leaderboardSlice.actions;

export default leaderboardSlice.reducer;
