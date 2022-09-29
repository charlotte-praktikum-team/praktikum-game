import React, { FC } from 'react';
import { useNavigate } from 'react-router';

import { Icon } from 'components';

import { ForumBackLinkProps } from 'pages/components/forumBackLink/types';
import './forumBackLink.css';

export const ForumBackLink: FC<ForumBackLinkProps> = ({ title }) => {
  const navigate = useNavigate();

  return (
    <span className='forum-back-link' onClick={() => navigate(-1)}>
      <Icon name='arrow-left' />
      {title}
    </span>
  );
};
