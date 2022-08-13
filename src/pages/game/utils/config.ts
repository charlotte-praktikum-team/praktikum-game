import { GameConfig } from '../types';

const colors = {
  black: '#212329',
  red: '#c42c1e',
  green: '#0d6731',
  lightGreen: '#60d67c',
  blue: '#3b2fc0',
  lightBlue: '#54a1e5',
  orange: '#eb8b3f',
  purple: '#6d2d8e',
  yellow: '#f1d85b',
  pink: '#e3637c',
  khaki: '#769707',
  grey: '#636461',
};

export const gameConfig: GameConfig = {
  grid: {
    baseGap: 6,
    flasksGap: 110,
    rowsGap: 126,
    filledFlasks: 7,
    emptyFlasks: 2,
    flasksPerRow: 5,
  },
  flask: {
    width: 62,
    height: 246,
    lineWidth: 1,
    color: colors.black,
    ballsGap: 1,
    maxBalls: 4,
    padding: 2,
  },
  ball: {
    radius: 28,
    borderColor: colors.black,
  },
  levels: {
    1: [
      [colors.blue, colors.blue, colors.grey, colors.pink],
      [colors.lightBlue, colors.red, colors.grey, colors.pink],
      [colors.red, colors.red, colors.lightGreen, colors.blue],
      [colors.lightGreen, colors.lightBlue, colors.lightBlue, colors.orange],
      [colors.lightGreen, colors.orange, colors.grey, colors.orange],
      [colors.orange, colors.pink, colors.grey, colors.red],
      [colors.blue, colors.lightBlue, colors.pink, colors.lightGreen],
    ],
  },
};
