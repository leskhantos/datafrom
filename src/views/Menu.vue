<template>
    <main class="page">
        <BreadCrumbs />
        <section class="menu">
            <AppProfile />
            <div class="menu__container">
                <div class="title__wrapper">
                    <h1 class="title">{{title}}</h1>
                    <div class="tabs__buttons tabs__buttons--green menu__title-tabs">
                        <a :class="['tabs__btn', { 'active':open_menu }]" href=""
                           @click.prevent="open_menu=!open_menu">Меню</a>
                        <a :class="['tabs__btn', { 'active': !open_menu }]" href=""
                           @click.prevent="open_menu=!open_menu">Мои подписки</a></div>
                </div>
                <component
                        :is="currentMenu"
                >
                </component>
            </div>
        </section>
    </main>
</template>

<script>
  import BreadCrumbs from "@/components/BreadCrumbs";
  import AppProfile from "@/components/AppProfile";
  import Subscriptions from '@/components/menu/Subscriptions'
  import MenuInner from '@/components/menu/MenuInner'

  export default {
    components: {
      AppProfile,
      BreadCrumbs,
      Subscriptions,
      MenuInner
    },
    name: "Menu",
    data() {
      return {
        open_menu: true,
        title: 'Меню',
      }
    },
    computed: {
      currentMenu() {
        if (this.open_menu) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.title = 'Меню'
          return 'MenuInner'
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.title = 'Подписки'
          return 'Subscriptions'
        }
      },
    },
  }

</script>

<style scoped>
    /*.title__wrapper{*/
    /*    max-width: 1364px;*/
    /*}*/
    /*.grid__column{*/
    /*    max-width: 1364px;*/
    /*}*/
</style>