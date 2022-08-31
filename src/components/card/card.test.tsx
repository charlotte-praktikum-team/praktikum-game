import { render } from '@testing-library/react';

import { Card } from './card';

describe('Card', () => {
  it('should render with small width', () => {
    const { container } = render(<Card width='s'>content</Card>);
    const card = container.getElementsByClassName('card_width-s')[0];

    expect(card).toBeInTheDocument();
  });
});
