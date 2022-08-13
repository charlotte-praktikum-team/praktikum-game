import { gameConfig } from '../utils/config';

export class Ball {
  x: number;

  y: number;

  private color: string;

  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = gameConfig.ball.borderColor;

    ctx.beginPath();
    ctx.arc(this.x, this.y, gameConfig.ball.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
