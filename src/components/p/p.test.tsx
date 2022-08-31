import { render } from '@testing-library/react';

import { P } from './p';

describe('P', () => {
  it('should receive classes props', () => {
    const { container } = render(<P classes='text'>text</P>);
    const p = container.getElementsByClassName('text')[0];

    expect(p).toBeInTheDocument();
  });
});
