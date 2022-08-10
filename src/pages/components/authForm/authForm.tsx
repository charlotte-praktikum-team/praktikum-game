import { Children } from 'react';
import { Button, Card, Heading, Input, Link } from '@/components';
import { AuthFormProps } from '@/pages/components/authForm/types';

import './authForm.css';

export const AuthForm = ({ inputs, title, formName, link, submitButtonText, children = null }: AuthFormProps) => (
  <Card width='s' classes='auth-form'>
    <Heading type='h2' size='xl'>
      {title}
    </Heading>

    <form className='auth-form__form' name={formName}>
      {Children.toArray(inputs.map((input) => <Input {...input} />))}

      <Link href={link.href}>{link.children}</Link>

      <div className='auth-form__submit-zone'>
        <Button type='submit'>{submitButtonText}</Button>
        {children}
      </div>
    </form>
  </Card>
);
