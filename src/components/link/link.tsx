import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { LinkProps } from './types';

import './link.css';

export const StyledLink: FC<LinkProps> = memo(({ children, href, replace, classes }) => (
  <Link to={href} replace={replace} className={cn('link', classes)}>
    {children}
  </Link>
));
