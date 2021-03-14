import Sequelize, { Model } from 'sequelize';

class Target extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUIDV4,
          primaryKey: true,
          field: 'id',
          defaultValue: Sequelize.UUIDV4,
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        progress: Sequelize.FLOAT,
        dueDate: Sequelize.DATE,
        userId: Sequelize.UUIDV4,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User)
    this.hasMany(models.Goal)
  }
}

export default Target;
