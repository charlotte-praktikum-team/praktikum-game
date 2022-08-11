import { FC, memo } from 'react';
import cn from 'classnames';

import { SmallTextProps } from './types';
import './smallText.css';

export const SmallText: FC<SmallTextProps> = memo(({ children, classes }) => <span className={cn('small-text', classes)}>{children}</span>);
