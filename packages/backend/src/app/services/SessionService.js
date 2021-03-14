import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

export default class SessionService {
  static async create(email, password) {
    let response = null;
    const userRequested = await User.findOne({ where: { email } });

    if (!userRequested) {
      throw new Error('User not found');
    }

    // eslint-disable-next-line security/detect-possible-timing-attacks
    if (!(await userRequested.checkPassword(password))) {
      throw new Error('Passwords not match');
    }
    userRequested.toJSON();

    response = { id: userRequested.id, name: userRequested.name, email: userRequested.email }

    response.token = jwt.sign({ id: userRequested.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    })
    return response;
  }
}