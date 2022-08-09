import { FC, memo } from 'react';
import cn from 'classnames';
import { CardProps } from './types';

import './card.css';

export const Card: FC<CardProps> = memo(({ children, width = 'm', classes }) => (
  <div className={cn('card', `card_width-${width}`, classes)}>{children}</div>
));
