import { FC } from 'react';

import './forumPageWrapper.css';
import { ForumPageWrapperProps } from './types';

const ForumPageWrapper: FC<ForumPageWrapperProps> = ({ children }) => <div className='forum-page-wrapper'>{children}</div>;

export default ForumPageWrapper;
