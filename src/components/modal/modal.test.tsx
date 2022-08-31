import { render, fireEvent } from '@testing-library/react';

import { Modal } from './modal';

describe('Modal', () => {
  it('should close on button click', () => {
    const handleClose = jest.fn();
    const { getByRole } = render(
      <Modal isOpen title='modal' onClose={handleClose}>
        <div>content</div>
      </Modal>
    );

    fireEvent.click(getByRole('button'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
