<template>
    <main class="page">
        <BreadCrumbs />
        <section class="grid">
            <AppProfile />
            <div class="grid__column">
                <div class="title__wrapper">
                    <h1 class="title">Профиль</h1>
                </div>
                <!--                <div id="app">-->
                <!--                    <child :text="message"></child>-->
                <!--                    <child :text="message"></child>-->
                <!--                </div>-->
                <div class="paper profile">
                    <button class="icon-button buy__item-action" type="button" title="Действия"
                            @click="openActions=!openActions">
                        <svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                            <circle cx="64" cy="256" r="64" />
                            <circle cx="64" cy="448" r="64" />
                            <circle cx="64" cy="64" r="64" />
                        </svg>

                    </button>
                    <section :class="['paper','actions','anim-show-action', { 'show':openActions }]">
                        <div class="actions__item"><a class="profile__edit" @click="goToEdit">
                            <EditIcon />
                            <span>Редактировать профиль</span></a></div>
                        <div class="actions__item">
                            <button class="profile__btn-logout" type="button">
                                <CloseIcon />
                                <span>Выйти из аккаунта</span>
                            </button>
                        </div>
                    </section>
                    <div class="profile__col">
                        <div class="user__avatar profile__avatar">
                            <img :src="avatar.path"
                                 alt="avatar">
                        </div>
                        <div class="profile__fields-wrap">
                            <paragraph-profile>
                                <div slot="icon">
                                    <FaceIcon />
                                </div>
                                <p class="profile__label" slot="item">Имя</p>
                                <span slot="label">{{this.title}}</span>
                            </paragraph-profile>
                            <!--                            <paragraph-profile>-->
                            <!--                                <div slot="icon">-->
                            <!--                                    <EmailIcon />-->
                            <!--                                </div>-->
                            <!--                                <p class="profile__label" slot="item">E-mail</p>-->
                            <!--                                <span slot="label">mail@mail.ru</span>-->
                            <!--                            </paragraph-profile>-->
                            <!--                            <paragraph-profile>-->
                            <!--                                <div slot="icon">-->
                            <!--                                    <PhoneIcon />-->
                            <!--                                </div>-->
                            <!--                                <p class="profile__label" slot="item">Телефон</p>-->
                            <!--                                <span slot="label">+7 (921) 315-57-75</span>-->
                            <!--                            </paragraph-profile>-->
                        </div>
                        <!--            <a class="profile__edit" href="">-->
                        <!--                <EditIcon />-->
                        <!--                <span>Редактировать профиль</span></a>-->
                        <!--            <button class="profile__btn-logout" type="button">-->
                        <!--                <CloseIcon />-->
                        <!--                <span>Выйти из аккаунта</span>-->
                        <!--            </button>-->
                    </div>
                    <div class="profile__col">
                        <h2 class="profile__caption">Информация о профиле</h2>
                        <div class="profile__fields-wrap">
                            <paragraph-profile>
                                <div slot="icon">
                                    <FaceIcon />
                                </div>
                                <p class="profile__label" slot="item">Пол</p>
                                <span slot="label">{{this.gender}}</span>
                            </paragraph-profile>
                            <paragraph-profile>
                                <div slot="icon">
                                    <CakeIcon />
                                </div>
                                <p class="profile__label" slot="item">Возраст</p>
                                <span slot="label">{{this.birthDate}} лет</span>
                            </paragraph-profile>
                            <paragraph-profile>
                                <div slot="icon">
                                    <WeightIcon />
                                </div>
                                <p class="profile__label" slot="item">Вес</p>
                                <span slot="label">{{this.weight}} кг</span>
                            </paragraph-profile>
                            <paragraph-profile>
                                <div slot="icon">
                                    <HeightIcon />
                                </div>
                                <p class="profile__label" slot="item">Рост</p>
                                <span slot="label">{{this.height}} см</span>
                            </paragraph-profile>
                            <paragraph-profile>
                                <div slot="icon">
                                    <ActivityIcon />
                                </div>
                                <p class="profile__label" slot="item">Активность</p>
                                <span slot="label">Средняя активность</span>
                            </paragraph-profile>
                            <paragraph-profile>
                                <div slot="icon">
                                    <TargetIcon />
                                </div>
                                <p class="profile__label" slot="item">Цель</p>
                                <span slot="label">{{this.target}}</span>
                            </paragraph-profile>
                            <paragraph-profile>
                                <div slot="icon">
                                    <AllergIcon />
                                </div>
                                <p class="profile__label" slot="item">Аллергены</p>
                                <span slot="label">Морковь, свекла</span>
                            </paragraph-profile>
                        </div>
                        <button class="button profile__btn" type="button" @click="goToCalculate">Расчёт калорийности и БЖУ</button>
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
    </main>
