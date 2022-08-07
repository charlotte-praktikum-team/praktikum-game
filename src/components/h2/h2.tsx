import React, { FC, memo } from 'react';
import cn from 'classnames';
import { H2Props } from './types';

import './h2.css';

export const H2: FC<H2Props> = memo(({ children, align = 'center' }) => {
  return (
    <h2 className={cn('h2', `h2_align-${align}`)}>
      {children}
    </h2>
  );
});