<template>
    <section class="grid">
        <div class="grid__column user__wrapper">
            <section class="paper user">
                <div class="user__profiles">
                    <label class="user__profile user__profile--main">
                        <input class="visually-hidden" type="radio" name="profile" checked>
                        <div class="user__avatar user__avatar--big"><img src="@/assets/images/jpg/avatar.jpg"
                                                                         alt="avatar"></div>
                        <p class="user__name">Ольга</p>
                    </label>
                    <ul class="user__profile-list">
                        <li v-for="(item, key) in listProfiles" :key="key">
                            <label class="user__profile" v-if="item.isMain === false">
                                <input class="visually-hidden" type="radio" name="profile">
                                <div v-if="item.avatar !== null" class="user__avatar"><img :src="item.avatar.path"
                                                                                           alt="avatar">
                                </div>
                                <p class="user__name">{{item.fullName.firstName}}</p>
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
                        <li><a class="user__menu-link user__menu-link--submenu" href="">
                            <UserIcon />
                            <span>Редактирование профиля</span></a>
                            <div class="user__submenu-wrap">
                                <ul class="user__submenu">
                                    <li v-for="(item, key) in listProfiles" :key="key"><a class="user__menu-link"
                                                                                          href="">
                                        <div v-if="item.avatar !== null" class="user__avatar"><img
                                                :src="item.avatar.path"
                                                alt="avatar"></div>
                                        <p class="user__name">{{item.fullName.firstName}}</p></a></li>
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
  import UserIcon from "./UserIcon";
  import DiaryIcon from "./DiaryIcon";
  import PurchasesIcon from "./PurchasesIcon";
  import MenuIcon from "./MenuIcon";
  import BlogIcon from "./BlogIcon";
  import StatisticsIcon from "./StatisticsIcon";

  export default {
    name: "AppProfile",
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
      }
    },
    mounted() {
      this.$store.dispatch('user/getListProfiles')
    }
  }
</script>

<style scoped>

</style>