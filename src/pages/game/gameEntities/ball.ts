import { gameConfig } from '../utils/config';

export class Ball {
  constructor(public x: number, public y: number, private color: string) {}

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = gameConfig.ball.borderColor;
    ctx.lineWidth = gameConfig.ball.borderWidth;

    ctx.beginPath();
    ctx.arc(this.x, this.y, gameConfig.ball.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