</template>

<script>
  import ParagraphProfile from '../components/ParagraphProfile'
  import BreadCrumbs from "../components/BreadCrumbs";
  import AppProfile from "../components/AppProfile";
  // import EmailIcon from "../components/icons/EmailIcon";
  // import PhoneIcon from "../components/icons/PhoneIcon";
  import ActivityIcon from "../components/icons/ActivityIcon";
  import AllergIcon from "../components/icons/AllergIcon";
  import FaceIcon from "../components/icons/FaceIcon";
  import HeightIcon from "../components/icons/HeightIcon";
  import WeightIcon from "../components/icons/WeightIcon";
  import CakeIcon from "../components/icons/CakeIcon";
  import TargetIcon from "../components/icons/TargetIcon";
  import EditIcon from "../components/icons/EditIcon";
  import CloseIcon from "../components/icons/CloseIcon";


  export default {

    props: ['id'],
    components: {
      BreadCrumbs,
      AppProfile,
      // EmailIcon,
      // PhoneIcon,
      ActivityIcon,
      AllergIcon,
      FaceIcon,
      HeightIcon,
      WeightIcon,
      CakeIcon,
      TargetIcon,
      EditIcon,
      CloseIcon,
      "paragraph-profile": ParagraphProfile
    },
    data() {
      return {
        birthDate: '',
        firstName: '',
        title: '',
        gender: '',
        height: '',
        weight: '',
        target: '',
        avatar: {},
        openActions: false
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
      },
      goToEdit() {
        this.$store.dispatch('user/getUserInfo').then(() => {
          let profile = this.$store.getters['user/getProfile']
          this.$store.commit('user/PROFILE_INFO', profile)
          this.$router.push({name: 'profile_create', params: {isOneExist: true, isEdit: true, initialStep:1}})
        });
      },
      goToCalculate(){
          this.$store.dispatch('user/getUserInfo').then(() => {
              let profile = this.$store.getters['user/getProfile']
              this.$store.commit('user/PROFILE_INFO', profile)
              this.$router.push({name: 'profile_create', params: {isOneExist: true, isEdit: true, initialStep:8}})
          });
      }
    },
    watch: {
      id: {
        immediate: true,
        handler(id) {
          this.$store.dispatch('user/getProfile', id).then(() => {
            let profile = this.$store.getters['user/getProfile'];
            this.birthDate = this.getAge(profile.birthDate);
            this.firstName = profile.fullName.firstName
            this.title = profile.title
            this.avatar = profile.avatar
            if (profile.gender === 'male') {
              this.gender = "Мужчина"
            } else {
              this.gender = "Женщина"
            }
            this.height = Math.round(profile.height)
            this.weight = Math.round(profile.weight)
            this.target = profile.target
            if (this.target === "gain_weight") {
              this.target = "Набор мышечной массы"
            } else if (this.target === "lose_weight") {
              this.target = "Медленная потеря веса"
            } else if (this.target === "hold_weight") {
              this.target = "Поддержание текущей формы"
            }
          })
        }
      }
    }
  }
</script>

<style scoped>
    .profile__edit {
        cursor: pointer;
    }
</style>
