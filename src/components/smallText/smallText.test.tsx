import { render } from '@testing-library/react';

import { SmallText } from './smallText';

describe('SmallText', () => {
  it('should add danger class', () => {
    const { container } = render(<SmallText danger>text</SmallText>);
    const smallText = container.getElementsByClassName('small-text_danger')[0];

    expect(smallText).toBeInTheDocument();
  });
});
