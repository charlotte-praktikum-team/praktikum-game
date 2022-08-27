import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading, P } from '@/components';
import { ErrorPageProps } from '@/pages/error/types';
import './error.css';
import { routes } from '@/router/routes';

const ErrorPage: FC<ErrorPageProps> = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <div className='error-page bounce-top'>
      <Heading type='h1' size='xxl' classes='error-page__text'>
        {title}
      </Heading>
      <P classes='error-page__text'>{description}</P>
      <button className='error-page__button' onClick={() => navigate(routes.game.path, { replace: true })}>
        <P classes='error-page__text'>в игру</P>
      </button>
    </div>
  );
};

export default ErrorPage;
