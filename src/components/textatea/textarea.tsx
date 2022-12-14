import React, { ChangeEvent, FC, memo } from 'react';
import cn from 'classnames';

import { TextareaProps } from './types';

import './textarea.css';

export const Textarea: FC<TextareaProps> = memo(({ name, value, placeholder, errorMessage, invalid, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e);
  };

  return (
    <div className='textarea__wrapper'>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        className={cn('textarea__textarea', { textarea__textarea_invalid: invalid })}
        onChange={handleChange}
      />
      {errorMessage && <span className='textarea__error'>{errorMessage}</span>}
    </div>
  );
});
