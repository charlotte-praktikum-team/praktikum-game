import { User } from '@/types';

export type UserState = {
  user: {
    user: User;
    isAuth: boolean;
  };
};
