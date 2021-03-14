import Sequelize, { Model } from 'sequelize';

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUIDV4,
          primaryKey: true,
          field: 'id',
          defaultValue: Sequelize.UUIDV4,
        },
        comment: Sequelize.STRING,
        link: Sequelize.STRING,
        userId: Sequelize.UUIDV4,
        goalId: Sequelize.UUIDV4,
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User);
    this.belongsTo(models.Goal);
  }
}

export default Comment;
