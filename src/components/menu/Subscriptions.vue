<template>
    <div>
        <article class="paper subscriptions-inner" v-for="(item, key) in listMenus" :key="key">
            <div class="subscriptions-inner__image"><img src="/static/images/jpg/image-1.jpg" alt="diary"></div>
            <div class="subscriptions-inner__content">
                <div class="subscriptions-inner__title-wrap">
                    <h2 class="subscriptions-inner__caption">{{item.title}}</h2>
                    <p class="subscriptions-inner__calories">1500 – 2500 калорий</p>
                </div>
                <ul class="subscriptions-inner__checked-profiles" v-for="(item, key) in listProfiles" :key="key">
                    <li><img :src="item.avatar.path"
                             alt="avatar"></li>
                </ul>
                <div class="subscriptions-inner__desc">
                    <p>Описание меню</p>
                    <p>{{item.description}}</p>
                </div>
                <button :class="['subscriptions-inner__btn', { 'open':openMenu === key }]" type="button"
                        @click.prevent="openMenuMethod(key)">
                    <span>Оформить подписку</span>
                    <ArrowDownIcon />
                </button>
            </div>
            <div :class="['subscriptions-inner__wrapper', { 'open':openMenu === key }]">
                <div class="subscriptions-inner__container">
                    <h3 class="subscriptions-inner__subtitle">Настройка меню</h3>
                    <div class="subscriptions-inner__step">
                        <div class="subscriptions-inner__col">
                            <p><b>Шаг 1</b></p>
                            <p>Выберите профили</p>
                        </div>
                        <div class="subscriptions-inner__col">
                            <ul class="user__profile-list subscriptions-inner__user-list">
                                <li v-for="(item, key) in listProfiles" :key="key">
                                    <label :class="['user__profile', { 'user__profile--main': item.isMain }]">
                                        <input class="visually-hidden" type="checkbox" name="profile-2"
                                               :checked="item.isMain">
                                        <div :class="['user__avatar', { 'user__avatar--big': item.isMain }]"><img
                                                :src="item.avatar.path"
                                                alt="avatar"></div>
                                        <p class="user__name">{{item.fullName.firstName}}</p>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="subscriptions-inner__step">
                        <div class="subscriptions-inner__col">
                            <p><b>Шаг 2</b></p>
                            <p>Выберите приёмы пищи</p>
                        </div>
                        <div class="subscriptions-inner__col">
                            <ul class="subscriptions-inner__list">
                                <li>
                                    <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-5"
                                           checked>
                                    <label class="subscriptions-inner__item" for="meals-5">
                                        <p class="subscriptions-inner__item-name">Завтрак</p>
                                        <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                                    </label>
                                </li>
                                <li>
                                    <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-6">
                                    <label class="subscriptions-inner__item" for="meals-6">
                                        <p class="subscriptions-inner__item-name">Обед</p>
                                        <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                                    </label>
                                </li>
                                <li>
                                    <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-7">
                                    <label class="subscriptions-inner__item" for="meals-7">
                                        <p class="subscriptions-inner__item-name">Перекус</p>
                                        <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                                    </label>
                                </li>
                                <li>
                                    <input class="visually-hidden" type="checkbox" name="meals-2" id="meals-8">
                                    <label class="subscriptions-inner__item" for="meals-8">
                                        <p class="subscriptions-inner__item-name">Ужин</p>
                                        <p class="subscriptions-inner__price">+ 125 &#8381;</p>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="subscriptions-inner__step">
                        <div class="subscriptions-inner__col">
                            <p><b>Шаг 3</b></p>
                            <p>Укажите дни питания</p>
                        </div>
                        <div class="subscriptions-inner__col">
                            <ul class="subscriptions-inner__list subscriptions-inner__list--type-2">
                                <li>
                                    <input class="visually-hidden" type="radio" name="day-2" id="day-3" checked>
                                    <label class="subscriptions-inner__item" for="day-3">
                                        <p class="subscriptions-inner__item-name"><b>7 дней в неделю</b></p>
                                        <p class="subscriptions-inner__item-text">с пн – вс</p>
                                    </label>
                                </li>
                                <li>
                                    <input class="visually-hidden" type="radio" name="day-2" id="day-4">
                                    <label class="subscriptions-inner__item" for="day-4">
                                        <p class="subscriptions-inner__item-name"><b>5 дней в неделю</b></p>
                                        <p class="subscriptions-inner__item-text">с пн – пт</p>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="subscriptions-inner__step">
                        <div class="subscriptions-inner__col">
                            <p><b>Шаг 4</b></p>
                            <p>Стоимость</p>
                        </div>
                        <div class="subscriptions-inner__col">
                            <ul class="subscriptions-inner__list subscriptions-inner__list--type-2">
                                <li>
                                    <input class="visually-hidden" type="radio" name="price-2" id="price-5"
                                           checked>
                                    <label class="subscriptions-inner__item" for="price-5">
                                        <p class="subscriptions-inner__item-name">Месяц</p>
                                        <p class="subscriptions-inner__price">500 &#8381;</p>
                                    </label>
                                </li>
                                <li>
                                    <input class="visually-hidden" type="radio" name="price-2" id="price-6">
                                    <label class="subscriptions-inner__item" for="price-6">
                                        <p class="subscriptions-inner__item-name">3 месяца</p>
                                        <p class="subscriptions-inner__price">1200 &#8381;</p>
                                        <p class="subscriptions-inner__item-text">400 &#8381; / месяц</p>
                                        <p class="subscriptions-inner__item-text green">Экономия – 20%</p>
                                    </label>
                                </li>
                                <li>
                                    <input class="visually-hidden" type="radio" name="price-2" id="price-7">
                                    <label class="subscriptions-inner__item" for="price-7">
                                        <p class="subscriptions-inner__item-name">6 месяца</p>
                                        <p class="subscriptions-inner__price">1200 &#8381;</p>
                                        <p class="subscriptions-inner__item-text">400 &#8381; / месяц</p>
                                        <p class="subscriptions-inner__item-text green">Экономия – 20%</p>
                                    </label>
                                </li>
                                <li>
                                    <input class="visually-hidden" type="radio" name="price-2" id="price-8">
                                    <label class="subscriptions-inner__item" for="price-8">
                                        <p class="subscriptions-inner__item-name">Год</p>
                                        <p class="subscriptions-inner__price">1200 &#8381;</p>
                                        <p class="subscriptions-inner__item-text">400 &#8381; / месяц</p>
                                        <p class="subscriptions-inner__item-text green">Экономия – 20%</p>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button class="button subscriptions-inner__button" type="button">Купить</button>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
  import ArrowDownIcon from "../icons/ArrowDownIcon";

  export default {
    name: "Subscriptions",
    components: {ArrowDownIcon},
    data() {
      return {
        openMenu: -1
      }
    },
    computed: {
      listProfiles() {
        return this.$store.getters['user/getListProfiles'].items;
      },
      listMenus() {
        return this.$store.getters['menu/getListMenus'];
      }
    },
    methods: {
      openMenuMethod(activeKey) {
        if (this.openMenu === activeKey) {
          this.openMenu = -1
        } else {
          this.openMenu = activeKey
        }
      }
    },
    mounted() {
      this.$store.dispatch('user/getListProfiles'),
        this.$store.dispatch('menu/getListMenus')
    }
  }
</script>

<style scoped>
    .subscriptions-inner__checked-profiles {
        margin: 0;
    }
</style>