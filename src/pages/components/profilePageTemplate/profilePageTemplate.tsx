import cn from 'classnames';
import { useFormik } from 'formik';
import React, { ChangeEvent, FC, useState } from 'react';

import { Button, Heading, Modal, SmallText } from 'components';

import './profilePageTemplate.css';
import { ProfilePageTemplateProps } from './types';
import { initialValues, validationSchema } from './constants';
import { selectIsLoading, selectUser } from 'store/user/selectors';
import { PRACTICUM_ORIGIN_AVATAR } from 'utils/constants';
import { changeAvatar } from 'store/user/thunk';
import { useAppDispatch, useAppSelector } from 'store';

export const ProfilePageTemplate: FC<ProfilePageTemplateProps> = ({ children, title }) => {
  const dispatch = useAppDispatch();
  const { avatar } = useAppSelector(selectUser);
  const isLoading = useAppSelector(selectIsLoading);
  const { errorMessage } = useAppSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [inputText, setInputText] = useState('Выбрать файл на компьютере');
  const { errors, handleSubmit, setFieldValue, values, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (formValues) => {
      dispatch(changeAvatar(formValues.avatar!));
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
          <SmallText danger>{errorMessage}</SmallText>
          <div className='profile-avatar' onClick={onToggleModal}>
            {!isLoading ? (
              <>
                {avatar && <img src={PRACTICUM_ORIGIN_AVATAR + avatar} alt='Аватар' className='profile-avatar__image' />}
                <div className='profile-avatar__cover'>
                  <span className='profile-avatar__cover-text'>Поменять аватар</span>
                </div>
              </>
            ) : (
              <SmallText>загрузка...</SmallText>
            )}
          </div>
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
            <input
              type='file'
              name='avatar'
              id='avatar'
              className='profile-modal__input'
              accept='.png, .jpg, .jpeg, .gif'
              onChange={onChangeInput}
            />
          </label>
          <SmallText classes='profile-modal__error'>{errors.avatar}</SmallText>
          <Button type='submit'>Загрузить</Button>
        </form>
      </Modal>
    </>
  );
};
