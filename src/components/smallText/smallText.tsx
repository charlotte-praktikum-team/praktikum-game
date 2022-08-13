import { FC, memo } from 'react';
import cn from 'classnames';
import { SmallTextProps } from './types';

import './smallText.css';

export const SmallText: FC<SmallTextProps> = memo(({ children, size = 's' }) => (
  <span className={cn('small-text', `small-text_size-${size}`)}>{children}</span>
));
