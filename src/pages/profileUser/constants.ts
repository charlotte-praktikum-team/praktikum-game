import { InputProps } from '@/components';
import { createValidationSchema } from '@/utils/validation';

export const inputs: InputProps[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    name: 'login',
    label: 'Логин',
  },
  {
    name: 'first_name',
    label: 'Имя',
  },
  {
    name: 'second_name',
    label: 'Фамилия',
  },
  {
    name: 'display_name',
    label: 'Имя в чате',
  },
  {
    name: 'phone',
    label: 'Телефон',
    type: 'tel',
  },
];

export const validationSchema = createValidationSchema('email', 'login', 'first_name', 'second_name', 'display_name', 'phone');
