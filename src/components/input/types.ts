type Design = 'default' | 'rounded';

export type InputProps = {
  name?: string;
  value?: string;
  errorMessage?: string;
  invalid?: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  design?: Design;
  onChange?: (value: string) => void;
};