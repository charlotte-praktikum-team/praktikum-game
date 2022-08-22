import { object, mixed } from 'yup';

export const initialValues = {
  avatar: null,
};

export const validationSchema = object().shape({
  avatar: mixed()
    .test('required', 'Файл не выбран', (value) => value)
    .test('type', 'Допустимый формат файла: jpg, jpeg, png, gif', (value) => value && value.type.match(/.(jpg|jpeg|png|gif)$/i)),
});
