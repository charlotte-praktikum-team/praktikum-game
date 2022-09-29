import React, { useState, Children } from 'react';

import { ForumPageWrapper } from '../components/forumPageWrapper/forumPageWrapper';
import { Button, Modal, Input, Textarea, PageMeta } from 'components';
import { ForumBackLink } from '../components/forumBackLink/forumBackLink';
import { ForumTopicItem } from './components/forumTopicItem/forumTopicItem';

import './forumTopicsList.css';
import { TOPICS_LIST } from './mock';

const ForumTopicsList = () => {
  const [openModal, setOpenModal] = useState(false);

  const onToggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <ForumPageWrapper>
        <PageMeta title='Список тем' />
        <div className='forum-topics-list'>
          <div className='forum-topics-list__header'>
            <ForumBackLink title='Вернуться к разделам' />
            <Button design='secondary' onClick={onToggleModal}>
              Новая тема
            </Button>
          </div>
          <section className='forum-topics-list__list'>
            {Children.toArray(TOPICS_LIST.map((topic) => <ForumTopicItem topicItemData={topic} />))}
          </section>
        </div>
      </ForumPageWrapper>
      <Modal isOpen={openModal} title='Новая тема' onClose={onToggleModal}>
        <div className='forum-topics-list__modal'>
          <Input name='topicName' design='rounded' placeholder='Название темы' onChange={() => {}} />
          <Textarea name='topicMessage' placeholder='Введите текст сообщения' onChange={() => {}} />
          <Button onClick={onToggleModal}>Создать</Button>
        </div>
      </Modal>
    </>
  );
};

export default ForumTopicsList;
