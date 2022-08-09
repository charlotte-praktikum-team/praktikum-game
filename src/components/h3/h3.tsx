import React, { FC, memo } from 'react';
import cn from 'classnames';
import { H3Props } from './types';

import './h2.css';

export const H3: FC<H3Props> = memo(({ children, align = 'center' }) => <h3 className={cn('h3', `h3_align-${align}`)}>{children}</h3>);
