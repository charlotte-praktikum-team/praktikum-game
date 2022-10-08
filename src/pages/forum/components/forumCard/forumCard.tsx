import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading, SmallText } from 'components';
import { ForumCardProps } from './types';

import './forumCard.css';

export const ForumCard: React.FC<ForumCardProps> = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <article className='forum-card' onClick={() => navigate(`/forum/${cardData.id}`)}>
      <div className='forum-card__left-part'>
        <Heading type='h2' size='m' align='start'>
          {cardData.title}
        </Heading>
        
        <SmallText>{cardData.description}</SmallText>
      </div>

      <div className='forum-card__right-part'>
        <SmallText>Тем: {cardData.topicsCount}</SmallText>
      </div>
    </article>
  );
};
