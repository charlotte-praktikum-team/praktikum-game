import { FormikHelpers } from 'formik';
import { InputProps } from '@/components';

export type ProfileFormProps<T> = {
  inputs: InputProps[];
  formName: string;
  initialValues: T;
  onSubmit: (formData: T, helpers: FormikHelpers<T>) => void;
  validationSchema: unknown;
  isLoading?: boolean;
};
