import jwt from 'jsonwebtoken';
import { DatabaseError } from 'sequelize';
import User from '../models/User';
import authConfig from '../../config/auth';

export default class SessionService {
  static async create(email, password) {
    let response = null;
    const userRequested = await User.findOne({ where: { email } });

    if (!userRequested) {
      throw new DatabaseError('User not found');
    }

    // eslint-disable-next-line security/detect-possible-timing-attacks
    if (!(await userRequested.checkPassword(password))) {
      throw new DatabaseError('Passwords not match');
    }
    userRequested.toJSON();

    response = { id: userRequested.id, name: userRequested.name, email: userRequested.email }

    response.token = jwt.sign({ id: userRequested.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    })
    return response;
  }
}