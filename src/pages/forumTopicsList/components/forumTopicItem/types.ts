export type ForumTopicItemProps = {
  topicItemData: {
    id: number;
    name: string;
    viewsCount: number;
    postsCount: number;
    username: string;
    avatar: string | null;
    date: string;
  };
};
