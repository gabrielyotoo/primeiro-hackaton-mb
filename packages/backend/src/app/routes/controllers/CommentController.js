import { Router } from 'express';
import httpStatus from 'http-status';
import CommentService from '../../services/CommentService';
import authMiddleware from '../middlewares/auth';

const routes = new Router();
routes.use(authMiddleware);

routes.post('/create', async (req, res) => {
  let response;
  const { comment, goalId, link } = req.body;
  try {
    response = await CommentService.create(comment, req.user.id, goalId, link);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({ msg: err.message, stack: err.stack })
  }
  return res.status(httpStatus.OK).json(response);
});


export default routes;
