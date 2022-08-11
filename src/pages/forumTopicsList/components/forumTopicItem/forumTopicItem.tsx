import { useNavigate } from 'react-router-dom';

import './forumTopicItem.css';

import { SmallText, Avatar } from '@/components';

const ForumTopicItem = () => {
  const navigate = useNavigate();

  const onTopicClick = () => navigate('/forum/1/1');

  return (
    <article className='forum-topic-item' onClick={() => onTopicClick()}>
      <h2 className='forum-topic-item__title'>Тема форума в одну строку</h2>
      <div className='forum-topic-item__data'>
        <div className='forum-topic-item__data-left-part'>
          <SmallText>Ответов: 1024</SmallText>
          <SmallText>Просмотров: 2048</SmallText>
        </div>
        <div className='forum-topic-item__data-right-part'>
          <Avatar size='s' />
          <div className='forum-topic-item__user'>
            <SmallText>Username</SmallText>
            <SmallText classes='forum-topic-item__user-date'>01.01.2023</SmallText>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ForumTopicItem;
