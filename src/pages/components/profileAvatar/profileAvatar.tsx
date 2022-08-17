import { FC } from 'react';

import './profileAvatar.css';
import { ProfileAvatarProps } from './types';

export const ProfileAvatar: FC<ProfileAvatarProps> = ({ src, onClick }) => (
  <div className='profile-avatar' onClick={onClick}>
    {src && <img src={src} alt='Аватар' className='profile-avatar__image' />}
    <div className='profile-avatar__cover'>
      <span className='profile-avatar__cover-text'>Поменять аватар</span>
    </div>
  </div>
);
