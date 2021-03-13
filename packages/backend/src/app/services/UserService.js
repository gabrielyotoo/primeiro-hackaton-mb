import { DatabaseError } from 'sequelize';
import Goal from '../models/Goal';
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

  static async me(id) {
    let response = null;

    try {
      response = await User.findOne(
        {
          where: { id },
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: Goal,
              required: false,
            }
          ]
        }
      );
    } catch (err) {
      throw new DatabaseError('User not found');
    }
    return response.toJSON();
  }
}