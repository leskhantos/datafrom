<template>
    <section class="grid">
        <div class="grid__column user__wrapper">
            <section class="paper user">
                <div class="user__profiles">
                    <label v-if="mainProfile.fullName != null" class="user__profile user__profile--main">
                        <input class="visually-hidden" type="radio" name="profile" checked>
                        <div class="user__avatar user__avatar--big"><img
                                :src="mainProfile.avatar.path"
                                alt="avatar"></div>
                        <p v-if="mainProfile.title != null" class="user__name">
                            {{mainProfile.title}}</p>
                    </label>
                    <ul class="user__profile-list">
                        <li v-for="(item, key) in listProfilesWithoutMain" :key="key" @click="goToProfile(item.id)">
                            <label class="user__profile">
                                <input class="visually-hidden" type="radio" name="profile">
                                <div class="user__avatar"><img :src="item.avatar.path"
                                                               alt="avatar">
                                </div>
                                <p v-if="item.title != null" class="user__name">
                                    {{item.title}}</p>
                            </label>
                        </li>
                        <li class="user__btn-add">
                            <a class="button-add button-add--green button-add--big" type="button" @click="goToCreate">
                                Добавить профиль
                            </a>
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
                                        <div class="user__menu-link" @click.prevent="goToProfile(item.id)">
                                            <div class="user__avatar"><img
                                                    :src="item.avatar.path"
                                                    alt="avatar"></div>
                                            <p v-if="item.title != null" class="user__name">
                                                {{item.title}}</p></div>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li><a class="user__menu-link" href="">
                            <DiaryIcon />
                            <span>Дневник</span></a></li>
                        <li>
                            <router-link to="/purchases"
                                         :class="['user__menu-link', { 'active':this.$route.name === 'purchases' }]">
                                <PurchasesIcon />
                                <span>Покупки</span></router-link>
                        </li>
                        <li @click.prevent="activeMenu='Меню'">
                            <router-link
                                    href=""
                                    :to="{ name: 'menu'}"
                                    :class="['user__menu-link', { 'active':this.$route.name === 'menu' }]">
                                <MenuIcon />
                                <span>Меню</span></router-link>
                        </li>
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
    methods: {
      goToCreate() {
        this.$store.dispatch('user/getUserInfo').then(() => {
          this.$router.push({name: 'profile_create', params: {isOneExist: true, isEdit: false}})
        });
      },
      goToProfile(id) {
        this.$router.push({name: 'profile', params: {id: id}}).catch(() => {
        })
      }
    },
    computed: {
      listProfiles() {
        return this.$store.getters['user/getListProfiles'].items;
      },
      mainProfile() {
        return this.$store.getters['user/getMainProfile'];
      },
      listProfilesWithoutMain: function () {
        return this.$store.getters['user/getListProfiles'].items.filter(function (profile) {
          if (!profile.isMain) {
            return profile
          }
        })
      }
    },
    mounted() {
      this.$store.dispatch('user/getListProfiles')
      this.$store.dispatch('user/getMainProfile')
    }
  }
</script>

<style scoped>
    .button-add--big {
        cursor: pointer;
    }

    ul.user__submenu .user__menu-link {
        cursor: pointer;
    }
</style>
