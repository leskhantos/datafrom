<template>
    <div>
        <!--        <div class="menu__btn-group">-->
        <!--            <button class="button active" type="button">Регулярное</button>-->
        <!--            <button class="button" type="button">Специальное</button>-->
        <!--            <button class="button" type="button">Лечебный план</button>-->
        <!--        </div>-->
        <div class="menu__slider">
            <ul class="menu__slides">
                <li :class="['paper','slider']">
                    <div class="menu__slide">
                        <div class="menu__slide-image"><img src="/static/images/jpg/image-1.jpg" alt="slider-image">
                        </div>
                        <div class="menu__slide-content">
                            <transition name="fade" mode="out-in">
                                <h2 class="menu__slide-caption" :key="activeMenuTitle">{{activeMenuTitle}}</h2>
                            </transition>
                            <transition name="fade" mode="out-in">
                                <p class="menu__slide-calories" :key="activeMenuMaxCalories">{{activeMenuMinCalories}} –
                                    {{activeMenuMaxCalories}} калорий</p>
                            </transition>
                            <transition name="fade" mode="out-in">
                                <p class="menu__slide-description" :key="activeMenuDescription">
                                    {{activeMenuDescription}}</p>
                            </transition>
                            <button class="button menu__slide-btn" type="button"><span>Попробовать БЕСПЛАТНО!</span>
                                <GiftIcon />
                            </button>
                            <p class="menu__slide-meta">Не знаете какое меню выбрать? Мы подберём подходящий вариант.<a
                                    href="">Начать</a></p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="menu__arrows">
                <button class="menu__slider-arrow menu__slider-arrow--prev" type="button" @click="prevSlide">
                    <ButtonArrowLeftIcon />
                </button>
                <button class="menu__slider-arrow menu__slider-arrow--next" type="button" @click="nextSlide">
                    <ButtonArrowRightIcon />
                </button>
            </div>
        </div>
        <div class="paper filter menu__filter">
            <div class="filter__col">
                <p class="filter__name">Выбор недели:</p>
                <div class="filter__item">
                    <button class="icon-button filter__btn-arrow filter__btn-arrow--prev" type="button"
                            @click.prevent="minusWeek">
                        <ArrowLeftIcon />
                    </button>
                    <div class="datepicker filter__datepicker">
                        <input type="date" v-model="startDate">
                    </div>
                    <span>&ndash;</span>
                    <div class="datepicker filter__datepicker">
                        <input type="date" v-model="finishDate">
                    </div>
                    <button class="icon-button filter__btn-arrow filter__btn-arrow--next" type="button"
                            @click.prevent="plusWeek">
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
            <div class="filter__col">
                <form class="filter__item">
                    <p class="filter__label"><span class="tooltip">Вид меню:</span></p>
                    <div class="filter__item-wrap">
                        <label class="input-radio" @click.prevent="typeOfMenu = 1">
                            <input class="visually-hidden" type="radio" name="type" :checked="typeOfMenu===1"><span
                                class="input-radio__custom"></span>
                            <p>1 вид</p>
                        </label>
                        <label class="input-radio" @click.prevent="typeOfMenu = 2">
                            <input class="visually-hidden" type="radio" name="type" :checked="typeOfMenu===2"><span
                                class="input-radio__custom"></span>
                            <p>2 вид</p>
                        </label>
                        <label class="input-radio" @click.prevent="typeOfMenu = 3">
                            <input class="visually-hidden" type="radio" name="type" :checked="typeOfMenu===3"><span
                                class="input-radio__custom"></span>
                            <p>3 вид</p>
                        </label>
                    </div>
                </form>
            </div>
            <div class="filter__col span-2" v-if="typeOfMenu===1">
                <div class="tabs__buttons">
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 'breakfast' }]" type="button"
                            @click.prevent="typeOfMeals='breakfast'">Завтрак
                    </button>
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 'brunch' }]" type="button"
                            @click.prevent="typeOfMeals='brunch'">Перекус
                    </button>
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 'dinner' }]" type="button"
                            @click.prevent="typeOfMeals='dinner'">Обед
                    </button>
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 'lunch' }]" type="button"
                            @click.prevent="typeOfMeals='lunch'">Ланч
                    </button>
                    <button :class="['tabs__btn', { 'active':typeOfMeals === 'supper' }]" type="button"
                            @click.prevent="typeOfMeals='supper'">Ужин
                    </button>
                </div>
            </div>
        </div>
        <component
                :is="currentMenu"
                :listMeals="listMeals"
                :typeOfMealsNumber="typeOfMealsNumber"
        >
        </component>
    </div>
</template>

