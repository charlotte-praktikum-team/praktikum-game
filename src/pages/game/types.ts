type FlaskConfig = {
  width: number;
  height: number;
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
  grid: GridConfig;
  flask: FlaskConfig;
  ball: BallConfig;
  levels: Record<string, string[][]>;
};
