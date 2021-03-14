import { Router } from 'express';
import httpStatus from 'http-status';
import TargetService from '../../services/TargetService';
import authMiddleware from '../middlewares/auth';

const routes = new Router();
routes.use(authMiddleware);

routes.post('/create', async (req, res) => {
  let response;
  const { title, description, dueDate, goals } = req.body;
  try {
    response = await TargetService.create(req.user.id, title, description, dueDate, goals);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err)
  }
  return res.status(httpStatus.OK).json(response);
});


routes.get('/get_all', async (req, res) => {
  let response;
  try {
    response = await TargetService.getAll(req.user.id);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err)
  }
  return res.status(httpStatus.OK).json(response);
});

routes.get('/details', async (req, res) => {
  let response;
  const { id } = req.body;
  try {
    response = await TargetService.getById(id);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err)
  }
  return res.status(httpStatus.OK).json(response);
});


export default routes;
