import { FC } from 'react';

import './forumPageWrapper.css';
import { ForumPageWrapperProps } from './types';

export const ForumPageWrapper: FC<ForumPageWrapperProps> = ({ children }) => <div className='forum-page-wrapper'>{children}</div>;
