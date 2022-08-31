import { FC, KeyboardEvent, memo, MouseEvent, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { ModalProps } from './types';
import { Card } from '../card/card';
import { Heading } from '../heading/heading';

import './modal.css';
import { Icon } from '../icon/icon';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

export const Modal: FC<ModalProps> = memo(({ isOpen, onClose, title, children }) => {
  const modalEl = document.createElement('div');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    modalRoot.appendChild(modalEl);
    return () => {
      modalRoot.removeChild(modalEl);
    };
  });

  const handleOverflowClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current && onClose) {
      onClose();
    }
  };

  const handleCloseIconKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' && onClose) {
      onClose();
    }
  };

  return createPortal(
    <div ref={modalRef} className={cn('modal__overflow', { modal__overflow_open: isOpen })} onClick={handleOverflowClick}>
      <Card classes='modal__wrapper'>
        <Heading type='h2' size='l' align='start'>
          {title}
        </Heading>

        <span className='modal__close-icon' role='button' tabIndex={0} onClick={onClose} onKeyDown={handleCloseIconKeyDown}>
          <Icon name='cross' size='l' />
        </span>

        {children}
      </Card>
    </div>,
    // Container is the app root. So it will be in the dom for sure
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    modalEl
  );
});
