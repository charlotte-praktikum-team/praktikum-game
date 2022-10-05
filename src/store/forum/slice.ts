import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';

import { getComments, getSections, getTopic, getTopics } from './thunk';
import { ForumState } from './types';
import { isServer } from 'utils/isServer';

const initialState: ForumState = {
  sections: [],
  topics: [],
  comments: [],
  isLoading: false,
  errorMessage: '',
};

export const forumSlice = createSlice({
  name: 'forum',
  initialState: !isServer ? window.__INITIAL_STATE__.forum : initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSections.fulfilled, (state, action) => {
      state.sections = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTopics.fulfilled, (state, action) => {
      state.topics = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getTopic.fulfilled, (state, action) => {
      state.selectedTopic = action.payload;
    });
    builder.addMatcher(isPending(getSections, getTopics, getComments), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isRejected(getSections, getTopics, getComments), (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.error.message || 'Что-то пошло не так';
    });
  },
});

export default forumSlice.reducer;
