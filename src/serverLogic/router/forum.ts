import { Router } from 'express';

import { forumController } from 'serverLogic/controllers/forum';
import authMiddleware from '../authMiddleware';

export function forumRoutes(router: Router) {
  router.get('/api/sections', [authMiddleware], forumController.getSectionsHandler);
  router.get('/api/topics', [authMiddleware], forumController.getTopicsHandler);
  router.post('/api/topics', [authMiddleware], forumController.createTopicHandler);
  router.get('/api/comments', [authMiddleware], forumController.getCommentsHandler);
  router.post('/api/comments', [authMiddleware], forumController.createCommentHandler);
  router.post('/api/replies', [authMiddleware], forumController.createReplyHandler);
  router.patch('/api/comments/like', [authMiddleware], forumController.likeCommentHandler);
}
