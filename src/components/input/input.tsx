import React, { ChangeEvent, FC, memo } from 'react';
import cn from 'classnames';
import { InputProps } from './types';

import './input.css';

export const Input: FC<InputProps> = memo(({ name, value, label, placeholder, design, errorMessage, invalid, disabled, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  if (design === 'rounded') {
    return (
      <div className='rounded-field__wrapper'>
        <input
          name={name}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          className={cn('rounded-field__input', { 'rounded-field__input_invalid': invalid })}
          onChange={handleChange}
        />
      </div>
    );
  }

  return (
    <div className='field__wrapper'>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        className={cn('field__input', { 'field__input_invalid': invalid })}
        onChange={handleChange}
      />

      <label className='field__label'>{label}</label>
      <span className='field__error'>{errorMessage}</span>
    </div>
  );
});
