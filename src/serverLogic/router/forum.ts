import { Router } from 'express';
import { forumController } from 'serverLogic/controllers/forum';

export function forumRoutes(router: Router) {
  router.get('/api/sections', forumController.getSectionsHandler);
  router.get('/api/topics', forumController.getTopicsHandler);
  router.get('/api/topics/:id', forumController.getTopicHandler);
  router.post('/api/topics', forumController.createTopicHandler);
  router.get('/api/comments', forumController.getCommentsHandler);
  router.post('/api/comments', forumController.createCommentHandler);
  router.post('/api/replies', forumController.createReplyHandler);
  router.patch('/api/comments/like', forumController.likeCommentHandler);
}
