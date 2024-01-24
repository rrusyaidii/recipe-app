let recipes = [];
let currentEditingIndex = -1;

function savetoLocalStorage() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function loadfromLocalStorage() {
    const storedRecipes = localStorage.getItem('recipes');
    recipes = storedRecipes ? JSON.parse(storedRecipes) : [];
}

loadfromLocalStorage();
renderRecipeList();

function renderRecipeList() {
  const recipeListElement = document.getElementById('recipeList');
  recipeListElement.innerHTML = '';

  recipes.forEach((recipe, index) => {
    const recipeItem = document.createElement('div');
    recipeItem.classList.add('recipe');
    recipeItem.innerHTML = `
    <div class=container>  
        <div class="recipe-item">   
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <p>${recipe.ingredients}</p>
            <button class="btn-edit" onclick="editRecipe(${index})">Edit</button>
            <button class="btn-delete" onclick="deleteRecipe(${index})">Delete</button>
        </div>
    </div>
    `;
    
    recipeListElement.appendChild(recipeItem);
  });
}

function saveRecipe() {
  const recipeNameInput = document.getElementById('recipeName');
  const recipeIngredientsInput = document.getElementById('recipeIngredients');

  const name = recipeNameInput.value.trim();
  const ingredients = recipeIngredientsInput.value.trim();

  if (name !== '' && ingredients !== '') {
    if (currentEditingIndex === -1) {
      // Add new recipe
      recipes.push({ name, ingredients });
    } else {
      // Update existing recipe
      recipes[currentEditingIndex] = { name, ingredients };
      currentEditingIndex = -1; // Reset editing index
    }

    recipeNameInput.value = '';
    recipeIngredientsInput.value = '';

    renderRecipeList();
    savetoLocalStorage();
  }
}

function editRecipe(index) {
  const recipe = recipes[index];
  const recipeNameInput = document.getElementById('recipeName');
  const recipeIngredientsInput = document.getElementById('recipeIngredients');

  recipeNameInput.value = recipe.name;
  recipeIngredientsInput.value = recipe.ingredients;

  currentEditingIndex = index;
}

function deleteRecipe(index) {
  recipes.splice(index, 1);
  renderRecipeList();
  savetoLocalStorage();
}
