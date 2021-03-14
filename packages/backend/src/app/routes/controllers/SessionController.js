import { Router } from 'express';
import httpStatus from 'http-status';
import SessionService from '../../services/SessionService';

const routes = new Router();

routes.post('/create', async (req, res) => {
  let response;
  const { email, password } = req.body;
  try {
    response = await SessionService.create(email, password);
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).json({ msg: err.message, stack: err.stack });
  }
  return res.status(httpStatus.OK).json(response);
});

export default routes;
