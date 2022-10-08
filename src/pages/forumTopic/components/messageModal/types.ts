export type MessageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSend: (value: string) => void;
};
