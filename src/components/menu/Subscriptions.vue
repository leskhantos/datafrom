<template>
    <div>
        <article class="paper subscriptions-inner" v-for="(item, key) in listSubscriptions" :key="key">
            <div class="subscriptions-inner__image"><img src="/static/images/jpg/image-1.jpg" alt="diary"></div>
            <div class="subscriptions-inner__content">
                <div class="subscriptions-inner__title-wrap">
                    <h2 class="subscriptions-inner__caption">{{item.menu.title}}</h2>
                    <p class="subscriptions-inner__calories">{{item.menu.calories.min}} – {{item.menu.calories.max}}
                        калорий</p>
                </div>
                <ul class="subscriptions-inner__checked-profiles" v-for="(item, key) in listProfiles" :key="key">
                    <li><img :src="item.avatar.path"
                             alt="avatar"></li>
                </ul>
                <div class="subscriptions-inner__desc">
                    <p>Описание меню</p>
                    <p>{{item.menu.description}}</p>
                </div>
                <button :class="['subscriptions-inner__btn', { 'open':openMenu }]" type="button"
                        @click.prevent="openMenu=!openMenu">
                    <span>Оформить подписку</span>
                    <ArrowDownIcon />
                </button>
            </div>

            <subscription-inner
                    :openMenu="openMenu"></subscription-inner>
        </article>
    </div>
</template>

<script>
  import ArrowDownIcon from "../icons/ArrowDownIcon";
  import SubscriptionInner from "./SubscriptionInner";

  export default {
    name: "Subscriptions",
    components: {
      ArrowDownIcon,
      "subscription-inner": SubscriptionInner
    },
    data() {
      return {
        openMenu: false
      }
    },
    computed: {
      listProfiles() {
        return this.$store.getters['user/getListProfiles'].items;
      },
      listSubscriptions() {
        return this.$store.getters['menu/getListSubscriptions'];
      }
    },
    mounted() {
      this.$store.dispatch('user/getListProfiles'),
        this.$store.dispatch('menu/getListSubscriptions')
    }
  }
</script>

<style scoped>
    .subscriptions-inner__checked-profiles {
        margin: 0;
    }
</style>