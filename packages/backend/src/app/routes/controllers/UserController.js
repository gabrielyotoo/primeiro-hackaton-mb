import { Router } from 'express';
import httpStatus from 'http-status';
import UserService from '../../services/UserService';
import authMiddleware from '../middlewares/auth';

const routes = new Router();

routes.post('/create', async (req, res) => {
  let response;
  const { name, email, password } = req.body;
  try {
    response = await UserService.create(name, email, password);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err)
  }
  return res.status(httpStatus.OK).json(response);
});

routes.use(authMiddleware);

routes.get('/me', async (req, res) => {
  let response;
  try {
    response = await UserService.me(req.user.id);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json(err);
  }
  return res.status(httpStatus.OK).json(response);
})

routes.put('/update', async (req, res) => res.status(httpStatus.OK).json({ msg: 'ok' }))

export default routes;
