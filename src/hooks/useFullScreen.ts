import { useEffect } from 'react';

export const useFullScreen = (key = 'f') => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key.toLocaleLowerCase() === key) {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
    };

    document.addEventListener('keydown', listener);

    return () => document.removeEventListener('keydown', listener);
  }, []);
};
