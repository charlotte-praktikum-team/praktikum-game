export type RouteData = {
  path: string;
  title: string;
  headerIcon: string | null;
};

export type RouterType = {
  landing: RouteData;
  login: RouteData;
  register: RouteData;
  profile: RouteData;
  forum: RouteData;
  leaderboard: RouteData;
  game: RouteData;
  notFound: RouteData;
  error: RouteData;
};
