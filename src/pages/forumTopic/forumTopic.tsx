import { useState } from 'react';

import './forumTopic.css';

import ForumPageWrapper from '../components/forumPageWrapper/forumPageWrapper';
import { Button, Modal, Textarea, Heading, Input } from '@/components';
import ForumBackLink from '../components/forumBackLink/forumBackLink';
import ForumPost from './components/forumPost/forumPost';

const ForumTopic = () => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <ForumPageWrapper>
        <div className='forum-topic'>
          <div className='forum-topic__back-button'>
            <ForumBackLink title='Вернуться к разделам' />
          </div>
          <div className='forum-topic__header'>
            <Heading type='h2' size='l'>
              Название темы форума в одну строку
            </Heading>
          </div>
          <section className='forum-topic__posts'>
            <ForumPost />
            <ForumPost />
          </section>
          <div className='forum-topic__new-message-button'>
            <Button onClick={() => onToggleModal()}>Новое сообщение</Button>
          </div>
        </div>
      </ForumPageWrapper>
      <Modal isOpen={openModal} title='Новое сообщение' onClose={() => onToggleModal()}>
        <div className='forum-topic__modal'>
          <Textarea name='topicMessage' placeholder='Введите текст сообщения' onChange={() => {}} />
          <Button onClick={() => onToggleModal()}>Создать</Button>
        </div>
      </Modal>
    </>
  );
};

export default ForumTopic;
