const getIngredients = state => state.ingredients
const getRecipes = state => state.recipes
const getPurchases = state => state.purchases
const getWeight  = state => ingredient => {
    let weight = 0
    Object.values(state.purchases).map((value) => {
        if (value.ingredient === ingredient.id) {
            weight += value.weight
        }
    })
    return weight
}
const getRecipesByIngredient = (state) => (ingredient, recipes) => {
    let arr = []
    Object.values(state.purchases).map((value)=>{
        // eslint-disable-next-line no-console
        console.log(value)
        if (value.ingredient === ingredient.id && !arr.includes(value.recipe)) {
            arr.push(value.recipe)
        }
    })

    recipes = arr.map((value) => {
        return recipes[value]
    })

    return recipes
}
const getIngredientsByRecipe = (state) => (recipe, ingredients) => {
    let arr=[]
    Object.values(state.purchases).map((value) => {
        if (value.recipe === recipe.id && !arr.includes(value.ingredient)) {
            arr.push(value.ingredient)
        }
    })
    ingredients = arr.map((value) => {
        return ingredients[value]
    })
    return ingredients

}
const getCalories = (state) => (recipe,ingredients) => {
    let arr = []
    let cal = 0
    Object.values(state.purchases).map((value) => {
        if (value.recipe === recipe.id && !arr.includes(value.ingredient)) {
            arr.push(value.ingredient)
        }
    })
    ingredients = arr.map((value) => {
        cal += ingredients[value].kilocaloriesPerHundredGrams
    })
    return cal
}

const getProteins = (state) => (recipe,ingredients) => {
    let arr = []
    let proteins = 0
    Object.values(state.purchases).map((value) => {
        if (value.recipe === recipe.id && !arr.includes(value.ingredient)) {
            arr.push(value.ingredient)
        }
    })
    ingredients = arr.map((value) => {
        proteins += ingredients[value].nutrients[0].amountPerHundredGrams
    })
    return proteins
}
const getFats = (state) => (recipe,ingredients) => {
    let arr = []
    let fats = 0
    Object.values(state.purchases).map((value)=>{
        if (value.recipe === recipe.id && !arr.includes(value.ingredient)) {
            arr.push(value.ingredient)
        }
    })
    ingredients = arr.map((value) => {
        fats += ingredients[value].nutrients[1].amountPerHundredGrams
    })
    return fats
}
const getCarboHydrates = (state) => (recipe,ingredients) => {
    let arr = []
    let carboHydrates = 0
    Object.values(state.purchases).map((value) => {
        if (value.recipe === recipe.id && !arr.includes(value.ingredient)) {
            arr.push(value.ingredient)
        }
    })
    ingredients = arr.map((value) => {
        carboHydrates += ingredients[value].nutrients[2].amountPerHundredGrams
    })
    return carboHydrates
}

const getDate = state => purchaseType => {
    let date
    Object.values(state.purchases).map((value) => {
        if (value.ingredient === purchaseType.id) {
            date = value.date
        }else if(value.recipe === purchaseType.id){
            date = value.date
        }
    })
    return date
}

const getMealType = state => purchaseType => {
    let mealType
    Object.values(state.purchases).map((value) => {
        if (value.ingredient === purchaseType.id || value.recipe === purchaseType.id ) {
            mealType = value.mealType
        }
    })
    return mealType
}
const getSortedIngredients = state => sortType => {
    let ingredients = []
    if (sortType === 'desc'){
        ingredients = Object.values(state.ingredients).sort(function(x, y) {
            let nameA = x.title.toLowerCase(), nameB = y.title.toLowerCase()
            if (nameA < nameB)
                return 1
            if (nameA > nameB)
                return -1
            return 0
        });
    }else{
        ingredients = Object.values(state.ingredients).sort();
    }
        return ingredients
}
const getSortedRecipes = state => sortType=>{
    let recipes
    if (sortType === 'desc'){
        recipes = Object.values(state.recipes).sort(function(x, y) {
            let nameA = x.title.toLowerCase(), nameB = y.title.toLowerCase()
            if (nameA < nameB)
                return 1
            if (nameA > nameB)
                return -1
            return 0
        });
    }else{
        recipes = Object.values(state.recipes).sort();
    }
    return recipes
}
const getByTypeOfAllMeal = state => typeOfMeal =>{

    return Object.values(state.recipes).filter(function (elem) {
        return elem.mealType === typeOfMeal;
    })
}
const getByTypeOfMealForDay = (state) => (typeOfMealForDay, mealDate)=>{

   return  Object.values(state.recipes).filter(function (elem) {
         if (elem.date === mealDate){
             return elem.mealType === typeOfMealForDay;
         }
    })
}
const getFilteredIngredientsByDate = (state) =>(fromDate, toDate, ingredient)=>{
    let arr=[]
    Object.values(state.purchases).map((value) => {
        let from = new Date(fromDate);
        let to   = new Date(toDate);
        let check = new Date(value.date);
        if (check > from && check < to && !arr.includes(value.ingredient)) {
            arr.push(value.ingredient)
        }
    })
    ingredient = arr.map((value) => {
        return ingredient[value]
    })
    return ingredient
}

const getFilteredRecipesByDate = (state) =>(fromDate, toDate, recipe)=>{
    let arr=[]
    Object.values(state.purchases).map((value) => {
        let from = new Date(fromDate);
        let to   = new Date(toDate);
        let check = new Date(value.date);
        if (check > from && check < to && !arr.includes(value.recipe)) {
            arr.push(value.recipe)
        }
    })
    recipe = arr.map((value) => {
        return recipe[value]
    })
    return recipe
}


export default {
    getWeight,
    getIngredients,
    getRecipesByIngredient,
    getIngredientsByRecipe,
    getRecipes,
    getPurchases,
    getDate,
    getMealType,
    getSortedIngredients,
    getSortedRecipes,
    getByTypeOfAllMeal,
    getByTypeOfMealForDay,
    getCalories,
    getProteins,
    getFats,
    getCarboHydrates,
    getFilteredIngredientsByDate,
    getFilteredRecipesByDate
}