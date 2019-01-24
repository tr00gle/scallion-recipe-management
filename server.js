
const express = require('express');
const { readAll, 
        send,
        getById, 
        addOne, 
        confirmCreation,
        updateRecipe,
        deleteRecipe,
        confirmDeletion,
        saveAll, 
      } = require('./models/recipe');

const app = express();
const PORT = process.argv[2] || 8000;

app.use(express.json());

app.get('/scallion', (req, res) => {
  res.send('hello, scallion!');
})

app.get('/recipes', readAll, send)
app.post('/recipes', readAll, addOne, saveAll, confirmCreation)
app.get('/recipes/:id', readAll, getById, send);
app.put('/recipes/:id', (req, res) => {
  res.send('request received');
})
app.delete('/recipes/:id', readAll, deleteRecipe, saveAll, confirmDeletion)

function onError(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
}
app.use(onError);
  
app.listen(PORT, () => console.log(`we are listening for scallions on port ${PORT}`));