import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Conectado ao mongo');
    const app = express();
    const port = 3001;

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${3001}`);
    });
  })
  .catch(()=> console.log('Erro ao conectar no MongoDB'));

