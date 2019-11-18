<template>
    <section class="grid">
        <div class="grid__column user__wrapper">
            <section class="paper user">
                <div class="user__profiles">
                    <label v-if="mainProfile.fullName != null" class="user__profile user__profile--main">
                        <input class="visually-hidden" type="radio" name="profile" checked>
                        <div v-if="mainProfile.avatar != null" class="user__avatar user__avatar--big"><img
                                :src="mainProfile.avatar.path"
                                alt="avatar"></div>
                        <p v-if="mainProfile.fullName.firstName != null" class="user__name">
                            {{mainProfile.fullName.firstName}}</p>
                    </label>
                    <ul class="user__profile-list">
                        <li v-for="(item, key) in listProfiles" :key="key">
                            <label class="user__profile" v-if="item.isMain == false">
                                <input class="visually-hidden" type="radio" name="profile">
                                <div v-if="item.avatar != null" class="user__avatar"><img :src="item.avatar.path"
                                                                                          alt="avatar">
                                </div>
                                <p v-if="item.fullName.firstName != null" class="user__name">
                                    {{item.fullName.firstName}}</p>
                            </label>
                        </li>
                        <li class="user__btn-add">
                            <button class="button-add button-add--green button-add--big" type="button">Добавить
                                профиль
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="user__menu">
                    <ul>
                        <li><a :class="['user__menu-link','user__menu-link--submenu', { 'open':open_menu }]" href=""
                               @click.prevent="open_menu=!open_menu">
                            <UserIcon />
                            <span>Редактирование профиля</span></a>
                            <div class="user__submenu-wrap">
                                <ul class="user__submenu">
                                    <li v-for="(item, key) in listProfiles" :key="key">
                                        <router-link class="user__menu-link"
                                                     href=""
                                                     :to="{ name: 'profile', params: { id: item.id }}">
                                            <div v-if="item.avatar != null" class="user__avatar"><img
                                                    :src="item.avatar.path"
                                                    alt="avatar"></div>
                                            <p v-if="item.fullName.firstName != null" class="user__name">
                                                {{item.fullName.firstName}}</p></router-link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a class="user__menu-link" href="">
                            <DiaryIcon />
                            <span>Дневник</span></a></li>
                        <li>
                            <router-link class="user__menu-link active" to="/purchases">
                                <PurchasesIcon />
                                <span>Покупки</span></router-link>
                        </li>
                        <li><a class="user__menu-link" href="">
                            <MenuIcon />
                            <span>Меню</span></a></li>
                        <li><a class="user__menu-link" href="">
                            <BlogIcon />
                            <span>Блог</span></a></li>
                        <li><a class="user__menu-link" href="">
                            <StatisticsIcon />
                            <span>Статистика</span></a></li>
                    </ul>
                </div>
            </section>
        </div>
    </section>
</template>

<script>
  import UserIcon from "./icons/UserIcon";
  import DiaryIcon from "./icons/DiaryIcon";
  import PurchasesIcon from "./icons/PurchasesIcon";
  import MenuIcon from "./icons/MenuIcon";
  import BlogIcon from "./icons/BlogIcon";
  import StatisticsIcon from "./icons/StatisticsIcon";

  export default {
    name: "AppProfile",
    data() {
      return {
        open_menu: false
      }
    },
    components: {
      UserIcon,
      DiaryIcon,
      PurchasesIcon,
      MenuIcon,
      BlogIcon,
      StatisticsIcon
    },
    computed: {
      listProfiles() {
        return this.$store.getters['user/getListProfiles'].items;
      },
      mainProfile() {
        return this.$store.getters['user/getMainProfile'];
      }
    },
    mounted() {
      this.$store.dispatch('user/getListProfiles'),
        this.$store.dispatch('user/getMainProfile')
    }
  }
</script>

<style scoped>

</style>
