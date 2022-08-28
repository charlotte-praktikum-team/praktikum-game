import { nanoid } from 'nanoid';
import { Position } from '../types';
import { gameConfig } from '../utils/config';
import { Ball } from './ball';

export class Flask {
  id: string;

  x: number;

  y: number;

  balls: Ball[] = [];

  constructor(x: number, y: number, ballsColors?: string[]) {
    this.id = nanoid(6);
    this.x = x;
    this.y = y;

    if (ballsColors) {
      const ballX = this.ballXPos;
      let ballY = this.ballYBottomPos;

      ballsColors.forEach((color) => {
        this.balls.push(new Ball(ballX, ballY, color));
        ballY = ballY - gameConfig.flask.ballsGap - gameConfig.ball.radius * 2;
      });
    }
  }

  get ballXPos() {
    return this.x + gameConfig.flask.width / 2;
  }

  get ballYBottomPos() {
    return this.y + gameConfig.flask.height - gameConfig.flask.lineWidth - gameConfig.flask.padding - gameConfig.ball.radius;
  }

  get hasSpace() {
    return this.balls.length < gameConfig.flask.maxBalls;
  }

  get upperFlaskPos(): Position {
    return {
      x: this.ballXPos,
      y: this.y - gameConfig.ball.radius - gameConfig.flask.padding,
    };
  }

  render = (ctx: CanvasRenderingContext2D, dt: number) => {
    ctx.strokeStyle = gameConfig.flask.color;
    ctx.lineWidth = gameConfig.flask.lineWidth;

    this.strokeFlask(ctx);
    this.balls.forEach((ball) => ball.render(ctx, dt));
  };

  strokeFlask = (ctx: CanvasRenderingContext2D) => {
    const { width, height, radius, neckSize } = gameConfig.flask;

    ctx.beginPath();

    ctx.moveTo(this.x - neckSize + radius.topLeft, this.y);
    ctx.lineTo(this.x + width + neckSize - radius.topRight, this.y);
    ctx.quadraticCurveTo(this.x + width, this.y, this.x + width, this.y + radius.topRight);
    ctx.lineTo(this.x + width, this.y + height - radius.bottomRight);
    ctx.quadraticCurveTo(this.x + width, this.y + height, this.x + width - radius.bottomRight, this.y + height);
    ctx.lineTo(this.x + radius.bottomLeft, this.y + height);
    ctx.quadraticCurveTo(this.x, this.y + height, this.x, this.y + height - radius.bottomLeft);
    ctx.lineTo(this.x, this.y + radius.topLeft);
    ctx.quadraticCurveTo(this.x, this.y, this.x + radius.topLeft - neckSize, this.y);

    ctx.closePath();
    ctx.stroke();
  };

  getUpperBall = (): Ball | null => {
    if (this.balls.length) {
      return this.balls[this.balls.length - 1];
    }

    return null;
  };

  select = () => {
    if (!this.balls.length) {
      return;
    }

    const upperBall = this.balls[this.balls.length - 1];

    upperBall.moveTo({
      x: this.ballXPos,
      y: this.y - gameConfig.ball.radius - gameConfig.flask.padding,
    });
  };

  dropBall = () => {
    if (!this.balls.length) {
      return;
    }

    const upperBall = this.balls[this.balls.length - 1];
    const secondBall = this.balls.length > 1 ? this.balls[this.balls.length - 2] : null;

    upperBall.moveTo({
      x: this.ballXPos,
      y: secondBall ? secondBall.y - gameConfig.ball.radius * 2 - gameConfig.flask.ballsGap : this.ballYBottomPos,
    });
  };

  moveBall = (pos: Position) => {
    const upperBall = this.balls[this.balls.length - 1];

    upperBall.moveTo(pos);
  };

  popBall = (): Ball | undefined => this.balls.pop();

  addBall = (ball: Ball) => {
    this.balls.push(ball);
    this.moveBall(this.upperFlaskPos);
    this.dropBall();
  };
}
