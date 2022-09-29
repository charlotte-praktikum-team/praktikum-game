import cn from 'classnames';
import React, { FC, memo } from 'react';
import { HeaderProps } from './types';
import './header.css';

export const Header: FC<HeaderProps> = memo(({ children, classes }) => <header className={cn('header', classes)}>{children}</header>);
