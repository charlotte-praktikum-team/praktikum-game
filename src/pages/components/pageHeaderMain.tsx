import { memo, useState } from 'react';

import './pageHeaderMain.css';
import { LinkName, RouteData } from './types';
import { routes } from '@/router/routes';

import PageHeaderMainLink from './components/pageHeaderMainLink/pageHeaderMainLink';
import { Heading, Icon } from '@/components';

const PageHeaderMain = memo(() => {
  const headerRoutes = [routes.game, routes.leaderboard, routes.forum, routes.profile];
  const [currentIcon, setCurrentIcon] = useState<LinkName>('Профиль');

  const isActiveLinkCheck = (linkName: LinkName) => linkName === currentIcon;
  const onItemClick = (linkName: LinkName) => setCurrentIcon(linkName);

  return (
    <div className='page-header-main'>
      <Heading type='h1' size='l'>
        Ball Sort Puzzle
      </Heading>
      <div className='page-header-main__link-wrapper'>
        {headerRoutes.map((route, index) => (
          <PageHeaderMainLink
            key={index}
            routeData={route as RouteData}
            isActive={isActiveLinkCheck(route.title as LinkName)}
            onItemClick={onItemClick}
          />
        ))}
      </div>
      <div>
        <Icon name='logout' />
      </div>
    </div>
  );
});

export default PageHeaderMain;
