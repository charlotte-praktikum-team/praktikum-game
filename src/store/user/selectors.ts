import { AppState } from '../types';

export const selectUser = (state: AppState) => state.user.user;
export const selectIsAuth = (state: AppState) => state.user.isAuth;
