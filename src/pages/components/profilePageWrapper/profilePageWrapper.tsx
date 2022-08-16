import { FC } from 'react';

import './profilePageWrapper.css';
import { ProfilePageWrapperProps } from './types';

export const ProfilePageWrapper: FC<ProfilePageWrapperProps> = ({ children }) => <div className='profile-page-wrapper'>{children}</div>;
