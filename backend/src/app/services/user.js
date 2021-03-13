import User from '../models/User';

export default class UserService {
  static async create(name, email, password) {
    let response = null;

    try {
      response = await User.create({ name, email, password })
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
    return response.toJSON();
  }
}