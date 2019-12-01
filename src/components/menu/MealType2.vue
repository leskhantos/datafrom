<template>
    <li class="paper menu__scheduler-item">
        <p class="menu__scheduler-caption">{{dayOfMeal[typeOfMealsNumber].dayOfWeek}} {{dayOfMeal[0].stringDate}}</p>
        <div class="tabs__buttons tabs__buttons--separate menu__scheduler-tabs-btn">
            <button v-for="(item,key) in dayOfMeal"
                    :key="key" :class="['tabs__btn', { 'active':typeOfMealsNumber === key }]" type="button"
                    @click.prevent="typeOfMealsNumber=key"
            >{{item.mealTypeLocal}}
            </button>
        </div>
        <ul class="menu__scheduler-dish-list">
            <li class="menu__scheduler-dish-item"
                v-for="(recipe,keyRecipe) in dayOfMeal[typeOfMealsNumber].recipeWeights"
                :key="keyRecipe">
                <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-1.jpg" alt="dish"></div>
                <div class="menu__scheduler-content">
                    <p class="menu__scheduler-desc open-modal-dish" @click="modalShow(recipe.recipe.id)">
                        {{recipe.recipe.title}}</p>
                    <p class="composed"><span class="orange">{{recipe.proteins}}</span><span class="yellow">{{recipe.fats}}</span><span
                            class="green">{{recipe.carbohydrates}}</span></p>
                    <p class="menu__scheduler-calories"><span>{{recipe.weight}}г.</span>{{recipe.kilocalories}}
                        Кал</p>
                </div>
            </li>
        </ul>
    </li>
</template>

<script>
  export default {
    name: "MealType2",
    props: ["dayOfMeal", "typeOfMealsNumber"],
    methods: {
      modalShow(id) {
        this.$emit('modalShow', id)
      }
    }
  }
</script>

<style scoped>

</style>