import React, { Children, useState } from 'react';

import { ForumPostProps } from './types';
import './forumPost.css';

import { SmallText, Avatar, Heading, P, Button, Icon } from 'components';
import { formatDate } from 'utils/formatDate';
import { useAppDispatch } from 'store';
import { createReply, likeComment } from 'store/forum/thunk';
import { MessageModal } from '../messageModal/messageModal';

export const ForumPost: React.FC<ForumPostProps> = ({ postData }) => {
  const dispatch = useAppDispatch();

  const [openModal, setOpenModal] = useState(false);

  const handleSend = (reply: string) => {
    dispatch(createReply({ reply, commentId: postData.id.toString() }));
  };

  const toggleModal = () => setOpenModal(!openModal);

  const handleLike = () => {
    dispatch(likeComment(postData.id.toString()));
  };

  return (
    <>
      <article className='forum-post'>
        <div className='forum-post__header'>
          <Avatar src={postData.userAvatar} />

          <div className='forum-post__user'>
            <Heading type='h3' size='m'>
              {postData.login}
            </Heading>

            <SmallText classes='forum-post__user-date'>{formatDate(postData.createdAt)}</SmallText>
          </div>
        </div>

        <div className='forum-post__message'>
          <P>{postData.text}</P>
        </div>

        <div className='forum-post__replies'>
          {Children.toArray(postData.replies.map(reply => (
            <div className='forum-post__reply'>
              <div className='forum-post__header'>
                <Avatar src={reply.userAvatar} />

                <div className='forum-post__user'>
                  <Heading type='h3' size='m'>
                    {reply.login}
                  </Heading>

                  <SmallText classes='forum-post__user-date'>{formatDate(reply.createdAt)}</SmallText>
                </div>
              </div>

              <div className='forum-post__message'>
                <P>{reply.text}</P>
              </div>
            </div>
          )))}
        </div>

        <div className='forum-post__footer'>
          <Button design='secondary' onClick={toggleModal}>
            Ответить
          </Button>

          <div className='forum-post__reactions'>
            <div className='forum-post__reaction'>
              <button className='forum-post__thumb-up' onClick={handleLike}>
                <Icon name='thumbUp' />
              </button>

              {postData.likes}
            </div>
          </div>
        </div>
      </article>

      <MessageModal
        isOpen={openModal}
        onClose={toggleModal}
        onSend={handleSend}
      />
    </>
  );
};
