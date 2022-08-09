import { FC } from 'react';
import cn from 'classnames';
import { Heading } from '@/components';
import { routes } from '@/router/routes';
import { AuthTemplateProps } from '@/pages/components/authPageTemplate/types';

import './authPageTemplate.css';

export const AuthPageTemplate: FC<AuthTemplateProps> = ({ children, isReversed = false }) => (
  <div className={cn('auth-page-template', { 'auth-page-template_reversed': isReversed })}>
    {children}
    <Heading type='h1' size='xxl' className='auth-page-template__heading' align={isReversed ? 'end' : 'start'}>
      {routes.landing.title}
    </Heading>
  </div>
);
