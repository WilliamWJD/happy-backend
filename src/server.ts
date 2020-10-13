import 'dotenv/config';

import express from 'express';
import { createConnection } from 'typeorm';

const app = express();

createConnection();

app.listen(3333, () => {
  console.log('Servidor online');
});
