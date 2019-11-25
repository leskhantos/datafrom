<template>
    <div>
        <ul class="menu__scheduler-list" v-for="(dayOfMeal,key) in listMeals" :key="key">
            <li class="paper menu__scheduler-item">
                <p class="menu__scheduler-caption">{{dayOfMeal[0].dayOfWeek}} {{dayOfMeal[0].stringDate}}</p>
                <div class="tabs__buttons tabs__buttons--separate menu__scheduler-tabs-btn">
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 0 }]" type="button"
                            @click.prevent="typeOfMeals=0">Завтрак
                    </button>
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 1 }]" type="button"
                            @click.prevent="typeOfMeals=1">Перекус
                    </button>
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 2 }]" type="button"
                            @click.prevent="typeOfMeals=2">Обед
                    </button>
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 4 }]" type="button"
                            @click.prevent="typeOfMeals=4">Ужин
                    </button>
                </div>
                <ul class="menu__scheduler-dish-list">
                    <li class="menu__scheduler-dish-item"
                        v-for="(recipe,keyRecipe) in dayOfMeal[typeOfMeals].recipeWeights"
                        :key="keyRecipe">
                        <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-1.jpg" alt="dish"></div>
                        <div class="menu__scheduler-content">
                            <p class="menu__scheduler-desc">{{recipe.recipe._embedded.proportions[0].description}}</p>
                            <p class="composed"><span class="orange">62</span><span class="yellow">70</span><span
                                    class="green">30</span></p>
                            <p class="menu__scheduler-calories"><span>200г.</span>{{recipe.recipe._embedded.proportions[0].kilocalories}}
                                Кал</p>
                            <button class="button" type="button">Съел(а)</button>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>

  export default {
    name: "Menu2",
    props: ['startDate', 'finishDate', 'menuId'],
    data() {
      return {
        proportions: {},
        meals: [],
        typeOfMeals: 0
      }
    },
    computed: {
      listMeals() {
        let resultMeals = []
        let dateArray = []
        let resultWithDates = []

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
            value['mealTypeLocal'] = 'lunch'
          }

          value['stringDate'] = [day, month, year].join('.');

          value['dayOfWeek'] = dayOfWeek

          if (dateStart <= dateMeals && dateFinish >= dateMeals) {
            resultMeals.push(value)
          }

        });

        resultMeals.forEach((value) => {
          dateArray.push(value.date)
        })
        let dateUniqueArray = dateArray.filter(this.onlyUnique);

        dateUniqueArray.forEach((resultRow) => {
          let resultArrayRow = []
          resultMeals.forEach((value) => {
            if (value.date === resultRow) {
              resultArrayRow.push(value)
            }
          })
          resultWithDates.push(resultArrayRow)
        })

        let newResultWithDates = []

        resultWithDates.forEach((row) => {

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

          row = []
          row.push(breakfast)
          row.push(lunch)
          row.push(brunch)
          row.push(dinner)
          row.push(supper)
          newResultWithDates.push(row)
        })
        resultWithDates = newResultWithDates
        return resultWithDates
      }
    },
    methods: {
      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      },

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
      this.typeOfMeals = 0
      this.getMeals()
    }
  }
</script>

<style scoped>

</style>