import React from 'react';

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};
