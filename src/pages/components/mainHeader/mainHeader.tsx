import { memo, Children } from 'react';

import './mainHeader.css';
import { routes } from '@/router/routes';

import HeaderLink from './components/headerLink/headerLink';
import { Heading, Icon } from '@/components';

const MainHeader = memo(() => {
  const headerRoutes = [routes.game, routes.leaderboard, routes.forum, routes.profile];

  return (
    <header className='header-main'>
      <Heading type='h1' size='l'>
        {routes.landing.title}
      </Heading>
      <nav className='header-main__link-wrapper'>{Children.toArray(headerRoutes.map((route) => <HeaderLink routeData={route} />))}</nav>
      <button className='header-main__exit-button'>
        <Icon name='logout' />
      </button>
    </header>
  );
});

export default MainHeader;
