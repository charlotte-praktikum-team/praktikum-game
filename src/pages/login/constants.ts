import { InputProps } from '@/components';
import { createValidationSchema } from '@/utils/validation';

export const inputs: InputProps[] = [
  {
    name: 'login',
    label: 'Логин',
  },
  {
    name: 'password',
    label: 'Пароль',
    type: 'password',
  },
];

export const initialValues = {
  login: '',
  password: '',
};

export const validationSchema = createValidationSchema('login', 'password');
