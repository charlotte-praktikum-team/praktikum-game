import React, { FC, memo } from 'react';
import { CardProps } from './types';
import cn from 'classnames';

import './card.css';

export const Card: FC<CardProps> = memo(({ children, width = 'm', classes }) => {
  return (
    <div className={cn('card', `card_width-${width}`, classes)}>
      {children}
    </div>
  );
});
