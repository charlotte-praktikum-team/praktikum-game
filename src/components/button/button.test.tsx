import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from './button';

describe('Button', () => {
  it('should not be called on click if disabled', () => {
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );
    userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
