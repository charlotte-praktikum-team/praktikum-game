import { UserState } from './types';

export const selectUser = (state: UserState) => state.user;
export const selectIsAuth = (state: UserState) => state.isAuth;
