import { FC, memo } from 'react';
import { PProps } from './types';

import './p.css';

export const P: FC<PProps> = memo(({ children }) => <p className='p'>{children}</p>);
