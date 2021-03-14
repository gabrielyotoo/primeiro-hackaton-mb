import { Router } from 'express';
import httpStatus from 'http-status';
import CommentService from '../../services/CommentService';
import authMiddleware from '../middlewares/auth';

const routes = new Router();
routes.use(authMiddleware);

routes.post('/create', async (req, res) => {
  let response;
  const { comment, goalId } = req.body;
  try {
    response = await CommentService.create(comment, req.user.id, goalId);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err)
  }
  return res.status(httpStatus.OK).json(response);
});


export default routes;
