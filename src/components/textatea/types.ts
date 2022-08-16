export type TextareaProps = {
  name: string;
  value?: string;
  errorMessage?: string;
  invalid?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
};
