import React, { FC } from 'react';

import { ProfileListProps } from './types';
import './profileList.css';

export const ProfileList: FC<ProfileListProps> = ({ children }) => <div className='profile-list'>{children}</div>;
