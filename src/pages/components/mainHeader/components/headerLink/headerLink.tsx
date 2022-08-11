import { FC } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { PageHeaderMainLinkProps, LinkIconName } from './types';
import './headerLink.css';

import { Icon } from '@/components';

const HeaderLink: FC<PageHeaderMainLinkProps> = ({ routeData }) => {
  const { path, title, headerIcon } = routeData;

  return (
    <NavLink to={path} className='header-link'>
      {({ isActive }) => (
        <div className={cn('header-link__wrapper', { 'header-link__wrapper_active': isActive })}>
          <Icon name={headerIcon as LinkIconName} />
          <span className='header-link__title'>{title}</span>
        </div>
      )}
    </NavLink>
  );
};

export default HeaderLink;
