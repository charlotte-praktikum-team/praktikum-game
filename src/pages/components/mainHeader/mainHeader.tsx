import { memo, Children } from 'react';

import { HeaderLink } from './components/headerLink/headerLink';
import { Heading, Icon } from '@/components';
import { Header } from '../header/header';

import './mainHeader.css';
import { routes } from '@/router/routes';

export const MainHeader = memo(() => {
  const headerRoutes = [routes.game, routes.leaderboard, routes.forum, routes.profile];

  return (
    <Header classes='header-main'>
      <Heading type='h1' size='l'>
        {routes.landing.title}
      </Heading>
      <nav className='header-main__link-wrapper'>{Children.toArray(headerRoutes.map((route) => <HeaderLink routeData={route} />))}</nav>
      <button className='header-main__exit-button'>
        <Icon name='logout' />
      </button>
    </Header>
  );
});
