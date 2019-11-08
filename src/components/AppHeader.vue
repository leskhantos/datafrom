<template>
    <header class="header">
        <div class="header__container">
            <button class="header__btn" type="button"><span>Меню</span></button><router-link class="header__logo" to="/"><img src="/static/images/svg/logo.svg" alt="OnlineKitchen"></router-link>
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
            <div class="badge__content"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50" fill="#000000">
                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"/>
            </svg>

            </div></a><a class="badge header__notification" href="" title="Уведомления"><span class="badge__count">3</span>
            <div class="badge__content"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m450.201 407.453c-1.505-.977-12.832-8.912-24.174-32.917-20.829-44.082-25.201-106.18-25.201-150.511 0-.193-.004-.384-.011-.576-.227-58.589-35.31-109.095-85.514-131.756v-34.657c0-31.45-25.544-57.036-56.942-57.036h-4.719c-31.398 0-56.942 25.586-56.942 57.036v34.655c-50.372 22.734-85.525 73.498-85.525 132.334 0 44.331-4.372 106.428-25.201 150.511-11.341 24.004-22.668 31.939-24.174 32.917-6.342 2.935-9.469 9.715-8.01 16.586 1.473 6.939 7.959 11.723 15.042 11.723h109.947c.614 42.141 35.008 76.238 77.223 76.238s76.609-34.097 77.223-76.238h109.947c7.082 0 13.569-4.784 15.042-11.723 1.457-6.871-1.669-13.652-8.011-16.586zm-223.502-350.417c0-14.881 12.086-26.987 26.942-26.987h4.719c14.856 0 26.942 12.106 26.942 26.987v24.917c-9.468-1.957-19.269-2.987-29.306-2.987-10.034 0-19.832 1.029-29.296 2.984v-24.914zm29.301 424.915c-25.673 0-46.614-20.617-47.223-46.188h94.445c-.608 25.57-21.549 46.188-47.222 46.188zm60.4-76.239c-.003 0-213.385 0-213.385 0 2.595-4.044 5.236-8.623 7.861-13.798 20.104-39.643 30.298-96.129 30.298-167.889 0-63.417 51.509-115.01 114.821-115.01s114.821 51.593 114.821 115.06c0 .185.003.369.01.553.057 71.472 10.25 127.755 30.298 167.286 2.625 5.176 5.267 9.754 7.861 13.798z"/></svg>

            </div></a><a class="header__login" href="" @click="logout"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 467.2">
            <path d="M356.5,221.3l-54.8-38.6c-9.9-7-23.6,0.1-23.6,12.3v23.6H15c-8.3,0-15,6.7-15,15c0,8.3,6.7,15,15,15h263v23.6
    c0,12.2,13.8,19.2,23.6,12.3l54.8-38.6C364.9,239.9,364.9,227.3,356.5,221.3z"/>
            <path d="M278.4,0C192.3,0,116.6,46.8,76.1,116.8c-4.1,7.2-1.7,16.3,5.5,20.5c7.2,4.1,16.3,1.7,20.5-5.5
    C137.3,70.9,203.1,30,278.4,30C390.7,30,482,121.3,482,233.6s-91.3,203.6-203.6,203.6c-75.3,0-141.2-40.9-176.4-101.8
    c-4.1-7.2-13.3-9.6-20.5-5.5c-7.2,4.1-9.6,13.3-5.5,20.5c40.5,70,116.2,116.8,202.3,116.8c129.1,0,233.6-104.5,233.6-233.6
    C512,104.5,407.5,0,278.4,0z"/>
        </svg>
           <span>Выход из<br> личного кабинета</span></a>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            logout: function () {
                this.$store.dispatch('user/logout').then(() => {
                    this.$router.replace('login')
                })
            }
        },
        mounted() {
            let staticScript = document.createElement('script')
            staticScript.setAttribute('src', '/static/js/main.js')
            staticScript.setAttribute('id', 'main-js')
            staticScript.async = true
            document.head.appendChild(staticScript)
        }
        }
</script>

<style scoped>

</style>