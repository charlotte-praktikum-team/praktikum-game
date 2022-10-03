import { Request, Response } from 'express';
import { Sequelize } from 'sequelize-typescript';
import { Comments } from 'serverLogic/models/forum/comments';
import { Replies } from 'serverLogic/models/forum/replies';
import { Sections } from 'serverLogic/models/forum/sections';
import { Topics } from 'serverLogic/models/forum/topics';

export const forumController = {
  getSectionsHandler: async (_: Request, res: Response) => {
    try {
      const sections = await Sections.findAll({
        attributes: {
          include: [
            [Sequelize.fn('COUNT', Sequelize.col('topics')), 'topicsCount'],
          ]
        },
        include: [
          { model: Topics, attributes: [] }
        ],
        group: ['Sections.id']
      });

      res.json({ sections });
    } catch {
      res.status(500).send();
    }
  },
  getTopicsHandler: async (req: Request, res: Response) => {
    const { sectionId } = req.query;

    try {
      const topics = await Topics.findAll({
        where: {
          section_id: Number(sectionId)
        },
        attributes: {
          include: [
            [Sequelize.fn('COUNT', Sequelize.col('comments')), 'commentsCount'],
          ]
        },
        include: [
          { model: Comments, attributes: [] }
        ],
        group: ['Topics.id']
      });

      res.json({ topics });
    } catch {
      res.status(500).send();
    }
  },
  createTopicHandler: async (req: Request, res: Response) => {
    const { sectionId, login, title, userAvatar, comment } = req.body;

    try {
      const topic = await Topics.create({
        login,
        section_id: Number(sectionId),
        title,
        userAvatar
      });

      const topicId = topic.getDataValue('id');

      await Comments.create({
        login,
        text: comment,
        topic_id: topicId,
        userAvatar
      });

      res.json({ id: topicId });
    } catch {
      res.status(500).send();
    }
  },
  getCommentsHandler: async (req: Request, res: Response) => {
    const { topicId } = req.query;

    try {
      const comments = await Comments.findAll({
        where: {
          topic_id: Number(topicId)
        },
        include: Replies
      });

      res.json({ comments });
    } catch {
      res.status(500).send();
    }
  },
  createCommentHandler: async (req: Request, res: Response) => {
    const { topicId, login, userAvatar, comment } = req.body;

    try {
      const createdComment = await Comments.create({
        login,
        text: comment,
        topic_id: Number(topicId),
        userAvatar
      });

      res.json({ id: createdComment.getDataValue('id') });
    } catch {
      res.status(500).send();
    }
  },
  createReplyHandler: async (req: Request, res: Response) => {
    const { commentId, login, userAvatar, reply } = req.body;

    try {
      const createdReply = await Replies.create({
        login,
        text: reply,
        comment_id: Number(commentId),
        userAvatar
      });

      res.json({ id: createdReply.getDataValue('id') });
    } catch {
      res.status(500).send();
    }
  },
  likeCommentHandler: async (req: Request, res: Response) => {
    const { commentId } = req.body;

    try {
      await Comments.increment('likes', { where: { id: Number(commentId) } });
      res.status(200).send();
    } catch {
      res.status(500).send();
    }
  },
};
