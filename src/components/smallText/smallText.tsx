import { FC, memo } from 'react';
import cn from 'classnames';

import { SmallTextProps } from './types';
import './smallText.css';

export const SmallText: FC<SmallTextProps> = memo(({ children, size = 's', classes, danger }) => (
  <span className={cn('small-text', `small-text_size-${size}`, { 'small-text_danger': danger }, classes)}>{children}</span>
));
