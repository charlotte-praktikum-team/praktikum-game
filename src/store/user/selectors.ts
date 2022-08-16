import { UserState } from './types';

export const selectUser = (state: UserState) => state.user.user;
export const selectIsAuth = (state: UserState) => state.user.isAuth;
