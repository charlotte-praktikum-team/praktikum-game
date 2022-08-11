import { useState } from 'react';

import './forumTopicsList.css';

import ForumPageWrapper from '../components/forumPageWrapper/forumPageWrapper';
import { Button, Modal, Input, Textarea } from '@/components';
import ForumBackLink from '../components/forumBackLink/forumBackLink';
import ForumTopicItem from './components/forumTopicItem/forumTopicItem';

const ForumTopicsList = () => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <ForumPageWrapper>
        <div className='forum-topics-list'>
          <div className='forum-topics-list__header'>
            <ForumBackLink title='Вернуться к разделам' />
            <Button design='secondary' onClick={() => onToggleModal()}>
              Новая тема
            </Button>
          </div>
          <section className='forum-topics-list__list'>
            <ForumTopicItem />
            <ForumTopicItem />
            <ForumTopicItem />
          </section>
        </div>
      </ForumPageWrapper>
      <Modal isOpen={openModal} title='Новая тема' onClose={() => onToggleModal()}>
        <div className='forum-topics-list__modal'>
          <Input name='topicName' design='rounded' placeholder='Название темы' onChange={() => {}} />
          <Textarea name='topicMessage' placeholder='Введите текст сообщения' onChange={() => {}} />
          <Button onClick={() => onToggleModal()}>Создать</Button>
        </div>
      </Modal>
    </>
  );
};

export default ForumTopicsList;
