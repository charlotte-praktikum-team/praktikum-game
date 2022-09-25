import React from 'react';

import { ProfilePageTemplate } from '../components/profilePageTemplate/profilePageTemplate';
import { ProfileForm } from '../components/profileForm/profileForm';
import { PageMeta } from 'components';

import { ProfilePasswordFormData } from './types';
import { initialValues, inputs, validationSchema } from './constants';
import { useAppDispatch, useAppSelector } from 'store';
import { selectIsLoading } from 'store/user/selectors';
import { changePassword } from 'store/user/thunk';

const ProfilePassword = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <ProfilePageTemplate>
      <PageMeta title='Изменить пароль' />
      <ProfileForm<ProfilePasswordFormData>
        isLoading={isLoading}
        formName='profileUserForm'
        onSubmit={(values) => dispatch(changePassword(values))}
        inputs={inputs}
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
    </ProfilePageTemplate>
  );
};

export default ProfilePassword;
