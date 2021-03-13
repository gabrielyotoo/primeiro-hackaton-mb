import Sequelize, { Model } from 'sequelize';

class Target extends Model {
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
        progress: Sequelize.FLOAT,
        dueDate: Sequelize.DATE,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
    this.hasMany(models.Goal)
  }
}

export default Target;
