import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { PageHeaderMainLinkProps } from './types';
import './pageHeaderMainLink.css';

import { Icon, P } from '@/components';

const PageHeaderMainLink: React.FC<PageHeaderMainLinkProps> = ({ routeData, isActive, onItemClick }) => {
  const { path, title } = routeData;
  const linkClassName = cn('page-header-main-link', { 'page-header-main-link--active': isActive });

  const getIconName = () => {
    switch (title) {
      case 'Игра':
        return 'balls';
      case 'Лидеры':
        return 'leaderboard';
      case 'Форум':
        return 'forum';
      case 'Профиль':
        return 'user';
      default:
        return 'balls';
    }
  };

  return (
    <div onClick={() => onItemClick(title)} className={linkClassName}>
      <div className='page-header-main-link__icon'>
        <Icon name={getIconName()} />
      </div>
      <Link to={path} className='page-header-main-link__link'>
        <P>{title}</P>
      </Link>
    </div>
  );
};

export default PageHeaderMainLink;
