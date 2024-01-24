let recipes = [];
let currentEditingIndex = -1;

function renderRecipeList() {
    const recipeListElement = document.getElementById('recipeList');
    recipeListElement.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe');
        recipeItem.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong></p>
        <p>${recipe.ingredients}</p>
        <button onclick="editRecipe(${index})">Edit</button>
        <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeListElement.appendChild(recipeItem);
    });
}

function saveRecipe(){
    const recipeNameInput = document.getElementById('recipeName');
    const recipeIngredientsInput = document.getElementById('recipeIngredients');

    const name = recipeNameInput.value.trim();
    
}