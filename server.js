
const express = require('express');
const bodyParser = require('body-parser');
const { readRecipes, 
        send,
        getRecipe, 
        addRecipe, 
        confirmCreation,
        updateRecipe,
        deleteRecipe,
        saveRecipes, 
      } = require('./models/recipe');

const app = express();
const PORT = process.argv[2] || 8000;

app.use(express.json());

app.get('/scallion', (req, res) => {
  res.send('hello, scallion!');
})

app.get('/recipes', readRecipes, send)
app.post('/recipes', readRecipes, addRecipe, saveRecipes, confirmCreation)
app.get('/recipes/:id', readRecipes, getRecipe, send);
app.put('/recipes/:id', (req, res) => {
  res.send('request received');
})
app.delete('/recipes/:id', readRecipes, deleteRecipe, saveRecipes, confirmDeletion)

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
  });
});
  

app.listen(PORT, () => console.log(`we are listening for scallions on port ${PORT}`));