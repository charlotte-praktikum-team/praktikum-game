import { gameConfig } from '../utils/config';
import { Ball } from './ball';

export class Flask {
  x: number;

  y: number;

  balls: Ball[] = [];

  constructor(x: number, y: number, ballsColors?: string[]) {
    this.x = x;
    this.y = y;

    if (ballsColors) {
      const ballX = this.x + gameConfig.flask.width / 2;
      let ballY = this.y + gameConfig.flask.height - gameConfig.flask.lineWidth - gameConfig.flask.padding - gameConfig.ball.radius;

      ballsColors.forEach((color) => {
        this.balls.push(new Ball(ballX, ballY, color));
        ballY = ballY - gameConfig.flask.ballsGap - gameConfig.ball.radius * 2;
      });
    }
  }

  render = (ctx: CanvasRenderingContext2D) => {
    ctx.strokeStyle = gameConfig.flask.color;
    ctx.lineWidth = gameConfig.flask.lineWidth;
    ctx.strokeRect(this.x, this.y, gameConfig.flask.width, gameConfig.flask.height);

    this.balls.forEach((ball) => ball.render(ctx));
  };
}
