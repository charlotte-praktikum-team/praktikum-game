import ForumPageWrapper from '../components/forumPageWrapper/forumPageWrapper';
import ForumCard from './components/forumCard/forumCard';

import './forum.css';

const Forum = () => {
  return (
    <ForumPageWrapper>
      <section className='forum-card-list'>
        <ForumCard />
        <ForumCard />
        <ForumCard />
      </section>
    </ForumPageWrapper>
  );
};

export default Forum;
