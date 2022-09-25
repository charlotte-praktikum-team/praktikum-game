import React, { FC, useRef, memo } from 'react';
import cn from 'classnames';

import { ProfileFormItemProps } from './types';
import './profileFormItem.css';

import { ProfileListItem } from '../profileListItem/profileListItem';
import { SmallText } from 'components';

export const ProfileFormItem: FC<ProfileFormItemProps> = memo(
  ({ name, errorMessage, label, onBlur, onChange, type = 'text', value, invalid }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <ProfileListItem>
        <SmallText danger>{errorMessage}</SmallText>
        <label htmlFor={name} className='profile-form-item' onClick={() => inputRef.current.focus()}>
          <span>{label}</span>
          <input
            ref={inputRef}
            className={cn('profile-form-item__input', { 'profile-form-item__input_error': invalid })}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        </label>
      </ProfileListItem>
    );
  }
);
