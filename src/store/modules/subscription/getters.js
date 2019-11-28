const getIngredients = state => state.ingredients
const getAllIngredients = state => state.allIngredients
const getRecipes = state => state.recipes
const getPurchases = state => state.purchases
const getWeight  = state => purchaseType => {
    let weight = 0
    Object.values(state.purchases).map((value) => {
        if (value.ingredient === purchaseType.id) {
            weight += value.weight
        }else if(value.recipe === purchaseType.id){
            weight += value.weight
        }
    })
    return weight
}
const getRecipesByIngredient = (state) => (ingredient, recipes) => {
    let arr = []
    Object.values(state.purchases).map((value)=>{
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
        ingredients = Object.values(state.ingredients).sort(function(x, y) {
            let nameA = x.title.toLowerCase(), nameB = y.title.toLowerCase()
            if (nameA < nameB)
                return 1
            if (nameA > nameB)
                return -1
            return 0
        });
        ingredients.reverse()
    }

        return ingredients
}

const getFilteredIngredientsByDate = (state) => (fromDate, toDate, ingredient)=>{
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

const getRecipesByDate = state =>{
    let dates = []
    let filteredRecipes = []

    dates = [...new Set(Object.values(state.purchases).map((value) => {
        return value.date
    }))]

    dates.forEach((date, index) => {
        let recipe = {
            date,
            meals: {},
        }
        filteredRecipes.push(recipe)
        Object.values(state.purchases).forEach((value) => {
            if (value.date === date) {
                if (!filteredRecipes[index].meals[value.mealType]) {
                    filteredRecipes[index].meals[value.mealType] = [state.recipes[value.recipe]]
                }

                if (filteredRecipes[index].meals[value.mealType] && !filteredRecipes[index].meals[value.mealType].includes(state.recipes[value.recipe])) {
                    filteredRecipes[index].meals[value.mealType].push(state.recipes[value.recipe])
                }
            }
        })
    })
    return filteredRecipes
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
    getCalories,
    getProteins,
    getFats,
    getCarboHydrates,
    getFilteredIngredientsByDate,
    getRecipesByDate,
    getAllIngredients
}