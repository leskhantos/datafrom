<template>
    <div>
        <ul class="menu__scheduler-list">
            <li class="paper menu__scheduler-item" v-for="(meal,keyMeal) in listMeals" :key="keyMeal">
                <p class="menu__scheduler-caption">{{meal.mealTypeLocal}} {{meal.stringDate}}</p>
                <ul class="menu__scheduler-dish-list">
                    <li class="menu__scheduler-dish-item" v-for="(recipe,keyRecipe) in meal.recipeWeights"
                        :key="keyRecipe">
                        <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-1.jpg" alt="dish">
                        </div>
                        <recipe>
                            <p slot="description" class="menu__scheduler-desc open-modal-dish"
                               @click="modalShow(recipe.recipe.id)">
                                {{recipe.recipe.title}}</p>
                            <p v-if="recipe.kilocalories" slot="calories" class="menu__scheduler-calories">
                                {{recipe.kilocalories}} Кал</p>
                            <span v-if="recipe.proteins" slot="proteins" class="orange">{{recipe.proteins}}</span>
                            <span v-if="recipe.fats" slot="fats" class="yellow">{{recipe.fats}}</span>
                            <span v-if="recipe.carbohydrates" slot="carbohydrates" class="green">{{recipe.carbohydrates}}</span>
                        </recipe>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>


<script>
  import Recipe from "./Recipe";

  export default {
    name: "Menu3",
    props: ['listMeals'],
    components: {
      "recipe": Recipe
    },
    methods: {
      modalShow(id) {
        this.$emit('modalShow', id)
      }
    }
  }
</script>

<style scoped>
</style>