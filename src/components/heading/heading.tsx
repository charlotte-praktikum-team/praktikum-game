import React, { FC, memo } from 'react';
import cn from 'classnames';
import { HeadingProps } from './types';

import './heading.css';

export const Heading: FC<HeadingProps> = memo(({ children, type, align = 'center' }) => (
  <div className={cn('heading', `heading_align-${align}`, `heading_type-${type}`)}>{children}</div>
));
