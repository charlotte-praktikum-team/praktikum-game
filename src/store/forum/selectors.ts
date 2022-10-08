import { AppState } from '../types';

export const selectSections = (state: AppState) => state.forum.sections;
export const selectTopics = (state: AppState) => state.forum.topics;
export const selectSelectedTopic = (state: AppState) => state.forum.selectedTopic;
export const selectComments = (state: AppState) => state.forum.comments;
export const selectIsLoading = (state: AppState) => state.forum.isLoading;
