import { FC, memo } from 'react';
import cn from 'classnames';
import { PProps } from './types';

import './p.css';

export const P: FC<PProps> = memo(({ children, classes }) => <p className={cn('p', classes)}>{children}</p>);
