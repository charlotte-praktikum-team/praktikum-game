import React, { FC, memo } from 'react';
import { LinkProps } from './types';

import './link.css';

export const Link: FC<LinkProps> = memo(({ children, href }) => {
  return (
    <a href={href} className='link'>
      {children}
    </a>
  );
});