import { Comment, Section, Topic } from 'types';

export type ForumState = {
  sections: Section[];
  topics: Topic[];
  selectedTopic?: Topic;
  comments: Comment[];
  isLoading: boolean;
  errorMessage: string;
};
