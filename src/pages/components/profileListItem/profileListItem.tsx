import React, { FC } from 'react';

import { ProfileListItemProps } from './types';
import './profileListItem.css';

export const ProfileListItem: FC<ProfileListItemProps> = ({ children }) => <div className='profile-list-item'>{children}</div>;
