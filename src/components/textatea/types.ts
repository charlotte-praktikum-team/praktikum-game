export type TextareaProps = {
  name: string;
  value?: string;
  errorMessage?: string;
  invalid?: boolean;
  placeholder?: string;
  onChange?: (value: string) => void;
};
