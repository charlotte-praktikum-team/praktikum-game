import React, { FC, memo } from 'react';
import cn from 'classnames';
import { ButtonProps } from './types';

import './button.css';

export const Button: FC<ButtonProps> = memo(({ onClick, children, design = 'primary', width = 'm', disabled }) => {
  return (
    <button
      className={cn('button', `button_${design}`, `button_width-${width}`)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
