import { FC } from 'react';

import { ProfileListProps } from './types';
import './profileList.css';

export const ProfileList: FC<ProfileListProps> = ({ children }) => {
  return <div className='profile-list'>{children}</div>;
};
