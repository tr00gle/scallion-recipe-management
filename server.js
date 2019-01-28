
const express = require('express');
const { onError, onListen, onRequest } = require('./utils');
const {
  readAll,
  send,
  getById,
  addOne,
  confirmCreation,
  deleteRecipe,
  confirmDeletion,
  saveAll,
} = require('./models/recipe');

const app = express();
const PORT = process.argv[2] || 8000;

app.use(express.json());

app.get('/', onRequest, (req, res) => {
  res.send('hello, scallion!');
});
app.get('/recipes', onRequest, readAll, send);
app.post('/recipes', readAll, addOne, saveAll, confirmCreation);
app.get('/recipes/:id', readAll, getById, send);
app.put('/recipes/:id', (req, res) => {
  res.send(`${req.method} request recieved`);
});
app.delete('/recipes/:id', readAll, deleteRecipe, saveAll, confirmDeletion);

app.use(onError(app));
app.listen(onListen(PORT));
