export type IconName =
  | 'arrow-left'
  | 'balls'
  | 'cross'
  | 'flask'
  | 'forum'
  | 'leaderboard'
  | 'logout'
  | 'plus'
  | 'refresh'
  | 'user'
  | 'yandex'
  | 'thumbUp'
  | 'moon'
  | 'sun';
type Size = 'l' | 'm' | 's';

export type IconProps = {
  name: IconName;
  size?: Size;
};
