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

export const mapColorToGradientTone = {
  [colors.red]: '#62160f',
  [colors.green]: '#06401f',
  [colors.lightGreen]: '#103e1b',
  [colors.blue]: '#161248',
  [colors.lightBlue]: '#155288',
  [colors.orange]: '#a95412',
  [colors.purple]: '#441c59',
  [colors.yellow]: '#bfa210',
  [colors.pink]: '#ad1f3b',
  [colors.khaki]: '#4a5e04',
  [colors.grey]: '#252624',
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
    height: 230,
    radius: {
      topLeft: 10,
      topRight: 10,
      bottomLeft: 25,
      bottomRight: 25,
    },
    neckSize: 15,
    lineWidth: 2,
    color: colors.grey,
    ballsGap: 1,
    maxBalls: 4,
    padding: 2,
  },
  ball: {
    radius: 26,
    borderColor: colors.grey,
    borderWidth: 1,
    velRatio: 0.05,
    vel: 15,
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
