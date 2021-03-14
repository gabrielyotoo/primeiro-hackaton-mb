import httpStatus from 'http-status';
import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import authConfig from '../../../config/auth';

export default async (req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth)
    return res
      .status(httpStatus.UNAUTHORIZED)
      .json({ msg: 'JWT token not found' });

  const [, token] = auth.split(' ');

  try {
    const data = await promisify(jwt.verify)(token, authConfig.secret);
    req.user = {};
    req.user.id = data.id;
    return next();
  } catch (err) {
    return res.status(httpStatus.UNAUTHORIZED).json({ msg: 'Invalid Token' });
  }
};
