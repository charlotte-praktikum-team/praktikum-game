import { render, screen } from '@testing-library/react';

import { Icon } from './icon';

describe('Icon', () => {
  it('should rendered', async () => {
    render(<Icon name='flask' />);

    screen.debug();
  });
});
