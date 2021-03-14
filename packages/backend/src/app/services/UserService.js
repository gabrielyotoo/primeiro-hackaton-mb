import { Op } from 'sequelize';
import moment from 'moment';
import Goal from '../models/Goal';
import User from '../models/User';

export default class UserService {
  static async create(name, email, password) {
    let response = null;

    const userExist = await User.findOne({ where: { email } });

    if (userExist)
      throw new Error('User already exists');


    try {
      const { id } = await User.create({ name, email, password });
      response = { id, name, email }
    } catch (err) {
      throw new Error('Can not create a user');
    }
    return response;
  }

  static async me(id) {
    let response = null;
    const date = new Date()

    try {
      response = await User.findOne(
        {
          where: { id },
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: Goal,
              required: false,
              where: {
                dueDate: {
                  [Op.lte]:
                    moment(date).endOf('day').format()
                  ,
                },
              },
            }
          ]
        }
      );
    } catch (err) {
      throw new Error('User not found');
    }
    return response.toJSON();
  }
}