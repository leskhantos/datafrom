<template>
    <div>
        <div class="menu__btn-group">
            <button class="button active" type="button">Регулярное</button>
            <button class="button" type="button">Специальное</button>
            <button class="button" type="button">Лечебный план</button>
        </div>
        <div class="menu__slider">
            <ul class="menu__slides">
                <li :class="['paper','slider', { 'active':activeMenu == key }]"
                    v-for="(item, key) in listMenus" :key="key"
                    style="left: 0%;">
                    <div class="menu__slide">
                        <div class="menu__slide-image"><img src="/static/images/jpg/image-1.jpg" alt="slider-image">
                        </div>
                        <div class="menu__slide-content">
                            <h2 class="menu__slide-caption">{{item.title}}</h2>
                            <p class="menu__slide-calories">1500 – 2500 калорий</p>
                            <p class="menu__slide-description">{{item.description}}</p>
                            <button class="button menu__slide-btn" type="button"><span>Попробовать БЕСПЛАТНО!</span>
                                <GiftIcon />
                            </button>
                            <p class="menu__slide-meta">Не знаете какое меню выбрать? Мы подберём подходящий вариант.<a
                                    href="">Начать</a></p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="menu__arrows">
                <button class="menu__slider-arrow menu__slider-arrow--prev" type="button" @click="prevSlide">
                    <ButtonArrowLeftIcon />
                </button>
                <button class="menu__slider-arrow menu__slider-arrow--next" type="button" @click="nextSlide">
                    <ButtonArrowRightIcon />
                </button>
            </div>
        </div>
        <div class="paper filter menu__filter">
            <div class="filter__col">
                <p class="filter__name">Выбор недели:</p>
                <div class="filter__item">
                    <button class="icon-button filter__btn-arrow filter__btn-arrow--prev" type="button"
                            @click.prevent="changeStartDate">
                        <ArrowLeftIcon />
                    </button>
                    <div class="datepicker filter__datepicker">
                        <input type="date" v-model="startDate">
                    </div>
                    <span>&ndash;</span>
                    <div class="datepicker filter__datepicker">
                        <input type="date" v-model="finishDate">
                    </div>
                    <button class="icon-button filter__btn-arrow filter__btn-arrow--next" type="button"
                            @click.prevent="changeFinishDate">
                        <ArrowRightIcon />
                    </button>
                </div>
            </div>
            <div class="filter__col">
                <form class="filter__item">
                    <p class="filter__label"><span class="tooltip">Вид меню:</span></p>
                    <div class="filter__item-wrap">
                        <label class="input-radio" @click.prevent="typeOfMenu = 1">
                            <input class="visually-hidden" type="radio" name="type" :checked="typeOfMenu===1"><span
                                class="input-radio__custom"></span>
                            <p>1 вид</p>
                        </label>
                        <label class="input-radio" @click.prevent="typeOfMenu = 2">
                            <input class="visually-hidden" type="radio" name="type" :checked="typeOfMenu===2"><span
                                class="input-radio__custom"></span>
                            <p>2 вид</p>
                        </label>
                        <label class="input-radio" @click.prevent="typeOfMenu = 3">
                            <input class="visually-hidden" type="radio" name="type" :checked="typeOfMenu===3"><span
                                class="input-radio__custom"></span>
                            <p>3 вид</p>
                        </label>
                    </div>
                </form>
            </div>
            <div class="filter__col span-2" v-if="typeOfMenu===1">
                <div class="tabs__buttons">
                    <button class="tabs__btn active" type="button">Завтрак</button>
                    <button class="tabs__btn" type="button">Перекус</button>
                    <button class="tabs__btn" type="button">Обед</button>
                    <button class="tabs__btn" type="button">Ужин</button>
                </div>
            </div>
        </div>
        <component
                :is="currentMenu"
        >
        </component>
    </div>
</template>

<script>
  import GiftIcon from "../icons/GiftIcon";
  import Menu1 from "../menu/Menu1";
  import Menu2 from "../menu/Menu2";
  import Menu3 from "../menu/Menu3";
  import ArrowLeftIcon from "../icons/ArrowLeftIcon";
  import ArrowRightIcon from "../icons/ArrowRightIcon";
  import ButtonArrowLeftIcon from "../icons/ButtonArrowLeftIcon";
  import ButtonArrowRightIcon from "../icons/ButtonArrowRightIcon";

  export default {
    name: "MenuInner",
    components: {
      ButtonArrowRightIcon,
      ButtonArrowLeftIcon,
      ArrowLeftIcon,
      ArrowRightIcon,
      GiftIcon,
      Menu1,
      Menu2,
      Menu3
    },
    data() {
      return {
        activeMenu: 0,
        typeOfMenu: 1,
        startDate: '',
        finishDate: '',
      }
    },
    computed: {
      listMenus() {
        return this.$store.getters['menu/getListMenus'];
      },
      currentMenu() {
        return 'Menu' + this.typeOfMenu
      },
    },
    methods: {
      nextSlide() {
        if (this.activeMenu === this.$store.getters['menu/getListMenus'].length - 1) {
          this.activeMenu = 0
        } else {
          this.activeMenu += 1
        }
      },
      prevSlide() {
        if (this.activeMenu === 0) {
          this.activeMenu = this.$store.getters['menu/getListMenus'].length - 1
        } else {
          this.activeMenu -= 1
        }
      },


      changeStartDate() {

        let startDate = new Date(this.startDate)

        startDate.setDate(startDate.getDate() - 1)

        let month = '' + (startDate.getMonth() + 1)
        let day = '' + (startDate.getDate())
        let year = startDate.getFullYear()

        if (month.length < 2)
          month = '0' + month;
        if (day.length < 2)
          day = '0' + day;

        this.startDate = [year, month, day].join('-');
      },
      changeFinishDate() {
        let finishDate = new Date(this.finishDate)

        finishDate.setDate(finishDate.getDate() + 1)

        let month = '' + (finishDate.getMonth() + 1)
        let day = '' + (finishDate.getDate())
        let year = finishDate.getFullYear()

        if (month.length < 2)
          month = '0' + month;
        if (day.length < 2)
          day = '0' + day;

        this.finishDate = [year, month, day].join('-');
      }
    },
    mounted() {
      this.typeOfMenu = 1
      this.$store.dispatch('menu/getListMenus')
    }
  }
</script>

<style scoped>
    .paper.slider {
        padding: 0;
        max-width: 0;
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity .2s linear;
    }

    .paper.slider.active {
        padding: 20px;
        min-width: 100%;
        visibility: visible;
        opacity: 1;
    }

    .menu__arrows {
        top: 50%;
    }

    .menu__slides {
        display: flex;
    }
</style>