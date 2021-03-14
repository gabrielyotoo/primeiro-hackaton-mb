import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

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
        password: Sequelize.VIRTUAL,
        passwordHash: Sequelize.STRING,
      },
      { sequelize }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.passwordHash = await bcrypt.hash(user.password, 5);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.passwordHash)
  }

  static associate(models) {
    this.hasMany(models.Target)
    this.hasMany(models.Goal)
    this.hasMany(models.Comment)
  }
}

export default User;
