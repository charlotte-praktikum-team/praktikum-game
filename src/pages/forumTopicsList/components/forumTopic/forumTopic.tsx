import './forumTopic.css';

import { SmallText, Avatar } from '@/components';

const ForumTopic = () => {
  return (
    <article className='forum-topic'>
      <h2 className='forum-topic__title'>Тема форума в одну строку</h2>
      <div className='forum-topic-data'>
        <div className='forum-topic-data__left-part'>
          <SmallText>Ответов: 1024</SmallText>
          <SmallText>Просмотров: 2048</SmallText>
        </div>
        <div className='forum-topic-data__right-part'>
          <Avatar size='s' />
          <div className='forum-topic-user-data'>
            <SmallText>Username</SmallText>
            <SmallText classes='forum-topic-user-data__date'>01.01.2023</SmallText>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ForumTopic;
