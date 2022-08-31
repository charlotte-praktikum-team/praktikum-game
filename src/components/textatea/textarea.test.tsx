import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Textarea } from './textarea';

describe('Textarea', () => {
  it('should return value', async () => {
    const { container } = render(<Textarea name='message' />);
    const textarea = container.querySelector('textarea[name="message"]');
    const value = 'test';

    await userEvent.type(textarea as HTMLTextAreaElement, value);
    expect((textarea as HTMLInputElement).value).toBe(value);
  });
});
