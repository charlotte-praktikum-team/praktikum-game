import React, { memo, useState } from 'react';

import './pageHeaderMain.css';
import { LinkName } from './types';

import PageHeaderMainLink from './components/pageHeaderMainLink/pageHeaderMainLink';

const PageHeaderMain = memo(() => {
  const [currentIcon, setCurrentIcon] = useState<LinkName>('Профиль');

  const isActiveLinkCheck = (linkName: LinkName) => linkName === currentIcon;
  const onItemClick = (linkName: LinkName) => setCurrentIcon(linkName);

  return (
    <div className='page-header-main'>
      <h1>Ball Sort Puzzle</h1>
      <div className='page-header-main__link-wrapper'>
        <PageHeaderMainLink name='Игра' isActive={isActiveLinkCheck('Игра')} onItemClick={onItemClick} />
        <PageHeaderMainLink name='Лидеры' isActive={isActiveLinkCheck('Лидеры')} onItemClick={onItemClick} />
        <PageHeaderMainLink name='Форум' isActive={isActiveLinkCheck('Форум')} onItemClick={onItemClick} />
        <PageHeaderMainLink name='Профиль' isActive={isActiveLinkCheck('Профиль')} onItemClick={onItemClick} />
      </div>
      <span className='page-header-main__exit-button' />
    </div>
  );
});

export default PageHeaderMain;
