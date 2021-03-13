import { Router } from 'express';
import httpStatus from 'http-status';
import UserModel from '../../models/User';
import UserService from '../../services/user';

const routes = new Router();

routes.post('/create', async (req, res) => {
  let response;
  const { name, email, password } = req.body;
  try {
    response = await UserService.create(name, email, password);
  } catch (err) {
    throw new Error('failed user create');
  }
  return res.status(httpStatus.OK).json(response);
});

export default routes;
