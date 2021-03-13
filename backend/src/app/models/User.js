import Sequelize, { Model } from 'sequelize';
import uuid from 'uuid';

class User extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID, primaryKey: true, field: 'id', defaultValue: Sequelize.UUIDV4,
      },
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    }, { sequelize })
    return this;
  }

}

export default User;