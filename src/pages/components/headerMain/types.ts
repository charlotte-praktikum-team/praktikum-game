type LinkName = 'Игра' | 'Лидеры' | 'Форум' | 'Профиль';

export type IconName = 'user' | 'forum' | 'leaderboard' | 'balls';

export type RouteData = {
  path: string;
  title: LinkName;
  headerIcon: IconName;
};
