import { Topic } from 'types';

export type CreateTopicRequest = Omit<Topic, 'id' | 'section_id' | 'commentsCount'> & {
  sectionId: string;
  comment: string;
}

export type CreateTopicResponse = {
  id: number;
};

export type CreateCommentRequest = {
  topicId: string;
  login: string;
  userAvatar: string;
  comment: string;
};

export type CreateReplyRequest = {
  commentId: string;
  login: string;
  userAvatar: string;
  reply: string;
};

export type LikeCommentRequest = {
  commentId: string;
};
