import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import cors from 'cors';

import { router } from './router';
// mongodb://localhost:27017
//
mongoose.connect('mongodb+srv://fredbneves95:E5eqp3CpFQrMLjN0@waiter-app-db.i7fkcrz.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    const app = express();
    const port = process.env.PORT || 3001;

    app.use(express.json());
    app.use(cors());
    app.use(router);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });

  })
  .catch((error)=> {
    console.log({ error });
    console.log('Erro ao conectar no MongoDB');}
  );
