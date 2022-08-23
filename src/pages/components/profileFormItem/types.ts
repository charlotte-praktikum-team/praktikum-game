import { ChangeEventHandler, FocusEventHandler } from 'react';

type ProfileInputType = 'text' | 'tel' | 'email' | 'password';

export type ProfileFormItemProps = {
  name: string;
  value?: string;
  type?: ProfileInputType;
  errorMessage?: string;
  label?: string;
  invalid?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};
