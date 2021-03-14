import { Router } from 'express';
import httpStatus from 'http-status';
import GoalService from '../../services/GoalService';
import authMiddleware from '../middlewares/auth';

const routes = new Router();
routes.use(authMiddleware);

routes.put('/update/:id', async (req, res) => {
  let response = null;
  const { id } = req.params;
  const { done } = req.body;

  try {
    response = await GoalService.update(id, done);
  } catch (err) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ msg: err.message, stack: err.stack });
  }
  return res.status(httpStatus.OK).json(response);
});

routes.get('/details/:id', async (req, res) => {
  let response = null;
  const { id } = req.params;

  try {
    response = await GoalService.getById(id);
  } catch (err) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ msg: err.message, stack: err.stack });
  }

  return res.status(httpStatus.OK).json(response);
});

routes.get('/get_today/', async (req, res) => {
  let response = null;
  const { id } = req.user;
  let { date } = req.query;
  if (!date) {
    date = new Date();
  }

  try {
    response = await GoalService.getToday(id, date);
  } catch (err) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ msg: err.message, stack: err.stack });
  }

  return res.status(httpStatus.OK).json(response);
});

export default routes;
