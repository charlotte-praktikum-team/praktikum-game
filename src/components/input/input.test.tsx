import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Input } from './input';

describe('Input', () => {
  it('should not return value if disabled', async () => {
    const { container } = render(<Input name='first_name' disabled />);
    const input = container.querySelector('input[name="first_name"]');

    await userEvent.type(input as HTMLInputElement, 'test');
    expect((input as HTMLInputElement).value).toBe('');
  });
});
