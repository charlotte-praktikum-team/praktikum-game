type Name = 'arrow-left' | 'balls' | 'cross' | 'flask' | 'forum' | 'leaderboard' | 'logout' | 'plus' | 'refresh' | 'user';
type Size = 'l' | 'm' | 's';

export type IconProps = {
  name: Name;
  size?: Size;
};
