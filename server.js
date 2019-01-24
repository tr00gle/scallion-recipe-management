
// require express
const express = require('express');
// require body parser
const bodyParser = require('body-parser');
// import function from the recipe model 
// const recipe = require('./models/recipe');
const {
  readRecipes,
  addRecipe,
  saveRecipes,
  getRecipe,
  deleteRecipe,
} = require('./models/recipe');
// instantiate the applciation       
const app = express();
const groceries = express();
// set port constant 
const PORT = process.argv[2] || 6624;

// use body parse for json 
app.use(bodyParser.json());

// hello scallion route here
app.get('/scallion', (req, res) => {
      res.send('hello, scallions!');
})
// get recipes 
app.get('/recipes', readRecipes, (req, res) => {
      res.send(res.locals.recipes);
} )

app.post('/recipes', readRecipes, addRecipe, saveRecipes)

app.post('/recipes', (req, res) => {
      res.status(201);
      res.send(`you have added ${res.locals.newRecipeName} via the scallion API`)
})

app.get('/recipes/:id', readRecipes, getRecipe, (req, res) => {
      res.send(res.locals.requested);
})

// delete a recipe by id 
app.delete('/recipes/:id', readRecipes, deleteRecipe, saveRecipes, (req, res) => {
      res.send(`we have deleted ${res.locals.deleted} via the Scallion API`)
})

// update a recipe by id 
      // add ingredient? 
      // change name? 
      // delete ingredient?
      // add/delete a step 

// Listen here 
app.listen(PORT, () => console.log(`we, the scallions, are listening to you on port ${PORT}`))