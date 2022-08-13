import { GameConfig } from '../utils/config';

export class Flask {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  render = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = GameConfig.flask.color;
    ctx.strokeRect(this.x, this.y, GameConfig.flask.width, GameConfig.flask.height);
  };
}
