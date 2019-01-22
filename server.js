const http = require('http');
const fs = require('fs');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = pocess.env.PORT || process.argv[2] || 8000;

app.use(bodyParser.json());

app.get('/', /* cb */)

app.get('/recipes', (req, res) => {
  console.log(`get request to recipes`);
})
app.post('/recipes', (req, res) => {
  console.log(`post request to recipes`);
})
app.get('/recipes/:id', (req, res) => {
  console.log(`get request to recipes/${req.params.id}`);
})
app.put('/recipes/:id', (req, res) => {
  console.log(`put request to recipes/${req.params.id}`);
})
app.delete('/recipes/:id', (req, res) => {
  console.log(`delete request to recrecipes/${req.params.id}ipes`);
})



http.createServer(app).listen(PORT, () => console.log(`we are listening for requests on port ${port}`));