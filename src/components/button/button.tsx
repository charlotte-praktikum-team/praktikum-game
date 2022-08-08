import React, { FC, memo } from 'react';
import cn from 'classnames';
import { ButtonProps } from './types';

import './button.css';

export const Button: FC<ButtonProps> = memo(({ onClick, children, design = 'primary', width = 'm', disabled }) => (
  <button className={cn('button', `button_${design}`, `button_width-${width}`)} type='button' disabled={disabled} onClick={onClick}>
    {children}
  </button>
));
