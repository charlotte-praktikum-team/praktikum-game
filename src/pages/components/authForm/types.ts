import { ReactNode } from 'react';
import { InputProps, LinkProps } from '@/components';

export type AuthFormProps = {
  inputs: InputProps[];
  title: string;
  formName: string;
  submitButtonText: string;
  link: LinkProps;
  children?: ReactNode;
};
