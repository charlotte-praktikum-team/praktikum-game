import { Children } from 'react';
import cn from 'classnames';
import { useFormik } from 'formik';
import { Button, Card, Heading, Input, Link } from '@/components';
import { AuthFormProps } from './types';

import './authForm.css';

export const AuthForm = <T extends Record<string, string>>({
  inputs,
  formTitle,
  formName,
  initialValues,
  submitButtonText,
  onSubmit,
  validationSchema,
  link,
  children = null,
  classes,
}: AuthFormProps<T>) => {
  const { errors, touched, handleSubmit, getFieldProps } = useFormik<T>({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Card width='s' classes={cn('auth-form', classes)}>
      <Heading type='h2' size='xl'>
        {formTitle}
      </Heading>

      <form className='auth-form__form' name={formName} onSubmit={handleSubmit}>
        {Children.toArray(
          inputs.map(({ name, ...input }) => (
            <Input
              {...input}
              {...getFieldProps(name)}
              errorMessage={touched[name] && ((errors[name] as string) ?? '')}
              invalid={touched[name] && !!errors[name]}
            />
          ))
        )}

        <Link href={link.href} classes='auth-form__link'>
          {link.children}
        </Link>

        <div className='auth-form__submit-zone'>
          <Button type='submit'>{submitButtonText}</Button>
          {children}
        </div>
      </form>
    </Card>
  );
};
