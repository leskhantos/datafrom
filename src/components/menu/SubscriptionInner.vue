<template>
    <div :class="['subscriptions-inner__wrapper', { 'open':openMenu === keySub}]">
        <!--    <div :class="['subscriptions-inner__wrapper, open']">-->
        <div class="subscriptions-inner__container">
            <h3 class="subscriptions-inner__subtitle">Настройка меню</h3>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col">
                    <p><b>Шаг 1</b></p>
                    <p>Выберите профили</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="user__profile-list subscriptions-inner__user-list">
                        <li v-for="(item, key) in listProfiles" :key="key">
                            <label :class="['user__profile', { 'user__profile--main': item.isMain }]">
                                <input class="visually-hidden" type="checkbox" name="profile-2"
                                       :checked="item.isMain">
                                <div :class="['user__avatar', { 'user__avatar--big': item.isMain }]"><img
                                        :src="item.avatar.path"
                                        alt="avatar"></div>
                                <p class="user__name">{{item.fullName.firstName}}</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col">
                    <p><b>Шаг 2</b></p>
                    <p>Выберите приёмы пищи</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="subscriptions-inner__list">
                        <li>
                            <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-5"
                                   v-model="breakfast"
                                   checked>
                            <label class="subscriptions-inner__item" for="meals-5">
                                <p class="subscriptions-inner__item-name">Завтрак</p>
                                <p class="subscriptions-inner__price">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-6" v-model="dinner">
                            <label class="subscriptions-inner__item" for="meals-6">
                                <p class="subscriptions-inner__item-name">Обед</p>
                                <p class="subscriptions-inner__price">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-7" v-model="brunch">
                            <label class="subscriptions-inner__item" for="meals-7">
                                <p class="subscriptions-inner__item-name">Перекус</p>
                                <p class="subscriptions-inner__price">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-8" v-model="supper">
                            <label class="subscriptions-inner__item" for="meals-8">
                                <p class="subscriptions-inner__item-name">Ужин</p>
                                <p class="subscriptions-inner__price">+ {{costPerDayOneMeal}} &#8381;</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col">
                    <p><b>Шаг 3</b></p>
                    <p>Укажите дни питания</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="subscriptions-inner__list subscriptions-inner__list--type-2">
                        <li @click="periodicity='seven_days'">
                            <input class="visually-hidden" type="radio" name="day-2" id="day-3" checked
                            >
                            <label class="subscriptions-inner__item" for="day-3">
                                <p class="subscriptions-inner__item-name"><b>7 дней в неделю</b></p>
                                <p class="subscriptions-inner__item-text">с пн – вс</p>
                            </label>
                        </li>
                        <li @click="periodicity='five_days'">
                            <input class="visually-hidden" type="radio" name="day-2" id="day-4">
                            <label class="subscriptions-inner__item" for="day-4">
                                <p class="subscriptions-inner__item-name"><b>5 дней в неделю</b></p>
                                <p class="subscriptions-inner__item-text">с пн – пт</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col">
                    <p><b>Шаг 4</b></p>
                    <p>Стоимость</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="subscriptions-inner__list subscriptions-inner__list--type-2">
                        <li @click="durationInMonths=1">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-5"
                                   checked>
                            <label class="subscriptions-inner__item" for="price-5">
                                <p class="subscriptions-inner__item-name">Месяц</p>
                                <p class="subscriptions-inner__price">{{finalCostForMonth}} &#8381;</p>
                            </label>
                        </li>
                        <li @click="durationInMonths=3">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-6">
                            <label class="subscriptions-inner__item" for="price-6">
                                <p class="subscriptions-inner__item-name">3 месяца</p>
                                <p class="subscriptions-inner__price">{{finalCostForThreeMonths}} &#8381;</p>
                                <p class="subscriptions-inner__item-text">{{Math.round(finalCostForThreeMonths/3)}}
                                    &#8381; / месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия –
                                    {{discountForThreeMonths*100}}%</p>
                            </label>
                        </li>
                        <li @click="durationInMonths=6">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-7">
                            <label class="subscriptions-inner__item" for="price-7">
                                <p class="subscriptions-inner__item-name">6 месяца</p>
                                <p class="subscriptions-inner__price">{{finalCostForSixMonths}} &#8381;</p>
                                <p class="subscriptions-inner__item-text">{{Math.round(finalCostForSixMonths/6)}}
                                    &#8381; / месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия –
                                    {{discountForSixMonths*100}}%</p>
                            </label>
                        </li>
                        <li @click="durationInMonths=12">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-8">
                            <label class="subscriptions-inner__item" for="price-8">
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
    props: ["openMenu", 'listProfiles', 'menu', 'keySub', 'costPerDayOneMeal'],
    data() {
      return {
        breakfast: true,
        dinner: false,
        brunch: false,
        supper: false,
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
        discountForYear: 0.5
      }
    },
    methods: {
      calculateCost() {
        this.countData()

        let finalCost = 0
        let discountForChoosingAfterFirstMeal = 0.05
        let discountForChoosingAllMeals = 0.05

        if (this.mealsPerDayAmount === 1) {
          finalCost = this.costPerDayOneMeal * this.mealsPerDayAmount
        } else if (this.mealsPerDayAmount === 4) {
          finalCost = this.costPerDayOneMeal * this.mealsPerDayAmount * (1 - discountForChoosingAllMeals)
        } else {
          finalCost = this.costPerDayOneMeal * this.mealsPerDayAmount * (1 - discountForChoosingAfterFirstMeal)
        }

        this.finalCostForMonth = Math.round(finalCost * this.daysAmountForMonth * (1 - this.discountForMonth))
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

        subscription['menu'] = this.menu
        subscription['mealTypes'] = this.mealTypes
        subscription['periodicity'] = this.periodicity
        subscription['startedAt'] = this.startedAt
        subscription['finishedAt'] = this.finishedAt

        this.$store.dispatch('menu/createSubscription', subscription)
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