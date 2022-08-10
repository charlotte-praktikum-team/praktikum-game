import * as Yup from 'yup';

const messages = {
  required: 'Это поле обязательно',
  min: (field: string, num: number) => `Длина ${field} должна быть не менее ${num} символов`,
  max: (field: string, num: number) => `Длина ${field} должна быть не более ${num} символов`,
};

export const loginSchema = Yup.string()
  .min(3, messages.min('логина', 3))
  .max(20, messages.max('логина', 20))
  .matches(/^[a-zA-Z][a-zA-Z-_\d]{3,20}$/, 'Допускаются латинские буквы, цифры, символы "-" и "_". Должен начинаться с буквы.')
  .required(messages.required);

export const passwordSchema = Yup.string()
  .min(8, messages.min('пароля', 8))
  .max(40, messages.min('пароля', 40))
  .matches(/[A-Z]+/, 'Обязательна хотя бы одна заглавная буква')
  .matches(/\d+/, 'Обязательна хотя бы одна цифра')
  .required(messages.required);
