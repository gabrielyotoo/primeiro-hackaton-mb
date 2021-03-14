import { DatabaseError, Op } from 'sequelize';
import moment from 'moment';
import Goal from '../models/Goal';
import Target from '../models/Target';
import Comment from '../models/Comment';
import User from '../models/User';

export default class GoalService {
  static async update(id, done) {
    let response = null
    let goalRequested = null;

    try {
      goalRequested = await Goal.findByPk(id)
    } catch (err) {
      throw new DatabaseError('Can not found goal requested');
    }

    goalRequested.done = done;

    try {
      response = await goalRequested.save();
    } catch (err) {
      throw new DatabaseError('Can not update goal');
    }

    const getAllGoals = await Goal.findAll({
      where: {
        targetId: goalRequested.targetId
      }
    })

    const allGoalsDone = getAllGoals.filter(goal => goal.done === true);

    const progress = allGoalsDone.length / getAllGoals.length;

    const targetRequest = await Target.findByPk(goalRequested.targetId);

    targetRequest.progress = progress;

    targetRequest.save();


    return response.toJSON();
  }

  static async getToday(userId, date) {
    let response
    try {
      response = await Goal.findAll({
        attributes: ['id', 'title', 'description', 'done', 'dueDate'],
        where: {
          userId,
          dueDate: {
            [Op.between]: [
              moment(date).startOf('day').format(),
              moment(date).endOf('day').format(),
            ],
          },
        },
        include: [
          {
            model: Target,
            attributes: ['title']
          }
        ]
      })
    } catch (err) {
      throw new DatabaseError(err)
    }
    return response;
  }

  static async getById(goalId) {
    let response
    try {
      response = await Goal.findByPk(goalId, {
        attributes: ['id', 'title', 'description', 'done', 'dueDate'],
        include: [
          {
            model: Target,
            attributes: ['title']
          },
          {
            model: Comment,
            attributes: ['id', 'comment'],
            include: [
              {
                model: User,
                attributes: ['name']
              }
            ]
          }
        ]
      })
    } catch (err) {
      throw new DatabaseError('Can not list goal by id')
    }
    return response.toJSON();
  }
}