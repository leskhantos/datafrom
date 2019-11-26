<template>
    <div>
        <ul class="menu__scheduler-list">
            <meal-type-2 v-for="(dayOfMeal,key) in listMeals" :key="key"
                         :dayOfMeal="dayOfMeal"
                         :typesOfMeals="typesOfMeals"></meal-type-2>
        </ul>
    </div>
</template>

<script>

  import MealType2 from "./MealType2";

  export default {
    name: "Menu2",
    props: ['startDate', 'finishDate', 'menuId'],
    data() {
      return {
        proportions: {},
        meals: [],
        typesOfMeals: 0,
        profileId: '',
        listMeals: [],
        isRecipe: false
      }
    },
    components: {
      "meal-type-2": MealType2
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

        datesUniqueOfMeals.forEach((datesUniqueOfMealsRow) => {
          let mealsFilteredByDateAndSortedByTypeRow = []
          mealsFilteredByDate.forEach((value) => {
            if (value.date === datesUniqueOfMealsRow) {
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
            if (array.mealType === 'dinner') {
              dinner = array
            }
            if (array.mealType === 'brunch') {
              brunch = array
            }
            if (array.mealType === 'supper') {
              supper = array
            }

          })


          row = []
          if (breakfast.id !== undefined) {
            row.push(breakfast)
          }
          if (lunch.id !== undefined) {
            row.push(lunch)
          }
          if (brunch.id !== undefined) {
            row.push(brunch)
          }
          if (dinner.id !== undefined) {
            row.push(dinner)
          }
          if (supper.id !== undefined) {
            row.push(supper)
          }
          mealsFilteredByDateAndSortedByTypeTemp.push(row)
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
      this.typeOfMeals = 0
      this.getMeals()
    }
  }
</script>

<style scoped>
    .tabs__buttons--separate .tabs__btn {
        max-height: 50px;
    }

    .menu__scheduler-tabs-btn {
        min-height: 115px;
    }
</style>