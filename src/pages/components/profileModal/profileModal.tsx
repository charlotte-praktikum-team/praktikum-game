import { ChangeEvent, FC, useState } from 'react';
import { useFormik } from 'formik';
import cn from 'classnames';

import { ProfileModalProps } from './types';
import './profileModal.css';
import { initialValues, validationSchema } from './constants';

import { Modal, Button, SmallText } from '@/components';

export const ProfileModal: FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const [inputText, setInputText] = useState('Выбрать файл на компьютере');
  const { errors, handleSubmit, setFieldValue, values } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (formValues) => {
      console.log('values', formValues);
      onClose();
    },
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];

    setFieldValue('avatar', file);
    setInputText(file.name);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title='Загрузите файл'>
      <form encType='multipart/form-data' className='profile-modal' onSubmit={handleSubmit}>
        <label htmlFor='avatar' className='profile-modal__label'>
          <SmallText classes={cn('profile-modal__input-text', { 'profile-modal__input-text_file': values.avatar })}>{inputText}</SmallText>
          <input type='file' name='avatar' id='avatar' className='profile-modal__input' onChange={onChangeInput} />
        </label>
        <SmallText classes='profile-modal__error'>{errors.avatar}</SmallText>
        <Button type='submit'>Загрузить</Button>
      </form>
    </Modal>
  );
};
