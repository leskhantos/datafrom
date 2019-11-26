<template>
    <ul class="menu__scheduler-list">
        <li class="paper menu__scheduler-item" v-for="(item,key) in listMeals" :key="key">
            <p class="menu__scheduler-caption">{{item.dayOfWeek}} {{item.stringDate}}</p>
            <ul class="menu__scheduler-dish-list">
                <li class="menu__scheduler-dish-item" v-for="(recipe) in item.recipeWeights" :key="recipe.recipe.id">
                    <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-1.jpg" alt="dish"></div>
                    <recipe>
                        <p slot="description" class="menu__scheduler-desc">
                            {{recipe.recipe._embedded.proportions[0].description}}</p>
                        <p v-if="recipe.kilocalories" slot="calories" class="menu__scheduler-calories">
                            {{recipe.kilocalories}} Кал</p>
                        <span v-if="recipe.proteins" slot="proteins" class="orange">{{recipe.proteins}}</span>
                        <span v-if="recipe.fats" slot="fats" class="yellow">{{recipe.fats}}</span>
                        <span v-if="recipe.carbohydrates" slot="carbohydrates"
                              class="green">{{recipe.carbohydrates}}</span>
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
        meals: [],
        listMeals: [],
        isRecipe: false
      }
    },
    components: {
      "recipe": Recipe
    },
    methods: {
      filterMeals() {
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
        this.listMeals = resultMeals
      },
      getMeals() {

        this.$store.dispatch('menu/getMenu', this.menuId).then(() => {
          this.proportions = this.$store.getters['menu/getMenu']._embedded.proportions

          let menu = {}
          menu['menuId'] = this.menuId
          menu['menuProportionId'] = this.proportions[0].id

          this.$store.dispatch('menu/getMeals', menu).then(() => {
            let meals = this.$store.getters['menu/getMeals']._embedded.items;
            this.meals = meals.map((meal) => {
              meal.recipeWeights = meal.recipeWeights.map((recipe) => {
                let recipeSelf = {}
                recipeSelf['recipe'] = recipe.recipe.id
                recipeSelf['weight'] = recipe.weight
                this.$store.dispatch('menu/getIngredients', recipeSelf).then(() => {
                  let nutrients = this.$store.getters['menu/getIngredients'];
                  let sumProteins = 0
                  let sumFats = 0
                  let sumCarbohydrates = 0
                  let kilocalories = 0
                  nutrients.forEach((nutrient) => {
                    sumProteins += nutrient.nutrients[0].weight
                    sumFats += nutrient.nutrients[1].weight
                    sumCarbohydrates += nutrient.nutrients[2].weight
                    kilocalories += nutrient.kilocalories
                  })
                  recipe.proteins = Math.round(sumProteins)
                  recipe.fats = Math.round(sumFats)
                  recipe.carbohydrates = Math.round(sumCarbohydrates)
                  recipe.kilocalories = Math.round(kilocalories)
                  this.isRecipe = !this.isRecipe
                })
                return recipe
              })
              return meal
            })
          })

        })

      }
    },
    watch: {
      menuId: function () {
        this.getMeals()
      },
      meals: function () {
        this.filterMeals()
      },
      typeOfMeals: function () {
        this.filterMeals()
      },
      isRecipe: function () {
        this.filterMeals()
      },
      startDate: function () {
        this.filterMeals()
      },
      finishDate: function () {
        this.filterMeals()
      },
    },
    mounted() {
      this.typeOfMeals = 'breakfast'
      this.getMeals()
    }
  }
</script>

<style scoped>

</style>