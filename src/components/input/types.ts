import { ChangeEventHandler, FocusEventHandler } from 'react';

type Design = 'default' | 'rounded';
type InputTypes = 'text' | 'password' | 'tel' | 'email';

export type InputProps = {
  name: string;
  value?: string;
  type?: InputTypes;
  errorMessage?: string;
  invalid?: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  design?: Design;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};
