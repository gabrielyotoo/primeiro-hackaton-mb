import Sequelize, { Model } from 'sequelize';

class Goal extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
          field: 'id',
          defaultValue: Sequelize.UUIDV4,
        },
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        done: Sequelize.BOOLEAN,
        dueDate: Sequelize.DATE(),
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.Target, { foreignKey: 'target_id', as: 'target' });
  }
}

export default Goal;
