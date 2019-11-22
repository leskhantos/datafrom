<template>
    <ul class="menu__scheduler-list">
        <li class="paper menu__scheduler-item" v-for="(item,key) in listMeals" :key="key">
            <p class="menu__scheduler-caption">{{item.dayOfWeek}} {{item.stringDate}}</p>
            <ul class="menu__scheduler-dish-list">
                <li class="menu__scheduler-dish-item" v-for="(recipe,keyRecipe) in item.recipeWeights" :key="keyRecipe">
                    <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-1.jpg" alt="dish"></div>
                    <div class="menu__scheduler-content">
                        <p class="menu__scheduler-desc">{{recipe.recipe._embedded.proportions[0].description}}</p>
                        <p class="composed"><span class="orange">33</span><span class="yellow">33</span><span
                                class="green">33</span></p>
                        <p class="menu__scheduler-calories">{{recipe.recipe._embedded.proportions[0].kilocalories}}
                            Кал</p>
                        <!--p.status Не доступно-->
                    </div>
                </li>
                <!--                <li class="menu__scheduler-dish-item disabled">-->
                <!--                    <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-2.jpg" alt="dish"></div>-->
                <!--                    <div class="menu__scheduler-content">-->
                <!--                        <p class="menu__scheduler-desc">Карбонара с креветками</p>-->
                <!--                        <p class="composed"><span class="orange">62</span><span class="yellow">70</span><span-->
                <!--                                class="green">30</span></p>-->
                <!--                        <p class="menu__scheduler-calories">89 Кал</p>-->
                <!--                        <p class="status">Не доступно</p>-->
                <!--                    </div>-->
                <!--                </li>-->
            </ul>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "Menu1",
    props: ['startDate', 'finishDate', 'menuId', 'typeOfMeals'],
    data() {
      return {
        proportions: {},
        meals: []
      }
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
    watch: {
      menuId: function () {

        this.$store.dispatch('menu/getMenu', this.menuId).then(() => {
          this.proportions = this.$store.getters['menu/getMenu']._embedded.proportions

          let menu = {}
          menu['menuId'] = this.menuId
          menu['menuProportionId'] = this.proportions[0].id

          this.$store.dispatch('menu/getMeals', menu).then(() => {
            let meals = this.$store.getters['menu/getMeals']._embedded.items;
            this.meals = meals
          })

        })

      }
    },
    created() {
      this.typeOfMeals = 'breakfast'
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
              recipeSelf['recipe'] = recipe.recipe._embedded.proportions[0].id
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
  }
</script>

<style scoped>

</style>