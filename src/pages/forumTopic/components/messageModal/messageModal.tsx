import React, { useState } from 'react';

import { MessageModalProps } from './types';
import './messageModal.css';

import { Button, Textarea, Modal } from 'components';

export const MessageModal: React.FC<MessageModalProps> = ({ isOpen, onClose, onSend }) => {
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setMessage('');
    onClose();
  };

  const handleSend = () => {
    onSend(message);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} title='Новое сообщение' onClose={handleClose}>
      <div className='message-modal__wrapper'>
        <Textarea
          name='message'
          value={message}
          placeholder='Введите текст сообщения'
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button onClick={handleSend}>Отправить</Button>
      </div>
    </Modal>
  );
};
