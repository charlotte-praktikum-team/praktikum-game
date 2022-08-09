import React, { FC, memo } from 'react';
import cn from 'classnames';
import { H1Props } from './types';

import './h1.css';

export const H1: FC<H1Props> = memo(({ children, align = 'center' }) => <h1 className={cn('h1', `h1_align-${align}`)}>{children}</h1>);
