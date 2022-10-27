import React, { FC, KeyboardEvent, memo, MouseEvent, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from 'classnames';
import { APP_ROOT_ID } from 'utils/constants';
import { ModalProps } from './types';
import { Card } from '../card/card';
import { Heading } from '../heading/heading';

import './modal.css';
import { Icon } from '../icon/icon';

export const Modal: FC<ModalProps> = memo(({ isOpen, onClose, title, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  if (!isMounted) {
    return null;
  }

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
    document.getElementById(APP_ROOT_ID)!
  );
});
