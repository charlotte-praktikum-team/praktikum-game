import { MouseEventHandler } from 'react';

type Design = 'primary' | 'secondary';
type Width = 's' | 'm';

export type ButtonProps = {
  children: React.ReactNode;
  design?: Design;
  width?: Width;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};