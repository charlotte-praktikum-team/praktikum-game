import './forumPost.css';

import { SmallText, Avatar, Heading, P, Button } from '@/components';

const ForumPost = () => (
  <article className='forum-post'>
    <div className='forum-post__header'>
      <Avatar />
      <div className='forum-post__user'>
        <Heading type='h3' size='m'>
          Username
        </Heading>
        <SmallText classes='forum-post__user-date'>01.01.2023</SmallText>
      </div>
    </div>
    <div className='forum-post__message'>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum.
      </P>
      <Button design='secondary' onClick={() => {}}>
        Ответить
      </Button>
    </div>
  </article>
);

export default ForumPost;
