import React, { useState, Children, useEffect } from 'react';

import { ForumPageWrapper } from '../components/forumPageWrapper/forumPageWrapper';
import { Button, Heading, PageMeta } from 'components';
import { ForumBackLink } from '../components/forumBackLink/forumBackLink';
import { ForumPost } from './components/forumPost/forumPost';

import './forumTopic.css';
import { createComment, getComments, getTopic } from 'store/forum/thunk';
import { useParams } from 'react-router';
import { useAppDispatch, useAppSelector } from 'store';
import { selectComments, selectSelectedTopic } from 'store/forum/selectors';
import { MessageModal } from './components/messageModal/messageModal';

const ForumTopic = () => {
  const dispatch = useAppDispatch();
  const { topicId } = useParams<{ topicId: string }>();

  const [openModal, setOpenModal] = useState(false);

  const comments = useAppSelector(selectComments);
  const selectedTopic = useAppSelector(selectSelectedTopic);

  useEffect(() => {
    if (topicId) {
      dispatch(getComments(topicId));
      dispatch(getTopic(topicId));
    }
  }, []);

  const handleSend = (message: string) => {
    dispatch(createComment(message));
  };

  const toggleModal = () => setOpenModal(!openModal);

  return (
    <>
      <ForumPageWrapper>
        <PageMeta title='Тема форума' />

        <div className='forum-topic'>
          <div className='forum-topic__back-button'>
            <ForumBackLink title='Вернуться к разделам' />
          </div>

          <div className='forum-topic__header'>
            <Heading type='h2' size='l'>
              {selectedTopic?.title}
            </Heading>
          </div>

          <section className='forum-topic__posts'>
            {Children.toArray(comments.map((comment) => <ForumPost postData={comment} />))}
          </section>

          <div className='forum-topic__new-message-button'>
            <Button onClick={toggleModal}>Новое сообщение</Button>
          </div>
        </div>
      </ForumPageWrapper>

      <MessageModal
        isOpen={openModal}
        onClose={toggleModal}
        onSend={handleSend}
      />
    </>
  );
};

export default ForumTopic;
