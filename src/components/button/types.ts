import { MouseEventHandler } from 'react';

type Design = 'primary' | 'secondary';
type Width = 's' | 'm';
type Type = 'submit' | 'reset' | 'button';

export type ButtonProps = {
  children: React.ReactNode;
  design?: Design;
  width?: Width;
  disabled?: boolean;
  type?: Type;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
