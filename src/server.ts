import path from 'path';
import express from 'express';
import compression from 'compression';

import { dbConnect } from './serverLogic/dbInit';
import router from './serverLogic/router';

const app = express();

app
  .use(compression())
  .use(express.json())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../assets')))
  .use(router);

const init = async () => {
  await dbConnect();
  return app;
};

export { init };
