import React, { FC, memo } from 'react';
import cn from 'classnames';
import { PRACTICUM_ORIGIN } from 'utils/constants';
import { AvatarProps } from './types';

import './avatar.css';

export const Avatar: FC<AvatarProps> = memo(({ src, size = 'm' }) => {
  return (
    <span className={cn('avatar__wrapper', `avatar__wrapper_size-${size}`)}>
      {src && 
        <img src={`${PRACTICUM_ORIGIN}/resources${src}`} alt='Avatar image' className='avatar__image'></img>
      }
    </span>
  );
});