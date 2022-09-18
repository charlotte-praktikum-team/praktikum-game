import { MouseEventHandler } from 'react';

type Design = 'primary' | 'secondary' | 'yandex';
type Width = 's' | 'm';
type Type = 'submit' | 'reset' | 'button' | 'link';

export type ButtonProps = {
  children: React.ReactNode;
  design?: Design;
  width?: Width;
  href?: string;
  disabled?: boolean;
  type?: Type;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
