import React, { Children, useEffect } from 'react';

import { ForumPageWrapper } from '../components/forumPageWrapper/forumPageWrapper';
import { ForumCard } from './components/forumCard/forumCard';
import { Heading, PageMeta } from 'components';

import './forum.css';
import { useAppDispatch, useAppSelector } from 'store';
import { getSections } from 'store/forum/thunk';
import { selectIsLoading, selectSections } from 'store/forum/selectors';

const Forum = () => {
  const dispatch = useAppDispatch();

  const sections = useAppSelector(selectSections);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getSections());
  }, []);

  return (
    <ForumPageWrapper>
      <PageMeta title='Форум' />

      {isLoading &&
        <Heading type='h3' size='m'>
          Загрузка...
        </Heading>
      }

      <section className='forum-card-list'>
        {Children.toArray(sections.map((listItem) => <ForumCard cardData={listItem} />))}
      </section>
    </ForumPageWrapper>
  );
};

export default Forum;
