import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          field: 'id',
          defaultValue: Sequelize.UUIDV4,
        },
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        type: Sequelize.NUMBER,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Target)
    this.hasMany(models.Goal)
  }
}

export default User;
