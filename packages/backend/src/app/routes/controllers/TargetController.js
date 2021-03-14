import { Router } from 'express';
import httpStatus from 'http-status';
import TargetService from '../../services/TargetService';
import authMiddleware from '../middlewares/auth';

const routes = new Router();
routes.use(authMiddleware);

routes.post('/', async (req, res) => {
  let response;
  const { title, description, dueDate, goals } = req.body;
  try {
    response = await TargetService.create(
      req.user.id,
      title,
      description,
      dueDate,
      goals
    );
  } catch (err) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ msg: err.message, stack: err.stack });
  }
  return res.status(httpStatus.OK).json(response);
});

routes.get('/', async (req, res) => {
  let response;
  try {
    response = await TargetService.getAll(req.user.id);
  } catch (err) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ msg: err.message, stack: err.stack });
  }
  return res.status(httpStatus.OK).json(response);
});

routes.get('/details/:id', async (req, res) => {
  let response;
  const { id } = req.params;
  try {
    response = await TargetService.getById(id);
  } catch (err) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ msg: err.message, stack: err.stack });
  }
  return res.status(httpStatus.OK).json(response);
});

export default routes;
