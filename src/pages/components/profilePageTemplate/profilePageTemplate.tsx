import cn from 'classnames';
import { useFormik } from 'formik';
import { ChangeEvent, FC, useState } from 'react';

import { ProfileAvatar } from '../profileAvatar/profileAvatar';
import { Button, Heading, Modal, SmallText } from '@/components';

import './profilePageTemplate.css';
import { ProfilePageTemplateProps } from './types';
import { initialValues, validationSchema } from './constants';

export const ProfilePageTemplate: FC<ProfilePageTemplateProps> = ({ children, title }) => {
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState('Выбрать файл на компьютере');
  const { errors, handleSubmit, setFieldValue, values, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (formValues) => {
      console.log('values', formValues);
      onCloseModal();
      handleSubmit();
    },
  });

  const onToggleModal = () => setOpenModal(!openModal);

  const onCloseModal = () => {
    setInputText('Выбрать файл на компьютере');
    resetForm();
    onToggleModal();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files![0];
    setFieldValue('avatar', file);
    setInputText(file.name);
  };

  return (
    <>
      <div className='profile-page-template'>
        <div className='profile-page-template__top'>
          <ProfileAvatar onClick={onToggleModal} />
          {title && (
            <Heading type='h1' size='m'>
              {title}
            </Heading>
          )}
        </div>
        {children}
      </div>
      <Modal isOpen={openModal} onClose={onCloseModal} title='Загрузите файл'>
        <form encType='multipart/form-data' className='profile-modal' onSubmit={handleSubmit}>
          <label htmlFor='avatar' className='profile-modal__label'>
            <SmallText classes={cn('profile-modal__input-text', { 'profile-modal__input-text_file': values.avatar })}>
              {inputText}
            </SmallText>
            <input type='file' name='avatar' id='avatar' className='profile-modal__input' onChange={onChangeInput} />
          </label>
          <SmallText classes='profile-modal__error'>{errors.avatar}</SmallText>
          <Button type='submit'>Загрузить</Button>
        </form>
      </Modal>
    </>
  );
};
