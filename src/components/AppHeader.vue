<template>
    <header class="header">
        <div class="header__container">
            <button class="header__btn" type="button"><span>Меню</span></button><router-link class="header__logo" to="/">
            <AppLogo/>
        </router-link>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a class="nav__link" href="">Почему мы</a></li>
                    <li class="nav__item"><a class="nav__link" href="">Типы меню</a></li>
                    <li class="nav__item nav__item--submenu"><a class="nav__link nav__link--submenu" href="">Типы меню</a>
                        <div class="nav__submenu-wrap">
                            <ul class="nav__submenu">
                                <li><a class="nav__link" href="">История создания</a></li>
                                <li><a class="nav__link" href="">Отзывы</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav__item nav__item--submenu"><a class="nav__link nav__link--submenu" href="">Блог</a>
                        <div class="nav__submenu-wrap">
                            <ul class="nav__submenu">
                                <li><a class="nav__link" href="">Статьи</a></li>
                                <li><a class="nav__link" href="">Эксперты</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav__item"><a class="nav__link" href="">Дневник питания</a></li>
                    <li class="nav__item"><a class="nav__link" href="">Контакты</a></li>
                </ul>
            </nav><a class="badge header__info" href="" title="Информация"><span class="badge__count">2</span>
            <div class="badge__content">
                <InformationIcon/>
            </div></a><a class="badge header__notification" href="" title="Уведомления"><span class="badge__count">3</span>
            <div class="badge__content">
                <NotificationIcon/>
            </div></a>
            <router-link v-if="getAuth" class="header__login" to="" @click.native="logout">
            <LogoutIcon/>
            <span >Выход из<br> личного кабинета</span>
             </router-link>
            <router-link v-else class="header__login" to="/login">
                <LogoutIcon/>
                <span >Вход в<br> личный кабинет</span>
            </router-link>

        </div>
    </header>
</template>

<script>
    import AppLogo from "./AppLogo";
    import LogoutIcon from "./icons/LogoutIcon";
    import NotificationIcon from "./icons/NotificationIcon";
    import InformationIcon from "./icons/InformationIcon";
    export default {
        name: "Header",
        components:{
            AppLogo,
            LogoutIcon,
            NotificationIcon,
            InformationIcon
        },
        methods: {
            logout: function () {
                this.$store.dispatch('user/logout').then(() => {
                    this.$router.replace('login')
                })
            }
        },
        computed:{
            getAuth(){
                return this.$store.getters['user/isAuthenticated']
            }
        },
        }
</script>

<style scoped>

</style>
