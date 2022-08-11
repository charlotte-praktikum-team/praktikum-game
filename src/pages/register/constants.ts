import { InputProps } from '@/components';
import { createValidationSchema } from '@/utils/validation';

export const inputs: InputProps[] = [
  {
    name: 'first_name',
    label: 'Имя',
  },
  {
    name: 'second_name',
    label: 'Фамилия',
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
  },
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
  first_name: '',
  second_name: '',
  login: '',
  email: '',
  password: '',
  phone: '',
};

export const validationSchema = createValidationSchema('first_name', 'second_name', 'email', 'phone', 'login', 'password');
