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
                            <p slot="description" class="menu__scheduler-desc">
                                {{recipe.recipe._embedded.proportions[0].description}}</p>
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
    props: ['startDate', 'finishDate', 'menuId'],
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
      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      },

      filterMeals() {
        let mealsFilteredByDate = []
        let datesOfMeals = []
        let mealsFilteredByDateAndSortedByType = []

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


          if (value['mealType'] === 'breakfast') {
            value['mealTypeLocal'] = 'Завтрак'
          } else if (value['mealType'] === 'brunch') {
            value['mealTypeLocal'] = 'Перекус'
          } else if (value['mealType'] === 'dinner') {
            value['mealTypeLocal'] = 'Обед'
          } else if (value['mealType'] === 'supper') {
            value['mealTypeLocal'] = 'Ужин'
          } else {
            value['mealTypeLocal'] = 'Ланч'
          }

          value['stringDate'] = [day, month, year].join('.');

          value['dayOfWeek'] = dayOfWeek

          if (dateStart <= dateMeals && dateFinish >= dateMeals) {
            mealsFilteredByDate.push(value)
          }

        });

        mealsFilteredByDate.forEach((value) => {
          datesOfMeals.push(value.date)
        })
        let datesUniqueOfMeals = datesOfMeals.filter(this.onlyUnique);

        datesUniqueOfMeals.forEach((resultRow) => {
          let mealsFilteredByDateAndSortedByTypeRow = []
          mealsFilteredByDate.forEach((value) => {
            if (value.date === resultRow) {
              mealsFilteredByDateAndSortedByTypeRow.push(value)
            }
          })
          mealsFilteredByDateAndSortedByType.push(mealsFilteredByDateAndSortedByTypeRow)
        })

        let mealsFilteredByDateAndSortedByTypeTemp = []

        mealsFilteredByDateAndSortedByType.forEach((row) => {

          let breakfast = {}
          let lunch = {}
          let brunch = {}
          let dinner = {}
          let supper = {}

          row.forEach((array) => {

            if (array.mealType === 'breakfast') {
              breakfast = array
            }
            if (array.mealType === 'lunch') {
              lunch = array
            }
            if (array.mealType === 'brunch') {
              brunch = array
            }
            if (array.mealType === 'dinner') {
              dinner = array
            }
            if (array.mealType === 'supper') {
              supper = array
            }

          })

          if (breakfast.id !== undefined) {
            mealsFilteredByDateAndSortedByTypeTemp.push(breakfast)
          }
          if (brunch.id !== undefined) {
            mealsFilteredByDateAndSortedByTypeTemp.push(brunch)
          }
          if (dinner.id !== undefined) {
            mealsFilteredByDateAndSortedByTypeTemp.push(dinner)
          }
          if (lunch.id !== undefined) {
            mealsFilteredByDateAndSortedByTypeTemp.push(lunch)
          }
          if (supper.id !== undefined) {
            mealsFilteredByDateAndSortedByTypeTemp.push(supper)
          }
        })
        mealsFilteredByDateAndSortedByType = mealsFilteredByDateAndSortedByTypeTemp
        this.listMeals = mealsFilteredByDateAndSortedByType
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
      this.getMeals()
    }
  }
</script>

<style scoped>
</style>