import { memo, Children } from 'react';

import './headerMain.css';
import { RouteData } from './types';
import { routes } from '@/router/routes';

import HeaderLink from './components/headerLink/headerLink';
import { Heading, Icon } from '@/components';

const HeaderMain = memo(() => {
  const headerRoutes = [routes.game, routes.leaderboard, routes.forum, routes.profile];

  return (
    <header className='header-main'>
      <Heading type='h1' size='l'>
        {routes.landing.title}
      </Heading>
      <nav className='header-main__link-wrapper'>
        {Children.toArray(headerRoutes.map((route) => <HeaderLink routeData={route as RouteData} />))}
      </nav>
      <button className='header-main__exit-button'>
        <Icon name='logout' />
      </button>
    </header>
  );
});

export default HeaderMain;
