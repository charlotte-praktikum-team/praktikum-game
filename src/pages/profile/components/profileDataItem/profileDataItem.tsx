import { FC } from 'react';

import { ProfileListItem } from '@/pages/components/profileListItem/profileListItem';

import './profileDataItem.css';
import { ProfileDataItemProps } from './types';

export const ProfileDataItem: FC<ProfileDataItemProps> = ({ title, text }) => {
  return (
    <ProfileListItem>
      <div className='profile-data-item'>
        <span>{title}</span>
        <span className='profile-data-item__info'>{text}</span>
      </div>
    </ProfileListItem>
  );
};
