type FlaskRadius = {
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
};

type FlaskConfig = {
  width: number;
  height: number;
  radius: FlaskRadius;
  neckSize: number;
  lineWidth: number;
  color: string;
  padding: number;
  ballsGap: number;
  maxBalls: number;
};

type BallConfig = {
  radius: number;
  borderColor: string;
  borderWidth: number;
  vel: number;
  velRatio: number;
};

type GridConfig = {
  baseGap: number;
  flasksGap: number;
  rowsGap: number;
  filledFlasks: number;
  emptyFlasks: number;
  flasksPerRow: number;
};

export type GameConfig = {
  maxPoints: number;
  grid: GridConfig;
  flask: FlaskConfig;
  ball: BallConfig;
  levels: Record<string, string[][]>;
};

export type Position = {
  x: number;
  y: number;
};
