import { Comment, Section, Topic } from 'types';
import { localAxios } from 'utils/configureAxios';
import { CreateCommentRequest, CreateReplyRequest, CreateTopicRequest, CreateTopicResponse, LikeCommentRequest } from './types';

export const ForumService = {
  getSections: () => localAxios.get<unknown, Section[]>('/sections'),
  getTopics: (sectionId: string) => localAxios.get<unknown, Topic[]>(`/topics?sectionId=${sectionId}`),
  getTopic: (topicId: string) => localAxios.get<unknown, Topic>(`/topics/${topicId}`),
  createTopic: (data: CreateTopicRequest) => localAxios.post<CreateTopicRequest, CreateTopicResponse>('/topics', data),
  getComments: (topicId: string) => localAxios.get<unknown, Comment[]>(`/comments?topicId=${topicId}`),
  createComment: (data: CreateCommentRequest) => localAxios.post<CreateCommentRequest, unknown>('/comments', data),
  createReply: (data: CreateReplyRequest) => localAxios.post<CreateReplyRequest, unknown>('/replies', data),
  likeComment: (data: LikeCommentRequest) => localAxios.patch<LikeCommentRequest, unknown>('/comments/like', data),
};
