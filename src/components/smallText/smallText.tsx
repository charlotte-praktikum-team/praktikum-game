import React, { FC, memo } from 'react';
import { SmallTextProps } from './types';

import './smallText.css';

export const SmallText: FC<SmallTextProps> = memo(({ children }) => {
  return (
    <span className='small-text'>
      {children}
    </span>
  );
});