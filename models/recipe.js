const fs = require('fs');


function readRecipes(req, res, next) {
  fs.readFile(__dirname + '/../recipes.json', 'utf8', (err, data) => {
    if (err) next(err);
    data = JSON.parse(data);
    res.locals.recipes = data;
    console.log('read correctly');
    next();
  });
}

function send(req, res, next) {
  res.status(200);
  res.send(res.locals.requestedRecipe || res.locals.recipes);
}

function getRecipe(req, res, next) {
  const { id } = req.params;
  const requestedRecipe = res.locals.recipes.data.recipes[id];
  res.locals = { requestedRecipe,...res.locals };
  next();
}

function addRecipe(req, res, next) {
  const newRecipe = req.body;
  const nextId = res.locals.recipes.data.nextId;
  res.locals.recipes.data.nextId++
  res.locals.recipes.data.recipes[nextId] = newRecipe;
  res.locals.newRecipeName = newRecipe.name
  next();
}

function confirmCreation(req, res, next) {
  res.status(201);
  res.send(`saved ${res.locals.newRecipeName}!!`)
}




function deleteRecipe(req, res, next) {
  const { id } = req.params;
  res.locals.deleted = res.locals.recipes.data.recipes[id].name
  res.locals.recipes.data.recipes[id] = {};
  next();
};

function confirmDeletion(req, res, next) {
  res.send(`successfully deleted ${res.locals.deleted}`);
}


function saveRecipes(req, res, next) {
  let { recipes } = res.locals;
  recipes = JSON.stringify(recipes);
  fs.writeFile(__dirname + '/../recipes.json', recipes, (err) => {
    if (err) next(err);
  })
  res.locals.message = 'Recipes Saved!';
  next();
}


module.exports = {
  readRecipes,
  send,
  getRecipe,
  addRecipe,
  confirmCreation,
  deleteRecipe,
  saveRecipes
}