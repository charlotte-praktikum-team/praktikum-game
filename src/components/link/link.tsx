import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { LinkProps } from './types';

import './link.css';

export const StyledLink: FC<LinkProps> = memo(({ children, href, classes }) => (
  <Link to={href} className={cn('link', classes)}>
    {children}
  </Link>
));
