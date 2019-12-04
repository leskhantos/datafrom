<template>
    <main class="page">
        <BreadCrumbs />
        <section class="menu">
            <AppProfile />
            <div class="grid__column">
                <div class="title__wrapper">
                    <h1 class="title">Меню</h1>
                </div>
                <article class="paper subscriptions-inner">
                    <div class="subscriptions-inner__image"><img :src="menu.cover" alt="diary"></div>
                    <div class="subscriptions-inner__content">
                        <div class="subscriptions-inner__title-wrap">
                            <h2 class="subscriptions-inner__caption">{{menu.title}}</h2>
                            <p class="subscriptions-inner__calories">1500 – 2500 калорий</p>
                        </div>
                        <div class="subscriptions-inner__desc">
                            <p>Описание меню</p>
                            <p>{{menu.description}}</p>
                        </div>
                    </div>

                    <subscription-inner
                            :openMenu="1"
                            :keySub="1"
                            :costPerDayOneMeal="menu.costPerDayOneMeal"
                            :listProfiles="[]"
                            :mealTypesExist="[]"
                            :menu="id" />
                </article>
            </div>
        </section>
    </main>
</template>

<script>
  import BreadCrumbs from "@/components/BreadCrumbs";
  import AppProfile from "@/components/AppProfile";
  import SubscriptionInner from "@/components/menu/SubscriptionInner";

  export default {
    components: {
      AppProfile,
      BreadCrumbs,
      "subscription-inner": SubscriptionInner,
    },
    name: "Menu",
    props: ["id"],
    data() {
      return {}
    },
    computed: {
      menu() {
        return this.$store.getters['menu/getMenu'] ? this.$store.getters['menu/getMenu'] : {}
      }
    },
    watch: {},
    mounted() {
      this.$store.dispatch('menu/getMenu', this.$props.id)
    }
  }

</script>

<style scoped>
</style>
