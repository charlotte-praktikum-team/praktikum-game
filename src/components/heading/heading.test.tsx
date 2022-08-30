import { render } from '@testing-library/react';

import { Heading } from './heading';

describe('Heading', () => {
  it('should render h1', () => {
    const { container } = render(
      <Heading type='h1' size='m'>
        title
      </Heading>
    );
    const header = container.querySelector('h1');

    expect(header).toBeInTheDocument();
  });
});
