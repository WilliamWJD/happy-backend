import 'dotenv/config';

import express from 'express';
import { createConnection } from 'typeorm';
import { resolve } from 'path';
import cors from 'cors';

import routes from './routes';
import errorHandler from './errors/handler';

createConnection();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333, () => {
  console.log('Servidor online');
});
