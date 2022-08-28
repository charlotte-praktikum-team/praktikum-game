import { Flask } from '../gameEntities/flask';
import { gameConfig } from './config';

export const initLevel = (levelNumber: number): Flask[] => {
  if (!levelNumber || !gameConfig.levels[levelNumber]) {
    return [];
  }

  const levelConfig: string[][] = gameConfig.levels[levelNumber];
  const list: Flask[] = [];
  let y = gameConfig.grid.baseGap + gameConfig.ball.radius * 2;
  let x = gameConfig.grid.baseGap;

  for (let i = 0; i < gameConfig.grid.filledFlasks; i++) {
    if (i === gameConfig.grid.flasksPerRow) {
      y += gameConfig.flask.height + gameConfig.grid.rowsGap;
      x = gameConfig.grid.baseGap;
    }

    const flaskBalls = levelConfig[i];
    const flask = new Flask(x, y, flaskBalls);

    list.push(flask);
    x += gameConfig.flask.width + gameConfig.grid.flasksGap;
  }

  for (let i = 0; i < gameConfig.grid.emptyFlasks; i++) {
    list.push(new Flask(x, y));
    x += gameConfig.flask.width + gameConfig.grid.flasksGap;
  }

  return list;
};
