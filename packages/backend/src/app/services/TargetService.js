import { DatabaseError } from 'sequelize';
import moment from 'moment'
import User from '../models/User';
import Target from '../models/Target';
import Goal from '../models/Goal';

export default class TargetService {
  static async create(userId, title, description, dueDate, goals) {
    let response = null

    const userExists = await User.findByPk(userId);

    if (!userExists)
      throw new DatabaseError('User not found');

    try {
      response = await Target.create({
        title,
        description,
        progress: 0,
        dueDate: moment(dueDate).hours(12).format(),
        userId,
      })
    } catch (err) {
      throw new DatabaseError(err);
    }

    const Goals = await Promise.all(goals.map(async (goal) => Goal.create({
      title: goal.title,
      description: goal.description,
      dueDate: moment(goal.dueDate).hours(12).format(),
      userId,
      targetId: response.id,
    })));

    response.dataValues.Goals = Goals;
    return response.toJSON();
  }

  static async getAll(userId) {
    let response
    try {
      response = await Target.findAll({
        attributes: ['id', 'title', 'description', 'progress', 'dueDate', 'userId'],
        where: { userId },
      })
    } catch (err) {
      throw new DatabaseError('Can not list all targets')
    }
    return response;
  }

  static async getById(targetId) {
    let response
    try {
      response = await Target.findByPk(targetId, {
        attributes: ['id', 'title', 'description', 'progress', 'dueDate', 'userId'],
        include: [
          {
            model: Goal,
            attributes: ['id', 'title', 'description', 'done', 'dueDate'],
          }
        ]
      })
    } catch (err) {
      throw new DatabaseError('Can not list target by id')
    }
    return response.toJSON();
  }
}