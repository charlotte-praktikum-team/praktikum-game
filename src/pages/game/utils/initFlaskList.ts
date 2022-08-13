import { Flask } from '../gameEntities/flask';
import { GameConfig } from './config';

export const initFlaskList = (): Flask[] => {
  const list: Flask[] = [];
  let y = GameConfig.baseGap + GameConfig.ball.radius;
  let x = GameConfig.baseGap;

  for (let i = 1; i <= GameConfig.filledFlasks; i++) {
    if (i === GameConfig.flasksPerRow + 1) {
      y += GameConfig.flask.height + GameConfig.rowsGap;
      x = GameConfig.baseGap;
    }

    const flask = new Flask(x, y);

    list.push(flask);

    x += GameConfig.flask.width + GameConfig.flasksGap;
  }

  for (let i = 0; i < GameConfig.emptyFlasks; i++) {
    list.push(new Flask(x, y));
    x += GameConfig.flask.width + GameConfig.flasksGap;
  }

  return list;
};
