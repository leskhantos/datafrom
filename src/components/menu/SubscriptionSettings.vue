<template>
    <div :class="['subscriptions-inner__wrapper', { 'open':openSettings === keySub}]">
        <div class="subscriptions-inner__container">
            <h3 class="subscriptions-inner__subtitle">Настройка меню</h3>
            <div class="subscriptions-inner__step">
                <div class="subscriptions-inner__col">
                    <p v-if="listProfiles[selectedProfileId]">Назначте для профиля
                        {{listProfiles[selectedProfileId].title}} приём пищи</p>
                </div>
                <div class="subscriptions-inner__col">
                    <ul class="user__profile-list subscriptions-inner__user-list">
                        <li v-for="(item, key) in listProfiles" :key="key">
                            <label class="user__profile" @click="selectedProfileId = key">
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
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'1'"
                                   v-model="breakfast">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'1'">
                                <p class="subscriptions-inner__item-name">Завтрак</p>
                                <!--p.subscriptions-inner__price + 125 &#8381;-->
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'2'" v-model="brunch">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'2'">
                                <p class="subscriptions-inner__item-name">Перекус</p>
                                <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'3'" v-model="dinner">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'3'">
                                <p class="subscriptions-inner__item-name">Обед</p>
                                <!--p.subscriptions-inner__price + 125 &#8381;-->
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'4'" v-model="lunch">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'4'">
                                <p class="subscriptions-inner__item-name">Ланч</p>
                                <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                            </label>
                        </li>
                        <li>
                            <input class="visually-hidden" type="checkbox" :name="'meal-1'+keySub"
                                   :id="'meals-'+keySub+'5'" v-model="supper">
                            <label class="subscriptions-inner__item" :for="'meals-'+keySub+'5'">
                                <p class="subscriptions-inner__item-name">Ужин</p>
                                <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscriptions-inner__step-footer">
                <p>Подписка активна до 29 декабря 2018 года</p>
                <button class="button subscriptions-inner__button" type="button">Назначить</button>
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
        selectedProfileId: '',
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

      this.selectedProfileId = 0
    }
  }
</script>

<style scoped>

</style>