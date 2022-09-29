import React from 'react';

import { ForumPostProps } from './types';
import './forumPost.css';

import { SmallText, Avatar, Heading, P, Button } from 'components';

export const ForumPost: React.FC<ForumPostProps> = ({ postData }) => (
  <article className='forum-post'>
    <div className='forum-post__header'>
      <Avatar src={postData.avatar} />
      <div className='forum-post__user'>
        <Heading type='h3' size='m'>
          {postData.username}
        </Heading>
        <SmallText classes='forum-post__user-date'>{postData.date}</SmallText>
      </div>
    </div>
    <div className='forum-post__message'>
      <P>{postData.message}</P>
      <Button design='secondary' onClick={() => {}}>
        Ответить
      </Button>
    </div>
  </article>
);
