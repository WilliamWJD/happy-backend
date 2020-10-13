import 'dotenv/config';

import express from 'express';
import { createConnection } from 'typeorm';
import { resolve } from 'path';
import routes from './routes';

createConnection();

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('Servidor online');
});
