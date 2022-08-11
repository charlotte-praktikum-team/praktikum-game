import { FC } from 'react';
import { useNavigate } from 'react-router';

import { ForumBackLinkProps } from '@/pages/components/forumBackLink/types';
import './forumBackLink.css';

import { Icon } from '@/components';

const ForumBackLink: FC<ForumBackLinkProps> = ({ title }) => {
  const navigate = useNavigate();

  const onGoBack = () => navigate(-1);

  return (
    <span className='forum-back-link' onClick={() => onGoBack()}>
      <Icon name='arrow-left' />
      {title}
    </span>
  );
};

export default ForumBackLink;
