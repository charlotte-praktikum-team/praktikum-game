export type Level = {
  number: number;
  isComplete: boolean;
  points: number | null;
};

export type DashboardState = {
  isLoading: boolean;
  errorMessage: string;
  levels: Level[];
};
