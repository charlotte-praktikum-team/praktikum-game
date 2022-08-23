export type LevelOverviewProps = {
  number: number;
  disabled: boolean;
  points?: number | null;
  onClick: (number: number) => void;
};