<script>
  import GiftIcon from "../icons/GiftIcon";
  import Menu1 from "../menu/Menu1";
  import Menu2 from "../menu/Menu2";
  import Menu3 from "../menu/Menu3";
  import ArrowLeftIcon from "../icons/ArrowLeftIcon";
  import ArrowRightIcon from "../icons/ArrowRightIcon";
  import ButtonArrowLeftIcon from "../icons/ButtonArrowLeftIcon";
  import ButtonArrowRightIcon from "../icons/ButtonArrowRightIcon";

  export default {
    name: "MenuInner",
    components: {
      ButtonArrowRightIcon,
      ButtonArrowLeftIcon,
      ArrowLeftIcon,
      ArrowRightIcon,
      GiftIcon,
      Menu1,
      Menu2,
      Menu3
    },
    data() {
      return {
        activeMenu: 0,
        typeOfMenu: 1,
        startDate: '',
        finishDate: '',
        menus: {},
        activeMenuId: '',
        activeMenuTitle: '',
        activeMenuDescription: '',
        activeMenuMinCalories: '',
        activeMenuMaxCalories: '',
        typeOfMeals: 'breakfast',
        typeOfMealsNumber: 0,
        proportions: {},
        meals: [],
        listMeals: [],
        isRecipe: false
      }
    },
    computed: {
      currentMenu() {
        return 'Menu' + this.typeOfMenu
      },
    },
    methods: {
      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      },
      nextSlide() {
        if (this.activeMenu === this.$store.getters['menu/getListMenus'].length - 1) {
          this.activeMenu = 0
        } else {
          this.activeMenu += 1
        }
      },
      prevSlide() {
        if (this.activeMenu === 0) {
          this.activeMenu = this.$store.getters['menu/getListMenus'].length - 1
        } else {
          this.activeMenu -= 1
        }
      },
      getStringDate(date) {

        let month = '' + (date.getMonth() + 1)
        let day = '' + (date.getDate())
        let year = date.getFullYear()

        if (month.length < 2)
          month = '0' + month;
        if (day.length < 2)
          day = '0' + day;

        return ([year, month, day].join('-'));
      },
      minusWeek() {
        let startDate = new Date(this.startDate)

        startDate.setDate(startDate.getDate() - 7)
        this.startDate = this.getStringDate(startDate);
        let finishDate = new Date(this.finishDate)

        finishDate.setDate(finishDate.getDate() - 7)
        this.finishDate = this.getStringDate(finishDate);
      },
      plusWeek() {
        let startDate = new Date(this.startDate)

        startDate.setDate(startDate.getDate() + 7)
        this.startDate = this.getStringDate(startDate);
        let finishDate = new Date(this.finishDate)

        finishDate.setDate(finishDate.getDate() + 7)
        this.finishDate = this.getStringDate(finishDate);
      },
      filterMeals() {
        let resultMeals = []
        let mealsFilteredByDate = []
        let datesOfMeals = []
        let datesUniqueOfMeals = []
        let mealsFilteredByDateAndSortedByType = []
        let mealsFilteredByDateAndSortedByTypeTemp = []

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

          if (this.typeOfMenu === 1) {

            if (value['mealType'] === this.typeOfMeals && dateStart <= dateMeals && dateFinish >= dateMeals) {
              resultMeals.push(value)
            }
          } else {

            if (dateStart <= dateMeals && dateFinish >= dateMeals) {
              mealsFilteredByDate.push(value)
            }

          }
        });

        mealsFilteredByDate.forEach((value) => {
          datesOfMeals.push(value.date)
        })
        datesUniqueOfMeals = datesOfMeals.filter(this.onlyUnique);

        datesUniqueOfMeals.forEach((datesUniqueOfMealsRow) => {
          let mealsFilteredByDateAndSortedByTypeRow = []
          mealsFilteredByDate.forEach((value) => {
            if (value.date === datesUniqueOfMealsRow) {
              mealsFilteredByDateAndSortedByTypeRow.push(value)
            }
          })
          mealsFilteredByDateAndSortedByType.push(mealsFilteredByDateAndSortedByTypeRow)
        })

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

          if (this.typeOfMenu === 2) {
            row = []
            if (breakfast.id !== undefined) {
              row.push(breakfast)
            }
            if (brunch.id !== undefined) {
              row.push(brunch)
            }
            if (dinner.id !== undefined) {
              row.push(dinner)
            }
            if (lunch.id !== undefined) {
              row.push(lunch)
            }
            if (supper.id !== undefined) {
              row.push(supper)
            }
            mealsFilteredByDateAndSortedByTypeTemp.push(row)
          } else {
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
          }
        })
        mealsFilteredByDateAndSortedByType = mealsFilteredByDateAndSortedByTypeTemp


        if (this.typeOfMenu === 1) {
          this.listMeals = resultMeals
        } else {
          this.listMeals = mealsFilteredByDateAndSortedByType
        }
      },
      getMeals() {
        this.$store.dispatch('menu/getMenu', this.activeMenuId).then(() => {
          this.proportions = this.$store.getters['menu/getMenu']._embedded.proportions

          let menu = {}
          menu['menuId'] = this.activeMenuId
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
    mounted() {
      this.typeOfMenu = 1

      let startDate = new Date()
      while (startDate.getDay() !== 1) {
        startDate.setDate(startDate.getDate() - 1)
      }
      this.startDate = this.getStringDate(startDate);

      let finishDate = new Date()
      finishDate.setDate(startDate.getDate() + 6)
      this.finishDate = this.getStringDate(finishDate);

      this.$store.dispatch('menu/getListMenus').then(() => {
        this.menus = this.$store.getters['menu/getListMenus']
        this.activeMenuTitle = this.menus[this.activeMenu].title
        this.activeMenuDescription = this.menus[this.activeMenu].description
        this.activeMenuId = this.menus[this.activeMenu].id
        this.activeMenuMinCalories = this.menus[this.activeMenu].calories.min
        this.activeMenuMaxCalories = this.menus[this.activeMenu].calories.max
        this.getMeals()
      })


      this.typeOfMeals = 'breakfast'
      this.typeOfMealsNumber = 0
    },
    watch: {
      activeMenu: function () {
        this.activeMenuTitle = this.menus[this.activeMenu].title
        this.activeMenuDescription = this.menus[this.activeMenu].description
        this.activeMenuId = this.menus[this.activeMenu].id
        this.activeMenuMinCalories = this.menus[this.activeMenu].calories.min
        this.activeMenuMaxCalories = this.menus[this.activeMenu].calories.max
      },
      activeMenuId: function () {
        this.getMeals()
      },
      typeOfMeals: function () {
        this.filterMeals()
      },
      typeOfMenu: function () {
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
    }
  }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .1s ease;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .menu__arrows {
        top: 50%;
    }
</style>