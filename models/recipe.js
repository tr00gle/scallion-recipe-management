const fs = require('fs');
const path = require('path');


function readAll(req, res, next) {
  fs.readFile(path.join(__dirname, '/../recipes.json'), 'utf8', (err, data) => {
    if (err) next(err);
    const parsedData = JSON.parse(data);
    res.locals.recipes = parsedData;
    next();
  });
}

function send(req, res) {
  res.status(200);
  res.send(res.locals.requestedRecipe || res.locals.recipes);
}

function getById(req, res, next) {
  const { id } = req.params;
  const requestedRecipe = res.locals.recipes.data.recipes[id];
  res.locals = { requestedRecipe, ...res.locals };
  next();
}

function addOne(req, res, next) {
  const newRecipe = req.body;
  const { nextId } = res.locals.recipes.data;
  res.locals.recipes.data.nextId += 1;
  res.locals.recipes.data.recipes[nextId] = newRecipe;
  res.locals.newRecipeName = newRecipe.name;
  next();
}

function confirmCreation(req, res) {
  res.status(201);
  res.send(`saved ${res.locals.newRecipeName}!!`);
}

function deleteRecipe(req, res, next) {
  const { id } = req.params;
  res.locals.deleted = res.locals.recipes.data.recipes[id].name;
  res.locals.recipes.data.recipes[id] = {};
  next();
}

function confirmDeletion(req, res) {
  res.send(`successfully deleted ${res.locals.deleted}`);
}

function saveAll(req, res, next) {
  let { recipes } = res.locals;
  recipes = JSON.stringify(recipes);
  fs.writeFile(path.join(__dirname, '/../recipes.json'), recipes, (err) => {
    if (err) next(err);
  });
  res.locals.message = 'Recipes Saved!';
  next();
}

module.exports = {
  readAll,
  send,
  getById,
  addOne,
  confirmCreation,
  deleteRecipe,
  confirmDeletion,
  saveAll,
};
