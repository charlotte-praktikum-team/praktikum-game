import { screen, render } from '@testing-library/react';

import { Avatar } from './avatar';

jest.mock('utils/constants', () => 'https://ya-praktikum.tech/api/v2');

describe('Avatar', () => {
  it('should render Avatar', () => {
    render(<Avatar />);
    screen.debug();
  });
});
