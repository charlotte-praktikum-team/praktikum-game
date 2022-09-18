import { User } from '@/types';

export type UserState = {
  user: User;
  isAuth: boolean;
  isLoading: boolean;
  errorMessage: string;
  serviceId?: string;
};
