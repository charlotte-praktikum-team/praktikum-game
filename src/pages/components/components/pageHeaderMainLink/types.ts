import { LinkName } from '../../types';

export type PageHeaderMainLinkProps = {
  name: LinkName;
  isActive: boolean;
  onItemClick: (linkName: LinkName) => void;
};
