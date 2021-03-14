import Comment from '../models/Comment';

export default class CommentService {
  static async create(comment, userId, goalId, link) {
    let response = null;
    try {
      response = await Comment.create({ comment, userId, goalId, link })
    } catch (err) {
      throw new Error('Can not create a comment');
    }

    return response.toJSON();
  }

}