import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { UsedThemes } from './models/usedThemes';

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'newPassword123',
  database: 'ball-sort-db',
  dialect: 'postgres',
  models: [UsedThemes],
};

const sequelize = new Sequelize(sequelizeOptions);

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
