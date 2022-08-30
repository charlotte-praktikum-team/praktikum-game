import { Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { StyledLink } from './link';

describe('StyledLink', () => {
  it('should routes to a new route', () => {
    const history = createMemoryHistory();
    history.push = jest.fn();

    render(
      <Router location={history.location} navigator={history}>
        <StyledLink href='/hello'>Click me</StyledLink>
      </Router>
    );

    fireEvent.click(screen.getByText(/Click Me/i));
    expect(history.push).toHaveBeenCalledWith(
      {
        hash: '',
        pathname: '/hello',
        search: '',
      },
      undefined
    );
  });
});
