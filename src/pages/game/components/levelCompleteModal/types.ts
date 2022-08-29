export type LevelCompleteModalProps = {
  timer: string;
  points?: number;
  isOpen: boolean;
  isLastLevel: boolean;
  onRefresh: () => void;
  onBack: () => void;
  onNext: () => void;
};
