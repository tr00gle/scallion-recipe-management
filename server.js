
const express = require('express');
const bodyParser = require('body-parser');
const { readRecipes, 
        getRecipe, 
        addRecipe, 
        updateRecipe,
        deleteRecipe,
        saveRecipes, 
      } = require('./models/recipe');

const app = express();
const PORT = process.argv[2] || 8000;

app.use(bodyParser.json());

app.get('/scallion', (req, res) => {
  res.send('hello, scallion!');
})

app.get('/recipes', readRecipes, (req, res, next) => {
  res.status(200);
  res.send(res.locals.recipes);
})
app.post('/recipes', readRecipes, addRecipe, saveRecipes, (req, res) => {
  res.status(201);
  res.send(`saved ${res.locals.newRecipeName}!!`);
})
app.get('/recipes/:id', readRecipes, getRecipe, (req, res) => {
  res.send(res.locals.requested);
  console.log(`get request to recipes/${req.params.id}`);
})
app.put('/recipes/:id', (req, res) => {
  res.send('request received');
  console.log(`put request to recipes/${req.params.id}`);
})
app.delete('/recipes/:id', readRecipes, deleteRecipe, saveRecipes, (req, res) => {
  res.send(`deleted ${res.locals.deleted}`);
  console.log(`delete request to recipes/${req.params.id}ipes`);
})



app.listen(PORT, () => console.log(`we are listening for scallions on port ${PORT}`));