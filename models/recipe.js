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

function getRecipe(req, res, next) {
  const { id } = req.params;
  const requestedRecipe = res.locals.recipes.data.recipes[id];
  res.locals.requested = requestedRecipe;
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

// update recipe functions can be their own group here 


function deleteRecipe(req, res, next) {
  const { id } = req.params;
  res.locals.deleted = res.locals.recipes.data.recipes[id].name
  // how else can we do this? 
  res.locals.recipes.data.recipes[id] = {};
  next();
};

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
  getRecipe,
  addRecipe,
  updateRecipe,
  deleteRecipe,
  saveRecipes
}