import { User } from '@/types';

export type UserState = {
  user: Partial<User>;
  isAuth: boolean;
  isLoading: boolean;
  errorMessage: string;
};
