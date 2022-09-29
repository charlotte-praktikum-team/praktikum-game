import { MouseEvent } from 'react';
import { Position } from '../types';

export const getCursorPosition = (canvas: HTMLCanvasElement, event: MouseEvent<HTMLCanvasElement>): Position => {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  return { x, y };
};
