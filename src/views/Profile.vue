<template>
    <body>
    <AppHeader />
    <main class="page">
        <BreadCrumbs />
        <section class="grid">
            <AppProfile />
            <div class="grid__column">
                <div class="title__wrapper">
                    <h1 class="title">Профиль</h1>
                </div>
                <div class="paper profile">
                    <div class="profile__col">
                        <div class="user__avatar profile__avatar"><img src="@/assets/images/jpg/avatar.jpg"
                                                                       alt="avatar"></div>
                        <div class="profile__fields-wrap">
                            <div class="profile__field">
                                <p class="profile__label">Имя</p>
                                <p class="profile__input">
                                    <Face />
                                    <span>{{this.firstName}}</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">E-mail</p>
                                <p class="profile__input">
                                    <Email />
                                    <span>mail@mail.ru</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">Телефон</p>
                                <p class="profile__input">
                                    <Phone />
                                    <span>+7 (921) 315-57-75</span>
                                </p>
                            </div>
                        </div>
                        <a class="profile__edit" href="">
                            <svg height="30" viewBox="0 -1 401.52289 401" width="30" xmlns="http://www.w3.org/2000/svg">
                                <path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" />
                                <path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" />
                            </svg>
                            <span>Редактировать профиль</span></a>
                        <button class="profile__btn-logout" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 467.2" width="30" height="30">
                                <path d="M356.5,221.3l-54.8-38.6c-9.9-7-23.6,0.1-23.6,12.3v23.6H15c-8.3,0-15,6.7-15,15c0,8.3,6.7,15,15,15h263v23.6
    c0,12.2,13.8,19.2,23.6,12.3l54.8-38.6C364.9,239.9,364.9,227.3,356.5,221.3z" />
                                <path d="M278.4,0C192.3,0,116.6,46.8,76.1,116.8c-4.1,7.2-1.7,16.3,5.5,20.5c7.2,4.1,16.3,1.7,20.5-5.5
    C137.3,70.9,203.1,30,278.4,30C390.7,30,482,121.3,482,233.6s-91.3,203.6-203.6,203.6c-75.3,0-141.2-40.9-176.4-101.8
    c-4.1-7.2-13.3-9.6-20.5-5.5c-7.2,4.1-9.6,13.3-5.5,20.5c40.5,70,116.2,116.8,202.3,116.8c129.1,0,233.6-104.5,233.6-233.6
    C512,104.5,407.5,0,278.4,0z" />
                            </svg>
                            <span>Выйти из аккаунта</span>
                        </button>
                    </div>
                    <div class="profile__col">
                        <h2 class="profile__caption">Информация о профиле</h2>
                        <div class="profile__fields-wrap">
                            <div class="profile__field">
                                <p class="profile__label">Пол</p>
                                <p class="profile__input">
                                    <Face />
                                    <span>{{this.gender}}</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">Возраст</p>
                                <p class="profile__input">
                                    <Cake />
                                    <span>{{this.birthDate}} лет</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">Вес</p>
                                <p class="profile__input">
                                    <Weight />
                                    <span>{{this.weight}} кг</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">Рост</p>
                                <p class="profile__input">
                                    <Height />
                                    <span>{{this.height}} см</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">Активность</p>
                                <p class="profile__input">
                                    <Activity />
                                    <span>Средняя активность</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">Цель</p>
                                <p class="profile__input">
                                    <Target />
                                    <span>{{this.target}}</span>
                                </p>
                            </div>
                            <div class="profile__field">
                                <p class="profile__label">Аллергены</p>
                                <p class="profile__input">
                                    <Allerg />
                                    <span>Морковь, свекла</span>
                                </p>
                            </div>
                        </div>
                        <button class="button profile__btn" type="button">Расчёт калорийности и БЖУ</button>
                    </div>
                </div>
                <div class="paper subscriptions">
                    <h2 class="subscriptions__title">Подписки</h2>
                    <ul class="subscriptions__list">
                        <li><a class="subscriptions__link" href="">
                            <p class="subscriptions__name">Классик</p>
                            <p class="subscriptions__ccal">1500 – 2500 калорий</p>
                            <button class="subscriptions__item-btn" type="button">Описание меню</button>
                        </a></li>
                        <li><a class="subscriptions__link" href="">
                            <p class="subscriptions__name">Классик</p>
                            <p class="subscriptions__ccal">1500 – 2500 калорий</p>
                            <button class="subscriptions__item-btn" type="button">Описание меню</button>
                        </a></li>
                        <li><a class="subscriptions__link" href="">
                            <p class="subscriptions__name">Классик</p>
                            <p class="subscriptions__ccal">1500 – 2500 калорий</p>
                            <button class="subscriptions__item-btn" type="button">Описание меню</button>
                        </a></li>
                    </ul>
                    <button class="button subscriptions__btn" type="button">Добавить подписку</button>
                </div>
            </div>
        </section>
        <AppModals />
    </main>
    </body>
</template>

<script>
  import AppHeader from "../components/AppHeader";
  import AppModals from "../components/AppModals";
  import BreadCrumbs from "../components/BreadCrumbs";
  import AppProfile from "../components/AppProfile";
  import Face from "../components/icons/Face";
  import Email from "../components/icons/Email";
  import Phone from "../components/icons/Phone";
  import Cake from "../components/icons/Cake";
  import Weight from "../components/icons/Weight";
  import Height from "../components/icons/Height";
  import Activity from "../components/icons/Activity";
  import Target from "../components/icons/Target";
  import Allerg from "../components/icons/Allerg";

  export default {
    props: ['id'],
    components: {
      AppHeader,
      AppModals,
      BreadCrumbs,
      AppProfile,
      Face,
      Email,
      Phone,
      Cake,
      Weight,
      Height,
      Activity,
      Target,
      Allerg
    },
    data() {
      return {
        birthDate: '',
        firstName: '',
        gender: '',
        height: '',
        weight: '',
        target: '',
      }
    },
    methods: {
      getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
    },
    computed: {
      getProfile() {
        return this.$store.getters['user/getProfile'];
      }
    },
    created() {
      const id = this.id
      this.$store.dispatch('user/getProfile', id).then(() => {
        let profile = this.$store.getters['user/getProfile'];
        this.birthDate = this.getAge(profile.birthDate);
        this.firstName = profile.fullName.firstName
        if (profile.gender == 'male') {
          this.gender = "Мужчина"
        } else {
          this.gender = "Женщина"
        }
        this.height = profile.height
        this.weight = profile.weight
        this.target = profile.target
      })
    }
  }
</script>

<style scoped>
</style>