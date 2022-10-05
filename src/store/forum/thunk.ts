import { createAsyncThunk } from '@reduxjs/toolkit';
import { ForumService } from 'services/forum';
import { AppState } from 'store/types';

export const getSections = createAsyncThunk(
  'forum/getSections',
  () => ForumService.getSections()
);

export const getTopics = createAsyncThunk(
  'forum/getTopics',
  (sectionId: string) => ForumService.getTopics(sectionId)
);

export const createTopic = createAsyncThunk(
  'forum/createTopic',
  async ({ sectionId, title, comment }: { sectionId: string, title: string, comment: string }, thunkApi) => {
    const { user: { user } } = thunkApi.getState() as AppState;

    await ForumService.createTopic({
      sectionId,
      login: user.login,
      userAvatar: user.avatar || '',
      title,
      comment
    });

    thunkApi.dispatch(getTopics(sectionId));
  }
);

export const getComments = createAsyncThunk(
  'forum/getComments',
  (topicId: string) => ForumService.getComments(topicId)
);

export const getTopic = createAsyncThunk(
  'forum/getTopic',
  (topicId: string) => ForumService.getTopic(topicId)
);

export const createComment = createAsyncThunk(
  'forum/createComment',
  async (comment: string, thunkApi) => {
    const { user: { user }, forum: { selectedTopic } } = thunkApi.getState() as AppState;
    const topicId = selectedTopic?.id.toString() || '';

    await ForumService.createComment({
      topicId,
      login: user.login,
      userAvatar: user.avatar || '',
      comment
    });

    thunkApi.dispatch(getComments(topicId));
  }
);

export const createReply = createAsyncThunk(
  'forum/createReply',
  async ({ reply, commentId }: { reply: string, commentId: string }, thunkApi) => {
    const { user: { user }, forum: { selectedTopic } } = thunkApi.getState() as AppState;
    const topicId = selectedTopic?.id.toString() || '';

    await ForumService.createReply({
      commentId,
      login: user.login,
      userAvatar: user.avatar || '',
      reply
    });

    thunkApi.dispatch(getComments(topicId));
  }
);

export const likeComment = createAsyncThunk(
  'forum/likeComment',
  async (commentId: string, thunkApi) => {
    const { forum: { selectedTopic } } = thunkApi.getState() as AppState;

    await ForumService.likeComment({
      commentId
    });

    thunkApi.dispatch(getComments(selectedTopic?.id.toString() || ''));
  }
);
