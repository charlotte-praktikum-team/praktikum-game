import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Comments } from './models/forum/comments';
import { Replies } from './models/forum/replies';
import { Sections } from './models/forum/sections';
import { Topics } from './models/forum/topics';
import { UsedThemes } from './models/usedThemes';

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'newPassword123',
  database: 'ball-sort-db',
  dialect: 'postgres',
  models: [
    UsedThemes,
    Sections,
    Topics,
    Comments,
    Replies
  ],
};

const sequelize = new Sequelize(sequelizeOptions);

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    const section = await Sections.findOne({ where: { id: 1 } });

    if (!section) {
      await Sections.create({
        title: 'Главный раздел',
        description: 'Раздел для общения на любые темы'
      });
    }

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
