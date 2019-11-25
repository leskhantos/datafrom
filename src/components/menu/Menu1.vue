<template>
    <ul class="menu__scheduler-list">
        <li class="paper menu__scheduler-item" v-for="(item,key) in listMeals" :key="key">
            <p class="menu__scheduler-caption">{{item.dayOfWeek}} {{item.stringDate}}</p>
            <ul class="menu__scheduler-dish-list">
                <li class="menu__scheduler-dish-item" v-for="(recipe,keyRecipe) in item.recipeWeights" :key="keyRecipe">
                    <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-1.jpg" alt="dish"></div>
                    <recipe>
                        <p slot="description" class="menu__scheduler-desc">
                            {{recipe.recipe._embedded.proportions[0].description}}</p>
                        <p slot="calories" class="menu__scheduler-calories">
                            {{recipe.recipe._embedded.proportions[0].kilocalories}} Кал</p>
                        <span slot="proteins" class="orange">33</span>
                        <span slot="fats" class="yellow">33</span>
                        <span slot="carbohydrates" class="green">33</span>
                    </recipe>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
  import Recipe from "./Recipe";

  export default {
    name: "Menu1",
    props: ['startDate', 'finishDate', 'menuId', 'typeOfMeals'],
    data() {
      return {
        proportions: {},
        meals: []
      }
    },
    components: {
      "recipe": Recipe
    },
    computed: {
      listMeals() {
        let resultMeals = []

        this.meals.forEach((value) => {
          let dateMeals = new Date(value.date);
          let dateStart = new Date(this.startDate);
          let dateFinish = new Date(this.finishDate);

          let dayOfWeek = dateMeals.getDay();
          if (dayOfWeek === 1) {
            dayOfWeek = 'Понедельник'
          } else if (dayOfWeek === 2) {
            dayOfWeek = 'Вторник'
          } else if (dayOfWeek === 3) {
            dayOfWeek = 'Среда'
          } else if (dayOfWeek === 4) {
            dayOfWeek = 'Четверг'
          } else if (dayOfWeek === 5) {
            dayOfWeek = 'Пятница'
          } else if (dayOfWeek === 6) {
            dayOfWeek = 'Суббота'
          } else if (dayOfWeek === 7) {
            dayOfWeek = 'Воскресенье'
          }

          let month = '' + (dateMeals.getMonth() + 1)
          let day = '' + (dateMeals.getDate())
          let year = dateMeals.getFullYear()

          if (month.length < 2)
            month = '0' + month;
          if (day.length < 2)
            day = '0' + day;

          value['stringDate'] = [day, month, year].join('.');

          value['dayOfWeek'] = dayOfWeek

          if (value['mealType'] === this.typeOfMeals && dateStart <= dateMeals && dateFinish >= dateMeals) {
            resultMeals.push(value)
          }

        });
        return resultMeals
      }
    },
    methods: {
      getMeals() {

        this.$store.dispatch('menu/getMenu', this.menuId).then(() => {
          this.proportions = this.$store.getters['menu/getMenu']._embedded.proportions

          let menu = {}
          menu['menuId'] = this.menuId
          menu['menuProportionId'] = this.proportions[0].id

          this.$store.dispatch('menu/getMeals', menu).then(() => {
            let meals = this.$store.getters['menu/getMeals']._embedded.items;
            this.meals = meals
            this.meals.forEach((meal) => {

              meal.recipeWeights.forEach((recipe) => {
                let recipeSelf = {}
                recipeSelf['recipe'] = recipe.recipe.id
                recipeSelf['weight'] = recipe.weight
                this.$store.dispatch('menu/getIngredients', recipeSelf).then(() => {
                  let nutrients = this.$store.getters['menu/getIngredients'];
                  let sumProteins = 0
                  let sumFats = 0
                  let sumCarbohydrates = 0
                  nutrients.forEach((nutrient) => {
                    sumProteins += nutrient.nutrients[0].weight
                    sumFats += nutrient.nutrients[1].weight
                    sumCarbohydrates += nutrient.nutrients[2].weight
                  })
                  recipe['proteins'] = Math.round(sumProteins)
                  recipe['fats'] = Math.round(sumFats)
                  recipe['carbohydrates'] = Math.round(sumCarbohydrates)
                })
              })
            })
          })

        })

      }
    },
    watch: {
      menuId: function () {
        this.getMeals()
      }
    },
    mounted() {
      this.typeOfMeals = 'breakfast'
      this.getMeals()
    }
  }
</script>

<style scoped>

</style>