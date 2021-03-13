import { DatabaseError } from 'sequelize';
import User from '../models/User';

export default class UserService {
  static async create(name, email, password) {
    let response = null;

    const userExist = await User.findOne({ where: { email } });

    if (userExist)
      throw new DatabaseError('User already exists');


    try {
      response = await User.create({ name, email, password });
    } catch (err) {
      throw new DatabaseError('Can not create a user');
    }

    return response.toJSON();
  }
}