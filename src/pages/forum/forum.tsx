import { Children } from 'react';

import { ForumPageWrapper } from '../components/forumPageWrapper/forumPageWrapper';
import { ForumCard } from './components/forumCard/forumCard';

import './forum.css';
import { FORUMS_LIST } from './mock';

const Forum = () => (
  <ForumPageWrapper>
    <section className='forum-card-list'>{Children.toArray(FORUMS_LIST.map((listItem) => <ForumCard cardData={listItem} />))}</section>
  </ForumPageWrapper>
);

export default Forum;
