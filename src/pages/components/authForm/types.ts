import { ReactNode } from 'react';
import { FormikHelpers } from 'formik';
import { InputProps, LinkProps } from '@/components';

export type AuthFormProps<T> = {
  inputs: InputProps[];
  formTitle: string;
  formName: string;
  submitButtonText: string;
  link: LinkProps;
  children?: ReactNode;
  initialValues: T;
  onSubmit: (formData: T, helpers: FormikHelpers<T>) => void;
  validationSchema: unknown;
  isLoading?: boolean;
  classes?: string;
};
