import { createElement, FC, memo } from 'react';
import cn from 'classnames';
import { HeadingProps } from './types';

import './heading.css';

export const Heading: FC<HeadingProps> = memo(({ children, type, size, align = 'center' }) =>
  createElement(
    `${type}`,
    {
      className: cn('heading', `heading_align-${align}`, `heading_size-${size}`),
    },
    children
  )
);
