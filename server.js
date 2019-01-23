const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const PORT = process.argv[2] || 8000;

app.use(express.json());

app.get('/scallion', (req, res) => {
  res.send('hello, scallion!');
})

app.get('/recipes', (req, res) => {
  res.send('request received');
  console.log(`get request to recipes`);
})
app.post('/recipes', (req, res) => {
  res.status(201);
  res.send(req.body);
  console.log(`${JSON.stringify(req.body)}`);
})
app.get('/recipes/:id', (req, res) => {
  res.send('request received');
  console.log(`get request to recipes/${req.params.id}`);
})
app.put('/recipes/:id', (req, res) => {
  res.send('request received');
  console.log(`put request to recipes/${req.params.id}`);
})
app.delete('/recipes/:id', (req, res) => {
  res.send('request received');
  console.log(`delete request to recrecipes/${req.params.id}ipes`);
})



app.listen(PORT, () => console.log(`we are listening for scallions on port ${PORT}`));