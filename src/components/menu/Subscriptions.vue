<template>
    <div>

        <article class="paper subscriptions-inner" v-for="(item, keySub) in listSubscriptions" :key="keySub">
            <div class="subscriptions-inner__image"><img src="/static/images/jpg/image-2.jpg" alt="diary"></div>
            <div class="subscriptions-inner__content">
                <div class="subscriptions-inner__title-wrap">
                    <h2 class="subscriptions-inner__caption">{{item.menu.title}}</h2>
                    <p class="subscriptions-inner__calories">{{item.menu.calories.min}} – {{item.menu.calories.max}}
                        калорий</p>
                </div>
                <div class="profiles-list__container">
                    <ul class="profiles-list">
                        <li v-for="(item, key) in listProfiles" :key="key"><img :src="item.avatar.path" alt="avatar">
                        </li>
                    </ul>
                </div>
                <div class="subscriptions-inner__desc">
                    <p>Описание меню</p>
                    <p>{{item.menu.description}}</p>
                </div>
                <div class="subscriptions-inner__btn-group">
                    <button class="button" type="button" @click="openMenu===keySub ? openMenu=-1 : openMenuTab(keySub)">
                        Изменить подписку
                    </button>
                    <button :class="['button button--no-fill subscriptions-inner__btn', { 'open':openSettings === keySub}]"
                            type="button" @click="openSettings===keySub ? openSettings=-1 : openSettingsTab(keySub)">
                        <span>Настроить меню</span>
                        <ArrowDownIcon />
                    </button>
                </div>
            </div>
            <subscription-inner
                    :openMenu="openMenu"
                    :keySub="keySub"
                    :costPerDayOneMeal="item.menu.costPerDayOneMeal"
                    :listProfiles="listProfiles"
                    :edit="true"
                    :mealTypesExist="item.mealTypes"
                    :menu="item.menu.id"
                    :sub="item" />
            <subscription-settings
                    :openSettings="openSettings"
                    :keySub="keySub"
                    :costPerDayOneMeal="item.menu.costPerDayOneMeal"
                    :listProfiles="listProfiles"
                    :menu="item.menu.id"
                    :subscription="item" />
        </article>
    </div>
</template>

<script>
  import ArrowDownIcon from "../icons/ArrowDownIcon";
  import SubscriptionInner from "./SubscriptionInner";
  import SubscriptionSettings from "./SubscriptionSettings";

  export default {
    name: "Subscriptions",
    components: {
      ArrowDownIcon,
      "subscription-inner": SubscriptionInner,
      "subscription-settings": SubscriptionSettings
    },
    data() {
      return {
        openMenu: -1,
        openSettings: -1
      }
    },
    computed: {
      listProfiles() {
        return this.$store.getters['user/getListProfiles'].items;
      },
      listSubscriptions() {
        let subs = this.$store.getters['menu/getListSubscriptions']
        return subs.sort((a, b) => {
          return a.id - b.id
        });
      }
    },
    methods: {
      openMenuTab(keySub) {
        this.openSettings = -1
        this.openMenu = keySub
      },
      openSettingsTab(keySub) {
        this.openMenu = -1
        this.openSettings = keySub
      }
    },
    mounted() {
      this.$store.dispatch('user/getListProfiles').then(() => {
        let profiles = this.$store.getters['user/getListProfiles']
        if (profiles.items.length > 0) {
          profiles.items.forEach((item) => {
            this.$store.dispatch('menu/getProfileMeals', item.id)
          })
        }
      })
      this.$store.dispatch('menu/getListSubscriptions')
    }
  }
</script>

<style scoped>
    .subscriptions-inner__checked-profiles {
        margin: 0;
    }
</style>
