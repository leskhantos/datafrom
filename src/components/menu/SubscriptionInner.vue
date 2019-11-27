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
                                <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-6" v-model="dinner">
                            <label class="subscriptions-inner__item" for="meals-6">
                                <p class="subscriptions-inner__item-name">Обед</p>
                                <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-7" v-model="branch">
                            <label class="subscriptions-inner__item" for="meals-7">
                                <p class="subscriptions-inner__item-name">Перекус</p>
                                <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-8" v-model="supper">
                            <label class="subscriptions-inner__item" for="meals-8">
                                <p class="subscriptions-inner__item-name">Ужин</p>
                                <p class="subscriptions-inner__price">+ 125 &#8381;</p>
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
                        <li @click="duration=1">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-5"
                                   checked>
                            <label class="subscriptions-inner__item" for="price-5">
                                <p class="subscriptions-inner__item-name">Месяц</p>
                                <p class="subscriptions-inner__price">500 &#8381;</p>
                            </label>
                        </li>
                        <li @click="duration=3">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-6">
                            <label class="subscriptions-inner__item" for="price-6">
                                <p class="subscriptions-inner__item-name">3 месяца</p>
                                <p class="subscriptions-inner__price">1200 &#8381;</p>
                                <p class="subscriptions-inner__item-text">400 &#8381; / месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия – 20%</p>
                            </label>
                        </li>
                        <li @click="duration=6">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-7">
                            <label class="subscriptions-inner__item" for="price-7">
                                <p class="subscriptions-inner__item-name">6 месяца</p>
                                <p class="subscriptions-inner__price">1200 &#8381;</p>
                                <p class="subscriptions-inner__item-text">400 &#8381; / месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия – 20%</p>
                            </label>
                        </li>
                        <li @click="duration=12">
                            <input class="visually-hidden" type="radio" name="price-2" id="price-8">
                            <label class="subscriptions-inner__item" for="price-8">
                                <p class="subscriptions-inner__item-name">Год</p>
                                <p class="subscriptions-inner__price">1200 &#8381;</p>
                                <p class="subscriptions-inner__item-text">400 &#8381; / месяц</p>
                                <p class="subscriptions-inner__item-text green">Экономия – 20%</p>
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
    props: ["openMenu", 'listProfiles', 'menu', 'keySub'],
    data() {
      return {
        breakfast: true,
        dinner: false,
        branch: false,
        supper: false,
        mealTypes: [],
        periodicity: 'seven_days',
        duration: 0
      }
    },
    methods: {
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
        if (this.branch) {
          this.mealTypes.push('branch')
        }

        if (this.fiveDays) {
          this.periodicity = 'five_days'
        } else if (this.sevenDays) {
          this.periodicity = 'seven_days'
        }

        let startedAt = new Date()
        let finishedAt = new Date();
        finishedAt.setMonth(finishedAt.getMonth() + this.duration);

        startedAt = this.getStringDate(startedAt)
        finishedAt = this.getStringDate(finishedAt)

        let subscription = {}

        subscription['menu'] = this.menu
        subscription['mealTypes'] = this.mealTypes
        subscription['periodicity'] = this.periodicity
        subscription['startedAt'] = startedAt
        subscription['finishedAt'] = finishedAt

        this.$store.dispatch('menu/createSubscription', subscription)
      }
    }
  }
</script>

<style scoped>

</style>