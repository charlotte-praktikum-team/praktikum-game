import React, { FC, memo, MouseEvent, useRef } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { ModalProps } from './types';
import { Card } from '../card/card';
import { H2 } from '../h2/h2';
import { APP_ROOT_ID } from 'utils/constants';

import './modal.css';

export const Modal: FC<ModalProps> = memo(({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverflowClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current && onClose) {
      onClose();
    }
  };

  return createPortal((
    <div
      ref={modalRef}
      className={cn('modal__overflow', { modal__overflow_open: isOpen })}
      onClick={handleOverflowClick}
    >
      <Card classes='modal__wrapper'>
        <H2 align='left'>{title}</H2>
        <span className='modal__close-icon' onClick={onClose}></span>
        {children}
      </Card>
    </div>
  ), document.getElementById(APP_ROOT_ID)!);
});