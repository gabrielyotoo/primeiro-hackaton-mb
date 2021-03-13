import jwt from 'jsonwebtoken';
import { DatabaseError } from 'sequelize';
import User from '../models/User';
import authConfig from '../../config/auth';

export default class SessionService {
  static async create(email, password) {
    const userRequested = await User.findOne({ where: { email } });

    if (!userRequested) {
      throw new DatabaseError('User not found');
    }

    // eslint-disable-next-line security/detect-possible-timing-attacks
    if (userRequested.password !== password) {
      throw new DatabaseError('Passwords not match');
    }

    userRequested.dataValues.token = jwt.sign({ id: userRequested.id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    })

    return userRequested.toJSON();
  }
}