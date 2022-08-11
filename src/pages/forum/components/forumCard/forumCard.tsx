import { useNavigate } from 'react-router-dom';

import './forumCard.css';

import { Heading, SmallText } from '@/components';

const ForumCard = () => {
  const navigate = useNavigate();

  const onCardClick = () => navigate('/forum/1');

  return (
    <article className='forum-card' onClick={() => onCardClick()}>
      <div className='forum-card__left-part'>
        <Heading type='h2' size='m' align='start'>
          Заголовок раздела
        </Heading>
        <SmallText>Описание раздела в две строки в две строки в две строки в две строки в две строки</SmallText>
      </div>
      <div className='forum-card__right-part'>
        <SmallText>Тем: 42</SmallText>
        <SmallText>Ответов: 1024</SmallText>
      </div>
    </article>
  );
};

export default ForumCard;
