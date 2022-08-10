import React from 'react';

import './forumPageWrapper.css';
import { ForumPageWrapperProps } from './types';

const ForumPageWrapper: React.FC<ForumPageWrapperProps> = ({ children }) => <div className='forum-page-wrapper'>{children}</div>;

export default ForumPageWrapper;
