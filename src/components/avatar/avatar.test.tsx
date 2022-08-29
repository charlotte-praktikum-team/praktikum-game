import { render } from '@testing-library/react';

import { Avatar } from './avatar';

jest.mock('utils/constants', () => 'https://ya-praktikum.tech/api/v2');

describe('Avatar', () => {
  it('should render Avatar with image', () => {
    const { getByAltText } = render(
      <Avatar src='https://ya-praktikum.tech/api/v2/resources/9e3c8d37-1cb5-4c7e-80ec-7e6ec084a51a/2cf49f3e-0f75-4412-ad9e-bcb8ba704cb4_avatar.png' />
    );
    const image = getByAltText('Avatar') as HTMLImageElement;

    expect(image.src).toContain('https://ya-praktikum.tech');
  });
});
