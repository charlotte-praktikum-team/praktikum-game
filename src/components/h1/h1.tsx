import React, { FC, memo } from 'react';
import { H1Props } from './types';

import './h1.css';

export const H1: FC<H1Props> = memo(({ children }) => {
  return (
    <h1 className='h1'>
      {children}
    </h1>
  );
});