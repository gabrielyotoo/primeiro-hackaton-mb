import { DatabaseError } from 'sequelize';
import Comment from '../models/Comment';

export default class CommentService {
  static async create(comment, userId, goalId) {
    let response = null;
    try {
      response = await Comment.create({ comment, userId, goalId })
    } catch (err) {
      throw new DatabaseError('Can not create a comment');
    }

    return response.toJSON();
  }

}