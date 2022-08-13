import { useEffect, useRef } from 'react';

export const useGameLoop = (cb: (deltaTime: number) => void) => {
  const requestId = useRef<number>();
  const prevTime = useRef<number>();

  const loop = (time: number) => {
    if (prevTime.current !== undefined) {
      const dt = time - prevTime.current;

      cb(dt);
    }

    prevTime.current = time;
    requestId.current = requestAnimationFrame(loop);
  };

  useEffect(() => {
    requestId.current = requestAnimationFrame(loop);

    return () => {
      if (requestId.current) {
        cancelAnimationFrame(requestId.current);
      }
    };
  }, []);
};
