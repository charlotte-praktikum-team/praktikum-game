import { FC, memo } from 'react';
import cn from 'classnames';
import { ButtonProps } from './types';

import './button.css';

export const Button: FC<ButtonProps> = memo(({ onClick, children, design = 'primary', width = 'm', disabled, type = 'button' }) => (
  <button className={cn('button', `button_${design}`, `button_width-${width}`)} type={type} disabled={disabled} onClick={onClick}>
    {children}
  </button>
));
