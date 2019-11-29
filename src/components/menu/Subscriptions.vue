<template>
    <div>

        <article class="paper subscriptions-inner" v-for="(item, keySub) in listSubscriptions" :key="keySub">
            <div class="subscriptions-inner__image"><img src="/static/images/jpg/image-2.jpg" alt="diary"></div>
            <div class="subscriptions-inner__content">
                <div class="subscriptions-inner__title-wrap">
                    <h2 class="subscriptions-inner__caption">{{item.title}}</h2>
                    <p class="subscriptions-inner__calories">{{item.calories.min}} – {{item.calories.max}} калорий</p>
                </div>
                <div class="profiles-list__container">
                    <ul class="profiles-list">
                        <li v-for="(item, key) in listProfiles" :key="key"><img :src="item.avatar.path" alt="avatar">
                        </li>
                    </ul>
                </div>
                <div class="subscriptions-inner__desc">
                    <p>Описание меню</p>
                    <p>{{item.description}}</p>
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
                    :costPerDayOneMeal="item.costPerDayOneMeal"
                    :listProfiles="listProfiles"
                    :menu="item.id" />
            <subscription-settings
                    :openSettings="openSettings"
                    :keySub="keySub"
                    :costPerDayOneMeal="item.costPerDayOneMeal"
                    :listProfiles="listProfiles"
                    :menu="item.id"
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
        return this.$store.getters['menu/getListMenus'];
      }
    },
    methods: {
      openMenuTab(keySub) {
        this.openSettings = -1
        this.openMenu = keySub
      },
      openSettingsTab(keySub) {
        this.openMenu = -1,
          this.openSettings = keySub
      }
    },
    mounted() {
      this.$store.dispatch('user/getListProfiles')
      this.$store.dispatch('menu/getListMenus')
    }
  }
</script>

<style scoped>
    .subscriptions-inner__checked-profiles {
        margin: 0;
    }
</style>