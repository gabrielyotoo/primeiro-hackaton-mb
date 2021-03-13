/* eslint-disable import/no-commonjs */
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  // database: 'hackatonDataBase',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
}