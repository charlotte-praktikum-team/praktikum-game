import { LinkName, RouteData } from '../../types';

export type PageHeaderMainLinkProps = {
  routeData: RouteData;
  isActive: boolean;
  onItemClick: (linkName: LinkName) => void;
};
