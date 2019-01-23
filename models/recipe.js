const recipeSchema = {
  name: '',
  ingredients: [{quantity: 0, name: ''}],
  steps: ['str', '']
}

function printRecipe(recipe) {
  const header = `# Recipe: ${recipe.name}`
  const ingredientsSubHeader = `## Ingredients: `
  const ingredients = recipe.ingredients.map((item, index) => {
    return `${index + 1}. ${item.quantity} ${item.name}`
  });
  const stepsSubheader = `## Steps: `
  const steps = recipe.steps.map((step, index) => {
    return `${index + 1}. ${step}`
  });
  return [header, ingredientsSubHeader, ...ingredients, stepsSubheader, ...steps].join('\n');
}