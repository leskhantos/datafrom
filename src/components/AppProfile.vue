<template>
    <section class="grid">
    <div class="grid__column user__wrapper">
            <section class="paper user">
                <div class="user__profiles">
                    <label class="user__profile user__profile--main">
                        <input class="visually-hidden" type="radio" name="profile" checked>
                        <div class="user__avatar user__avatar--big"><img src="@/assets/images/jpg/avatar.jpg" alt="avatar"></div>
                        <p class="user__name">Ольга</p>
                    </label>
                    <ul class="user__profile-list">
                        <li>
                            <label class="user__profile">
                                <input class="visually-hidden" type="radio" name="profile">
                                <div class="user__avatar">
                                    <!--img(src="./images/jpg/avatar-1.jpg", alt="avatar")-->
                                </div>
                                <p class="user__name">Александр</p>
                            </label>
                        </li>
                        <li>
                            <label class="user__profile">
                                <input class="visually-hidden" type="radio" name="profile">
                                <div class="user__avatar"><img src="@/assets/images/jpg/avatar-1.jpg" alt="avatar"></div>
                                <p class="user__name">Иван</p>
                            </label>
                        </li>
                        <li>
                            <label class="user__profile">
                                <input class="visually-hidden" type="radio" name="profile">
                                <div class="user__avatar"><img src="@/assets/images/jpg/avatar-2.jpg" alt="avatar"></div>
                                <p class="user__name">Степан</p>
                            </label>
                        </li>
                        <li class="user__btn-add">
                            <button class="button-add button-add--green button-add--big" type="button">Добавить профиль</button>
                        </li>
                    </ul>
                </div>
                <div class="user__menu">
                    <ul>
                        <li><a class="user__menu-link user__menu-link--submenu" href="">
                            <UserIcon/>
                            <span>Редактирование профиля</span></a>
                            <div class="user__submenu-wrap">
                                <ul class="user__submenu">
                                    <li><a class="user__menu-link" href="">
                                        <div class="user__avatar"><img src="@/assets/images/jpg/avatar.jpg" alt="avatar"></div>
                                        <p class="user__name">Ольга</p></a></li>
                                    <li><a class="user__menu-link" href="">
                                        <div class="user__avatar"><img src="@/assets/images/jpg/avatar-1.jpg" alt="avatar"></div>
                                        <p class="user__name">Иван</p></a></li>
                                    <li><a class="user__menu-link" href="">
                                        <div class="user__avatar"><img src="@/assets/images/jpg/avatar-2.jpg" alt="avatar"></div>
                                        <p class="user__name">Степан</p></a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a class="user__menu-link" href="">
                            <DiaryIcon/>
                            <span>Дневник</span></a></li>
                        <li><router-link class="user__menu-link active" to="/purchases">
                            <PurchasesIcon/>
                            <span>Покупки</span></router-link></li>
                        <li><a class="user__menu-link" href="">
                            <MenuIcon/>
                            <span>Меню</span></a></li>
                        <li><a class="user__menu-link" href="">
                            <BlogIcon/>
                            <span>Блог</span></a></li>
                        <li><a class="user__menu-link" href="">
                            <StatisticsIcon/>
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
        components:{
            UserIcon,
            DiaryIcon,
            PurchasesIcon,
            MenuIcon,
            BlogIcon,
            StatisticsIcon
        }
    }
</script>

<style scoped>

</style>