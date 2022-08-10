import './forumSection.css';

import { Heading, SmallText } from '@/components';

const ForumSection = () => {
  return (
    <li className='forum-section'>
      <article className='forum-section__wrapper'>
        <div className='forum-section__left-part'>
          <Heading type='h2' size='m' align='left'>
            Заголовок раздела
          </Heading>
          <SmallText>Описание раздела в две строки в две строки в две строки в две строки в две строки</SmallText>
        </div>
        <div className='forum-section__right-part'>
          <SmallText>Тем: 42</SmallText>
          <SmallText>Ответов: 1024</SmallText>
        </div>
      </article>
    </li>
  );
};

export default ForumSection;
