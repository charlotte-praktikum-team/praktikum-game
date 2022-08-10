export type RouteData = {
  path: string;
  title: string;
  headerIcon: string | null;
};

export type RouterType = Record<string, RouteData>;
