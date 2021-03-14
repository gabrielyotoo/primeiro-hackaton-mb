import Sequelize, { Model } from 'sequelize';

class Goal extends Model {
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
        done: Sequelize.BOOLEAN,
        dueDate: Sequelize.DATE(),
        userId: Sequelize.UUIDV4,
        targetId: Sequelize.UUIDV4,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Target);
    this.hasMany(models.Comment)
  }
}

export default Goal;
