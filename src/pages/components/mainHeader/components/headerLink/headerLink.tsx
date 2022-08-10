import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { PageHeaderMainLinkProps } from './types';
import './headerLink.css';

import { Icon } from '@/components';

const HeaderLink: React.FC<PageHeaderMainLinkProps> = ({ routeData }) => {
  const { path, title, headerIcon } = routeData;

  return (
    <NavLink end to={path} className='header-link'>
      {({ isActive }) => (
        <div className={cn('header-link__wrapper', { 'header-link__wrapper_active': isActive })}>
          <Icon name={headerIcon} />
          <span className='header-link__title'>{title}</span>
        </div>
      )}
    </NavLink>
  );
};

export default HeaderLink;
