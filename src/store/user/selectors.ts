import { AppState } from '../types';

export const selectUser = (state: AppState) => state.user.user;
export const selectIsAuth = (state: AppState) => state.user.isAuth;
export const selectIsLoading = (state: AppState) => state.user.isLoading;
export const selectErrorMessage = (state: AppState) => state.user.errorMessage;
export const selectServiceId = (state: AppState) => state.user.serviceId;
