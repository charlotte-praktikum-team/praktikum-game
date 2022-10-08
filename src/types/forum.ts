export type Section = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  topicsCount: string;
};

export type Topic = {
  id: number;
  title: string;
  login: string;
  section_id: number;
  userAvatar: string;
  commentsCount: string;
  createdAt?: string;
};

export type Comment = {
  id: number;
  text: string;
  login: string;
  userAvatar: string;
  createdAt: string;
  updatedAt: string;
  likes: number;
  replies: Array<Omit<Comment, 'replies'>>;
};
