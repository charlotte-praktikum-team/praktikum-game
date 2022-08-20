import { InputProps } from '@/components';
import { FormikHelpers } from 'formik';

export type ProfileFormProps<T> = {
  inputs: InputProps[];
  formName: string;
  initialValues: T;
  onSubmit: (formData: T, helpers: FormikHelpers<T>) => void;
  validationSchema: unknown;
  isLoading?: boolean;
  successText?: string;
};
