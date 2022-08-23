import { Children } from 'react';
import { useFormik } from 'formik';

import { ProfileFormItem } from '../profileFormItem/profileFormItem';
import { ProfileList } from '../profileList/profileList';
import { Button, SmallText } from '@/components';

import { ProfileFormProps } from './types';
import './profileForm.css';

export const ProfileForm = <T extends Record<string, string>>({
  inputs,
  formName,
  initialValues,
  onSubmit,
  validationSchema,
  isLoading,
  successText,
}: ProfileFormProps<T>) => {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik<T>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <form className='profile-form' name={formName} onSubmit={handleSubmit}>
      <ProfileList>
        {Children.toArray(
          inputs.map(({ name, ...input }) => (
            <ProfileFormItem
              {...input}
              {...getFieldProps(name)}
              errorMessage={touched[name] && ((errors[name] as string) ?? '')}
              invalid={touched[name] && !!errors[name]}
            />
          ))
        )}
      </ProfileList>
      <SmallText classes='profile-form__success-text'>{successText}</SmallText>
      <Button type='submit' disabled={isLoading}>
        {isLoading ? 'Подождите...' : 'Сохранить'}
      </Button>
    </form>
  );
};
