import { Position } from '../types';
import { gameConfig, mapColorToGradientTone } from '../utils/config';

type yVelDirection = 'up' | 'down';
type xVelDirection = 'right' | 'left';

export class Ball {
  private yVel = 0;

  private yVelDirection: yVelDirection = 'up';

  private xVel = 0;

  private xVelDirection: xVelDirection = 'right';

  private movePosList: Position[] = [];

  private curMovePos: Position | null = null;

  constructor(public x: number, public y: number, public color: string) {}

  initMovePosData = () => {
    if (!this.curMovePos) {
      return;
    }

    const pos = this.curMovePos;

    if (this.x !== pos.x) {
      this.xVelDirection = this.x < pos.x ? 'right' : 'left';
      this.xVel = gameConfig.ball.vel;
    }

    if (this.y !== pos.y) {
      this.yVelDirection = this.y < pos.y ? 'down' : 'up';
      this.yVel = gameConfig.ball.vel;
    }
  };

  update = (dt: number) => {
    if (!this.curMovePos && this.movePosList.length) {
      this.curMovePos = this.movePosList.shift() as Position;
      this.initMovePosData();
    }

    if (!this.curMovePos) {
      return;
    }

    const isLeftDir = this.xVelDirection === 'left';
    const xDirection = isLeftDir ? -1 : 1;
    const isHorizontalMoving = isLeftDir ? this.x > this.curMovePos.x : this.x < this.curMovePos.x;

    const isUpDir = this.yVelDirection === 'up';
    const yDirection = isUpDir ? -1 : 1;
    const isVerticalMoving = isUpDir ? this.y > this.curMovePos.y : this.y < this.curMovePos.y;

    this.y += yDirection * this.yVel * dt * gameConfig.ball.velRatio;
    this.x += xDirection * this.xVel * dt * gameConfig.ball.velRatio;

    if (!isVerticalMoving && this.curMovePos.y) {
      this.y = this.curMovePos.y;
      this.yVel = 0;
      this.curMovePos.y = 0;
    }

    if (!isHorizontalMoving && this.curMovePos.x) {
      this.x = this.curMovePos.x;
      this.xVel = 0;
      this.curMovePos.x = 0;
    }

    if (this.curMovePos && !this.curMovePos.x && !this.curMovePos.y) {
      this.curMovePos = null;
    }
  };

  render = (ctx: CanvasRenderingContext2D, dt: number) => {
    const { borderColor, borderWidth, radius } = gameConfig.ball;

    this.update(dt);

    const gradient = ctx.createLinearGradient(this.x - radius, this.y - radius / 2, this.x + radius, this.y + radius / 2);

    gradient.addColorStop(0, this.color);
    gradient.addColorStop(0.8, mapColorToGradientTone[this.color]);

    ctx.fillStyle = gradient;
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;

    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  };

  moveTo = (pos: Position) => {
    this.movePosList.push(pos);
  };
}
