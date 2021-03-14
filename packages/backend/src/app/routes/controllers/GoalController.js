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
    return res.status(httpStatus.BAD_REQUEST).json(err)
  }
  return res.status(httpStatus.OK).json(response);
})

routes.get('/details', async (req, res) => {
  let response = null;
  const { id } = req.body;

  try {
    response = await GoalService.getById(id);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err);
  }

  return res.status(httpStatus.OK).json(response);
})

routes.get('/get_today', async (req, res) => {
  let response = null;
  const { id } = req.user;
  const { date } = req.body;

  try {
    response = await GoalService.getToday(id, date);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err);
  }

  return res.status(httpStatus.OK).json(response);
})

export default routes;
