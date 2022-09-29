import { InputProps } from 'components';
import { createValidationSchema } from 'utils/validation';

export const inputs: InputProps[] = [
  {
    name: 'oldPassword',
    label: 'Старый пароль',
    type: 'password',
  },
  {
    name: 'newPassword',
    label: 'Новый пароль',
    type: 'password',
  },
  {
    name: 'repeatPassword',
    label: 'Повторите новый пароль',
    type: 'password',
  },
];

export const initialValues = {
  oldPassword: '',
  newPassword: '',
  repeatPassword: '',
};

export const validationSchema = createValidationSchema('oldPassword', 'newPassword', 'repeatPassword');
