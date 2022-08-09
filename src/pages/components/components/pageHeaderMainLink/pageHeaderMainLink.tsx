import React from 'react';
import cn from 'classnames';

import { PageHeaderMainLinkProps } from './types';
import './pageHeaderMainLink.css';

const PageHeaderMainLink: React.FC<PageHeaderMainLinkProps> = ({ name, isActive, onItemClick }) => (
  <div onClick={() => onItemClick(name)} className={cn('page-header-main-link', { 'page-header-main-link--active': isActive })}>
    <span className='page-header-main-link__icon' />
    <span className='page-header-main-link__name'>{name}</span>
  </div>
);

export default PageHeaderMainLink;
