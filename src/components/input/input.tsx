import { FC, memo } from 'react';
import cn from 'classnames';
import { InputProps } from './types';

import './input.css';

export const Input: FC<InputProps> = memo(
  ({ name, value = '', type = 'text', label, placeholder = ' ', design, errorMessage, invalid, disabled, onChange, onBlur }) => {
    if (design === 'rounded') {
      return (
        <div className='rounded-field__wrapper'>
          <input
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className={cn('rounded-field__input', { 'rounded-field__input_invalid': invalid })}
            onChange={onChange}
            onBlur={onBlur}
          />
        </div>
      );
    }

    return (
      <div className='field__wrapper'>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          className={cn('field__input', { field__input_invalid: invalid })}
          onChange={onChange}
          onBlur={onBlur}
        />

        <label htmlFor={name} className='field__label'>
          {label}
        </label>
        <span className='field__error'>{errorMessage}</span>
      </div>
    );
  }
);
