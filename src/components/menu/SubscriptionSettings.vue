<template>
    <div :class="['subscriptions-inner__wrapper', { 'open':openSettings === keySub}]">
        <div class="subscriptions-inner__container">
            <h3 class="subscriptions-inner__subtitle">Настройка меню</h3>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col">
                    <p v-if="selectedProfile">Назначте для профиля
                        {{selectedProfile.title}} приём пищи</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="user__profile-list subscriptions-inner__user-list">
                        <li v-for="(item, key) in listProfiles" :key="key">
                            <label class="user__profile" @click="selectProfile(key)">
                                <input class="visually-hidden" type="radio" name="profile-1">
                                <div class="user__avatar">
                                    <img :src="item.avatar.path" alt="avatar">
                                </div>
                                <p class="user__name">{{item.title}}</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col"></div>
                <div class="subscriptions-inner__col">
                    <ul class="subscriptions-inner__list subscriptions-inner__list--5col">
                        <li v-if="subscription.mealTypes.includes('breakfast')">
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'1'"
                                   v-model="breakfast">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'1'">
                                <p class="subscriptions-inner__item-name">Завтрак</p>
                            </label>
                        </li>
                        <li v-if="subscription.mealTypes.includes('brunch')">
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'2'" v-model="brunch">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'2'">
                                <p class="subscriptions-inner__item-name">Перекус</p>
                            </label>
                        </li>
                        <li v-if="subscription.mealTypes.includes('dinner')">
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'3'" v-model="dinner">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'3'">
                                <p class="subscriptions-inner__item-name">Обед</p>
                            </label>
                        </li>
                        <li v-if="subscription.mealTypes.includes('lunch')">
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'4'" v-model="lunch">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'4'">
                                <p class="subscriptions-inner__item-name">Ланч</p>
                            </label>
                        </li>
                        <li v-if="subscription.mealTypes.includes('supper')">
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'5'" v-model="supper">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'5'">
                                <p class="subscriptions-inner__item-name">Ужин</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscriptions-inner__step-footer">
                <p>Подписка активна до 29 декабря 2018 года</p>
                <button class="button subscriptions-inner__button" type="button" @click.prevent="updateMeals()">Назначить</button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SubscriptionsSettings",
    props: ["openSettings", 'listProfiles', 'menu', 'keySub', 'costPerDayOneMeal', 'subscription'],
    data() {
      return {
        breakfast: false,
        dinner: false,
        brunch: false,
        lunch: false,
        supper: false,
        selectedProfile: '',
      }
    },
    methods: {
      selectProfile(key) {
        this.selectedProfile = this.$props.listProfiles[key]
      },
      updateMeals() {
        let meals = []

        this.breakfast ? meals = [...meals, "breakfast"] : meals = [...meals]
        this.dinner ? meals = [...meals, "dinner"] : meals = [...meals]
        this.brunch ? meals = [...meals, "brunch"] : meals = [...meals]
        this.lunch ? meals = [...meals, "lunch"] : meals = [...meals]
        this.supper ? meals = [...meals, "supper"] : meals = [...meals]

        if(meals.length < 1) {
          this.$store.commit('error/SET_ERROR', "Выберите приёмы пищи")

          return
        }

        if(!this.selectedProfile) {
          this.$store.commit('error/SET_ERROR', "Выберите профиль")

          return
        }

        this.$store.dispatch('menu/updateSubscription', {
          profile: this.selectedProfile.id,
          subscription: this.$props.subscription.id,
          mealTypes: meals
        }).then(() => {
          this.$store.commit('error/SET_OK', "Приемы пищи по подписке успешно отредактированы")
        })
      }
    },
    mounted() {
      let mealTypes = this.subscription.mealTypes

      if (mealTypes.includes("breakfast")) {
        this.breakfast = true
      }
      if (mealTypes.includes("dinner")) {
        this.dinner = true
      }
      if (mealTypes.includes("brunch")) {
        this.brunch = true
      }
      if (mealTypes.includes("lunch")) {
        this.lunch = true
      }
      if (mealTypes.includes("supper")) {
        this.supper = true
      }
    }
  }
</script>

<style scoped>

</style>
