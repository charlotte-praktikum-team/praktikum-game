export type IconName = 'arrow-left' | 'balls' | 'cross' | 'flask' | 'forum' | 'leaderboard' | 'logout' | 'plus' | 'refresh' | 'user';
type Size = 'large' | 'medium' | 'small';

export type IconProps = {
  name: IconName;
  size?: Size;
};
