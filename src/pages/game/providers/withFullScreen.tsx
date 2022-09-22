import { ReactElement } from 'react';
import { useFullScreen } from '@/hooks/useFullScreen';

export const withFullScreen = (Component: () => ReactElement) => () => {
  useFullScreen();

  return <Component />;
};
