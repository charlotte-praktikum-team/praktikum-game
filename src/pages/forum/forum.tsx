import ForumPageWrapper from '../components/forumPageWrapper/forumPageWrapper';
import ForumSection from './components/forumSection/forumSection';

import './forum.css';

const Forum = () => {
  return (
    <ForumPageWrapper>
      <ul className='forum-section-list'>
        <ForumSection />
        <ForumSection />
        <ForumSection />
      </ul>
    </ForumPageWrapper>
  );
};

export default Forum;
