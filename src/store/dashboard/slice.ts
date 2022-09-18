import { createSlice } from '@reduxjs/toolkit';
import { getLevels } from './thunk';
import { DashboardState } from './types';

const initialState: DashboardState = {
  levels: [],
  isLoading: false,
  errorMessage: '',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLevels.fulfilled, (state, action) => {
      state.levels = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getLevels.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getLevels.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message ?? 'Что-то пошло не так';
    });
  },
});

export default dashboardSlice.reducer;
