import React, { FC, memo } from 'react';
import { H3Props } from './types';

import './h2.css';

export const H3: FC<H3Props> = memo(({ children }) => <h3 className='h3'>{children}</h3>);
