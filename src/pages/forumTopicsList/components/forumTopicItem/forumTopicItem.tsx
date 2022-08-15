import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { SmallText, Avatar } from '@/components';

import './forumTopicItem.css';
import { ForumTopicItemProps } from './types';

export const ForumTopicItem: React.FC<ForumTopicItemProps> = ({ topicItemData }) => {
  const navigate = useNavigate();
  const { sectionId } = useParams();

  return (
    <article className='forum-topic-item' onClick={() => navigate(`/forum/${sectionId}/${topicItemData.id}`)}>
      <h2 className='forum-topic-item__title'>{topicItemData.name}</h2>
      <div className='forum-topic-item__data'>
        <div className='forum-topic-item__data-left-part'>
          <SmallText>Ответов: {topicItemData.postsCount}</SmallText>
          <SmallText>Просмотров: {topicItemData.viewsCount}</SmallText>
        </div>
        <div className='forum-topic-item__data-right-part'>
          <Avatar size='s' src={topicItemData.avatar} />
          <div className='forum-topic-item__user'>
            <SmallText>{topicItemData.username}</SmallText>
            <SmallText classes='forum-topic-item__user-date'>{topicItemData.date}</SmallText>
          </div>
        </div>
      </div>
    </article>
  );
};
