import React, { useState, Children, useEffect } from 'react';

import { ForumPageWrapper } from '../components/forumPageWrapper/forumPageWrapper';
import { Button, Modal, Input, Textarea, PageMeta } from 'components';
import { ForumBackLink } from '../components/forumBackLink/forumBackLink';
import { ForumTopicItem } from './components/forumTopicItem/forumTopicItem';

import './forumTopicsList.css';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from 'store';
import { selectTopics } from 'store/forum/selectors';
import { createTopic, getTopics } from 'store/forum/thunk';

const ForumTopicsList = () => {
  const dispatch = useAppDispatch();

  const { sectionId } = useParams<{ sectionId: string }>();
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const topics = useAppSelector(selectTopics);

  useEffect(() => {
    if (sectionId) {
      dispatch(getTopics(sectionId));
    }
  }, []);

  const onToggleModal = () => {
    setOpenModal(!openModal);
    setTitle('');
    setComment('');
  };

  const handleCreateTopic = () => {
    dispatch(createTopic({ sectionId: sectionId || '', title, comment }));
    onToggleModal();
  };

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
            {Children.toArray(topics.map((topic) => <ForumTopicItem topicItemData={topic} />))}
          </section>
        </div>
      </ForumPageWrapper>

      <Modal isOpen={openModal} title='Новая тема' onClose={onToggleModal}>
        <div className='forum-topics-list__modal'>
          <Input
            name='title'
            design='rounded'
            value={title}
            placeholder='Название темы'
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            name='comment'
            value={comment}
            placeholder='Введите текст сообщения'
            onChange={(e) => setComment(e.target.value)}
          />

          <Button onClick={handleCreateTopic}>Создать</Button>
        </div>
      </Modal>
    </>
  );
};

export default ForumTopicsList;
