/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import { MongoClient } from 'mongodb';

import cors from 'cors';

import { json } from 'body-parser';

import { favoritoRouter } from './routes/favorito.router';

MongoClient.connect(
  'mongodb://angular-aula03-2022-1_devcontainer-db-1/',
).then(client => {
  console.log('Conectado ao MongoDB.');
  app.locals.db = client.db('app-favoritos');
}).catch(err => {
  console.error(err);
});

const app = express();

app.use(cors());  // Middleware de CORS.

app.use(json());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to api!' });
});

app.use('/api/favorito', favoritoRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
