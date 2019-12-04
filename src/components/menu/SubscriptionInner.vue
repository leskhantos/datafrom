<template>
    <div :class="['subscriptions-inner__wrapper', { 'open':openMenu === keySub}]">
        <div class="subscriptions-inner__container">
            <h3 class="subscriptions-inner__subtitle">Настройка подписки</h3>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col">
                    <p><b>Шаг 1</b></p>
                    <p>Выберите приёмы пищи</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="subscriptions-inner__list">
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-2'+keySub"
                                   :id="'meals-5'+keySub"
                                   v-model="breakfast">
                            <label class="subscriptions-inner__item" :for="'meals-5'+keySub">
                                <p class="subscriptions-inner__item-name">Завтрак</p>
                                <p class="subscriptions-inner__price" v-if="!mealTypesExist.includes('breakfast')">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-2'+keySub"
                                   :id="'meals-6'+keySub" v-model="dinner">
                            <label class="subscriptions-inner__item" :for="'meals-6'+keySub">
                                <p class="subscriptions-inner__item-name">Обед</p>
                                <p class="subscriptions-inner__price" v-if="!mealTypesExist.includes('dinner')">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-2'+keySub"
                                   :id="'meals-7'+keySub" v-model="brunch">
                            <label class="subscriptions-inner__item" :for="'meals-7'+keySub">
                                <p class="subscriptions-inner__item-name">Перекус</p>
                                <p class="subscriptions-inner__price" v-if="!mealTypesExist.includes('brunch')">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-2'+keySub"
                                   :id="'meals-8'+keySub" v-model="lunch">
                            <label class="subscriptions-inner__item" :for="'meals-8'+keySub">
                                <p class="subscriptions-inner__item-name">Ланч</p>
                                <p class="subscriptions-inner__price" v-if="!mealTypesExist.includes('lunch')">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-2'+keySub"
                                   :id="'meals-9'+keySub" v-model="supper" >
                            <label class="subscriptions-inner__item" :for="'meals-9'+keySub">
                                <p class="subscriptions-inner__item-name">Ужин</p>
                                <p class="subscriptions-inner__price" v-if="!mealTypesExist.includes('supper')">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div :class="['subscriptions-inner__step', {'disabled': edit}]">
                <div class="subscriptions-inner__col">
                    <p><b>Шаг 2</b></p>
                    <p>Укажите дни питания</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="subscriptions-inner__list subscriptions-inner__list--type-2">
                        <li @click="periodicity='seven_days'">
                            <input class="visually-hidden" type="radio" :name="'day-2'+keySub" :id="'day-3'+keySub"
                                   checked
                            >
                            <label class="subscriptions-inner__item" :for="'day-3'+keySub">
                                <p class="subscriptions-inner__item-name"><b>7 дней в неделю</b></p>
                                <p class="subscriptions-inner__item-text">с пн – вс</p>
                            </label>
                        </li>
                        <li @click="periodicity='five_days'">
                            <input class="visually-hidden" type="radio" :name="'day-2'+keySub" :id="'day-4'+keySub">
                            <label class="subscriptions-inner__item" :for="'day-4'+keySub">
                                <p class="subscriptions-inner__item-name"><b>5 дней в неделю</b></p>
                                <p class="subscriptions-inner__item-text">с пн – пт</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div :class="['subscriptions-inner__step', {'disabled': edit}]">
                <div class="subscriptions-inner__col">
                    <p><b>Шаг 3</b></p>
                    <p>Стоимость</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="subscriptions-inner__list subscriptions-inner__list--type-2">
                        <li @click="durationInMonths=1">
                            <input class="visually-hidden" type="radio" :name="'price-2'+keySub" :id="'price-5'+keySub"
                                   checked>
                            <label class="subscriptions-inner__item" :for="'price-5'+keySub">
                                <p class="subscriptions-inner__item-name">Месяц</p>
                                <p class="subscriptions-inner__price">{{finalCostForMonth}} &#8381;</p>
                            </label>
                        </li>
                        <li @click="durationInMonths=3">
                            <input class="visually-hidden" type="radio" :name="'price-2'+keySub" :id="'price-6'+keySub">
                            <label class="subscriptions-inner__item" :for="'price-6'+keySub">
                                <p class="subscriptions-inner__item-name">3 месяца</p>
                                <p class="subscriptions-inner__price">{{finalCostForThreeMonths}} &#8381;</p>
                                <p class="subscriptions-inner__item-text">{{Math.round(finalCostForThreeMonths/3)}}
                                    &#8381; / месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия –
                                    {{discountForThreeMonths*100}}%</p>
                            </label>
                        </li>
                        <li @click="durationInMonths=6">
                            <input class="visually-hidden" type="radio" :name="'price-2'+keySub" :id="'price-7'+keySub">
                            <label class="subscriptions-inner__item" :for="'price-7'+keySub">
                                <p class="subscriptions-inner__item-name">6 месяца</p>
                                <p class="subscriptions-inner__price">{{finalCostForSixMonths}} &#8381;</p>
                                <p class="subscriptions-inner__item-text">{{Math.round(finalCostForSixMonths/6)}}
                                    &#8381; / месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия –
                                    {{discountForSixMonths*100}}%</p>
                            </label>
                        </li>
                        <li @click="durationInMonths=12">
                            <input class="visually-hidden" type="radio" :name="'price-2'+keySub" :id="'price-8'+keySub">
                            <label class="subscriptions-inner__item" :for="'price-8'+keySub">
                                <p class="subscriptions-inner__item-name">Год</p>
                                <p class="subscriptions-inner__price">{{finalCostForYear}} &#8381;</p>
                                <p class="subscriptions-inner__item-text">{{Math.round(finalCostForYear/12)}} &#8381; /
                                    месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия – {{discountForYear*100}}%</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <button class="button subscriptions-inner__button" type="button" @click="buy">Купить</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SubscriptionInner",
    props: ["openMenu", 'listProfiles', 'menu', 'keySub', 'costPerDayOneMeal', 'edit', 'mealTypesExist', 'sub'],
    data() {
      return {
        breakfast: this.$props.mealTypesExist.includes('breakfast'),
        dinner: this.$props.mealTypesExist.includes('dinner'),
        brunch: this.$props.mealTypesExist.includes('brunch'),
        supper: this.$props.mealTypesExist.includes('supper'),
        lunch: this.$props.mealTypesExist.includes('lunch'),
        mealTypes: [],
        periodicity: 'seven_days',
        durationInMonths: 1,
        daysAmountForMonth: 30,
        daysAmountForThreeMonths: 90,
        daysAmountForSixMonths: 180,
        daysAmountForYear: 360,
        mealsPerDayAmount: 1,
        startedAt: "",
        finishedAt: "",
        finalCostForMonth: 0,
        finalCostForThreeMonths: 0,
        finalCostForSixMonths: 0,
        finalCostForYear: 0,
        discountForMonth: 0.35,
        discountForThreeMonths: 0.4,
        discountForSixMonths: 0.35,
        discountForYear: 0.5,
        discountForChoosingAfterFirstMeal: 0.05,
        discountForChoosingAllMeals: 0.05
      }
    },
    methods: {
      calculateCost() {
        this.countData()

        let finalCost = 0

        if (this.mealsPerDayAmount === 1) {
          finalCost = this.costPerDayOneMeal * this.mealsPerDayAmount
        } else if (this.mealsPerDayAmount === 5) {
          finalCost = this.costPerDayOneMeal * this.mealsPerDayAmount * (1 - this.discountForChoosingAllMeals)
        } else {
          finalCost = this.costPerDayOneMeal * this.mealsPerDayAmount * (1 - this.discountForChoosingAfterFirstMeal)
        }

        this.finalCostForMonth = Math.round(finalCost * this.daysAmountForMonth)
        this.finalCostForThreeMonths = Math.round(finalCost * this.daysAmountForThreeMonths * (1 - this.discountForThreeMonths))
        this.finalCostForSixMonths = Math.round(finalCost * this.daysAmountForSixMonths * (1 - this.discountForSixMonths))
        this.finalCostForYear = Math.round(finalCost * this.daysAmountForYear * (1 - this.discountForYear))

      },
      countData() {
        this.mealTypes = []

        if (this.breakfast) {
          this.mealTypes.push('breakfast')
        }
        if (this.dinner) {
          this.mealTypes.push('dinner')
        }
        if (this.supper) {
          this.mealTypes.push('supper')
        }
        if (this.brunch) {
          this.mealTypes.push('brunch')
        }
        if (this.lunch) {
          this.mealTypes.push('lunch')
        }

        this.mealsPerDayAmount = this.mealTypes.length

        let startedAt = new Date()
        let finishedAt = new Date();
        let finishInMonth = new Date();
        let finishInThreeMonths = new Date();
        let finishInSixMonths = new Date();
        let finishInYear = new Date();

        finishedAt.setMonth(startedAt.getMonth() + this.durationInMonths);
        finishInMonth.setMonth(startedAt.getMonth() + 1);
        finishInThreeMonths.setMonth(startedAt.getMonth() + 3);
        finishInSixMonths.setMonth(startedAt.getMonth() + 6);
        finishInYear.setMonth(startedAt.getMonth() + 12);

        this.daysAmountForMonth = Math.round((finishInMonth - startedAt) / (1000 * 60 * 60 * 24))
        this.daysAmountForThreeMonths = Math.round((finishInThreeMonths - startedAt) / (1000 * 60 * 60 * 24))
        this.daysAmountForSixMonths = Math.round((finishInSixMonths - startedAt) / (1000 * 60 * 60 * 24))
        this.daysAmountForYear = Math.round((finishInYear - startedAt) / (1000 * 60 * 60 * 24))

        this.startedAt = this.getStringDate(startedAt)
        this.finishedAt = this.getStringDate(finishedAt)

      },
      getStringDate(date) {
        let month = '' + (date.getMonth() + 1)
        let day = '' + (date.getDate())
        let year = date.getFullYear()

        if (month.length < 2)
          month = '0' + month;
        if (day.length < 2)
          day = '0' + day;

        return [year, month, day].join('-');
      },
      buy() {
        this.countData()
        let subscription = {}
        if (!this.$props.edit) {
          subscription['menu'] = this.menu
          subscription['mealTypes'] = this.mealTypes
          subscription['periodicity'] = this.periodicity
          subscription['startedAt'] = this.startedAt
          subscription['finishedAt'] = this.finishedAt

          this.$store.dispatch('menu/createSubscription', subscription).then(() => {
            this.$store.commit('error/SET_OK', "Подписка успешно оформлена")
          }).catch((e) => {
            this.$store.commit('error/SET_ERROR', e)
          })
        } else {
          subscription['mealTypes'] = this.mealTypes.filter((val) => {
            if (!this.$props.mealTypesExist.includes(val)) {
              return val
            }
          })

          subscription['id'] = this.$props.sub.id

          if (subscription.mealTypes.length > 0) {
            this.$store.dispatch('menu/editSubscription', subscription).then(() => {
              this.$store.dispatch('menu/getListSubscriptions')
              this.$store.commit('error/SET_OK', "Подписка успешно отредактирована")
            }).catch((e) => {
              this.$store.commit('error/SET_ERROR', e)
            })
          }
        }

      }
    },
    mounted() {
      this.calculateCost()
    },
    watch: {
      breakfast: function () {
        this.calculateCost()
      },
      dinner: function () {
        this.calculateCost()
      },
      brunch: function () {
        this.calculateCost()
      },
      supper: function () {
        this.calculateCost()
      },
      periodicity: function () {
        this.calculateCost()
      },
      durationInMonths: function () {
        this.calculateCost()
      },
    }
  }
</script>

<style scoped>

</style>
