import path from 'path';
import express from 'express';
import compression from 'compression';
import fs from 'fs';
import https from 'https';

import { dbConnect } from './serverLogic/dbInit';
import router from './serverLogic/router';

const key = fs.readFileSync(path.resolve(__dirname, '../key.pem'));
const cert = fs.readFileSync(path.resolve(__dirname, '../cert.pem'));

const app = express();

app
  .use(compression())
  .use(express.json())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../assets')))
  .use(router);

const server = https.createServer({ key, cert }, app);

const init = async () => {
  await dbConnect();
  return server;
};

export { init };
