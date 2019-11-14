<template>
    <main class="page">
        <BreadCrumbs/>
        <section class="grid">
            <AppProfile/>
            <div class="grid__column">
                <div class="title__wrapper">
                    <h1 class="title">Покупки</h1>
                    <button class="button-share" type="button">
                        <ShareIcon/>
                        <span>Поделиться</span>
                    </button>
                </div>
                <div class="paper filter">
                    <div class="filter__col">
                        <p class="filter__name">Сортировать по:</p>
                        <form class="filter__item">
                            <p class="filter__label">По алфавиту:</p>
                            <div class="filter__item-wrap">
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="alphabet"><span class="input-radio__custom"></span>
                                    <p>А - Я</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="alphabet"><span class="input-radio__custom"></span>
                                    <p>Я - А</p>
                                </label>
                            </div>
                            <button class="icon-button filter__reset-item" type="reset">
                                <ResetIcon/>
                            </button>
                        </form>
                        <form class="filter__item" v-if="picked==='ingredient'">
                            <p class="filter__label">По отделам:</p>
                            <div class="select filter__select">
                                <select>
                                    <option value="" selected></option>
                                    <option value="Овощи">Овощи</option>
                                    <option value="Овощи">Овощи</option>
                                    <option value="Овощи">Овощи</option>
                                </select>
                            </div>
                            <button class="icon-button filter__reset-item" type="reset">
                                <ResetIcon/>
                            </button>
                        </form>
                        <form class="filter__item" v-else-if="picked==='recipe'">
                            <p class="filter__label"><span class="tooltip">Вид меню:</span></p>
                            <div class="filter__item-wrap">
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" value="first" v-model="typed"><span class="input-radio__custom"></span>
                                    <p>1 вид</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" value="second" v-model="typed" ><span class="input-radio__custom"></span>
                                    <p>2 вид</p>
                                </label>
                            </div>
                        </form>

                    </div>
                    <div class="filter__col">
                        <p class="filter__name">Выбор недели:</p>
                        <div class="filter__item">
                            <button class="icon-button filter__btn-arrow filter__btn-arrow--prev" type="button">
                                <PreviousIcon/>
                            </button>
                            <div class="datepicker filter__datepicker">
                                <input type="date">
                            </div><span>&ndash;</span>
                            <div class="datepicker filter__datepicker">
                                <input type="date">
                            </div>
                            <button class="icon-button filter__btn-arrow filter__btn-arrow--next" type="button">
                                <NextIcon/>
                            </button>
                        </div>
                        <div class="filter__item">
                            <p class="filter__label">Вид списка покупок:</p>
                            <div class="filter__item-wrap">
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" value="ingredient" v-model="picked" ><span class="input-radio__custom"></span>
                                    <p>Ингредиенты</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" value="recipe" v-model="picked"><span class="input-radio__custom"></span>
                                    <p>По рецептам</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="filter__col span-2" v-if="typed==='first' && picked==='recipe'">
                        <div class="tabs__buttons">
                            <button class="tabs__btn active" type="button">Завтрак</button>
                            <button class="tabs__btn" type="button">Перекус</button>
                            <button class="tabs__btn" type="button">Обед</button>
                            <button class="tabs__btn" type="button">Ужин</button>
                        </div>
                    </div>
                </div>
                <ul class="paper buy__list" v-if="picked==='ingredient'">
                    <li class="buy__item"  v-for="item in getSubList" :key="item.id">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>{{ item.ingredient.title }} {{item.weight}}г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть">
                                <DownIcon/>
                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия">
                                <ActionsIcon/>
                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img">
                                        <ClockIcon/>
                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;">
                                        <CloseIcon/>
                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль">
                                            <ProfileAddIcon/>
                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия">
                                            <ActionsIcon/>
                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img">
                                                   <ClockIcon/>
                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;">
                                                   <CloseIcon/>
                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль">
                                            <ProfileAddIcon/>
                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия">
                                            <ActionsIcon/>
                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img">
                                                    <ClockIcon/>
                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;">
                                                    <CloseIcon/>
                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__add">
                        <div class="buy__input">
                            <input type="text" placeholder="Добавить еще покупку">
                            <button class="button-add button-add--green buy__btn-add" type="button">Добавить</button>
                        </div>
                    </li>
                </ul>
                <section class="scheduler-food" v-else-if="picked==='recipe'">
                    <div class="paper scheduler-food__day">
                        <p class="scheduler-food__caption">Понедельник 25.06.2018</p>
                        <div class="tabs__buttons tabs__buttons--separate scheduler-food__tabs-btn" v-if="typed==='second'">
                            <button class="tabs__btn active" type="button">Завтрак</button>
                            <button class="tabs__btn" type="button">Перекус</button>
                            <button class="tabs__btn" type="button">Обед</button>
                            <button class="tabs__btn" type="button">Ужин</button>
                        </div>
                        <ul class="scheduler-food__list">
                            <li class="scheduler-food__item" v-for="item in getSubList" :key="item.id">
                                <div class="scheduler-food__item-wrap">
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>{{ item.recipe.title }}</p>
                                    </label>
                                    <button class="icon-button scheduler-food__btn-submenu" type="button" title="Открыть">
                                     <DownIcon/>
                                    </button>
                                    <button class="icon-button icon-button--big modal-add-user" type="button" title="Добавить профиль">
                                        <ProfileAddIcon/>
                                    </button>
                                    <button class="icon-button buy__item-action" type="button" title="Действия">
                                        <ActionsIcon/>
                                    </button>
                                    <section class="paper actions anim-show-action">
                                        <div class="actions__item">
                                            <div class="actions__img">
                                                <ClockIcon/>
                                            </div>
                                            <label class="input-checkbox">
                                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                <p>Отложить на 24 часа</p>
                                            </label>
                                        </div>
                                        <div class="actions__item">
                                            <div class="actions__img" style="width: 20px; margin-left: 18px;">
                                                <CloseIcon/>
                                            </div>
                                            <label class="input-checkbox">
                                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                <p>Скрыть</p>
                                            </label>
                                        </div>
                                    </section>
                                    <div class="scheduler-food__meta">
                                        <p class="composed"><span class="orange">62</span><span class="yellow">70</span><span class="green">30</span></p>
                                        <p class="scheduler-food__weight">{{item.weight}} г</p>
                                        <p class="scheduler-food__ccal">89 Кал</p>
                                        <p class="scheduler-food__item-date">Завтрак: <b>11.11.2018</b></p>
                                    </div>
                                </div>
                                <div class="scheduler-food__item-dropdown">
                                    <ul class="scheduler-food__sublist">
                                        <li class="scheduler-food__item">
                                            <div class="scheduler-food__item-wrap">
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Свекла  300 г</p>
                                                </label>
                                                <button class="icon-button buy__item-action" type="button" title="Действия">
                                                   <ActionsIcon/>
                                                </button>
                                                <section class="paper actions anim-show-action">
                                                    <div class="actions__item">
                                                        <div class="actions__img">
                                                       <ClockIcon/>
                                                        </div>
                                                        <label class="input-checkbox">
                                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                            <p>Отложить на 24 часа</p>
                                                        </label>
                                                    </div>
                                                    <div class="actions__item">
                                                        <div class="actions__img" style="width: 20px; margin-left: 18px;">
                                                            <CloseIcon/>
                                                        </div>
                                                        <label class="input-checkbox">
                                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                            <p>Скрыть</p>
                                                        </label>
                                                    </div>
                                                </section>
                                            </div>
                                        </li>
                                        <li class="scheduler-food__item disabled">
                                            <div class="scheduler-food__item-wrap">
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                                    <p>Оливье 200г</p>
                                                </label>
                                                <button class="icon-button buy__item-action" type="button" title="Действия">
                                                   <ActionsIcon/>
                                                </button>
                                                <section class="paper actions anim-show-action">
                                                    <div class="actions__item">
                                                        <div class="actions__img">
                                                            <ClockIcon/>
                                                        </div>
                                                        <label class="input-checkbox">
                                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                            <p>Отложить на 24 часа</p>
                                                        </label>
                                                    </div>
                                                    <div class="actions__item">
                                                        <div class="actions__img" style="width: 20px; margin-left: 18px;">
                                                            <CloseIcon/>
                                                        </div>
                                                        <label class="input-checkbox">
                                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                            <p>Скрыть</p>
                                                        </label>
                                                    </div>
                                                </section>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="buy__add">
                                <div class="buy__input">
                                    <input type="text" placeholder="Добавить еще покупку">
                                    <button class="button-add button-add--green buy__btn-add" type="button">Добавить</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
        <AppModals/>
    </main>
</template>

<script>
    import AppProfile from "../components/AppProfile";
    import BreadCrumbs from "../components/BreadCrumbs";
    import ShareIcon from "../components/icons/ShareIcon";
    import DownIcon from "../components/icons/DownIcon";
    import ActionsIcon from "../components/icons/ActionsIcon";
    import ClockIcon from "../components/icons/ClockIcon";
    import CloseIcon from "../components/icons/CloseIcon";
    import ProfileAddIcon from "../components/icons/ProfileAddIcon";
    import AppModals from "../components/AppModals";
    import PreviousIcon from "../components/icons/PreviousIcon";
    import NextIcon from "../components/icons/NextIcon";
    import ResetIcon from "../components/icons/ResetIcon";
    export default {
        name: "UserPurchases",
        components:{
            AppProfile,
            BreadCrumbs,
            ShareIcon,
            DownIcon,
            ActionsIcon,
            ClockIcon,
            CloseIcon,
            ProfileAddIcon,
            AppModals,
            PreviousIcon,
            NextIcon,
            ResetIcon
        },
        data(){
            return{
                picked:'ingredient',
                typed:'first'
            }
        },
        methods: {
        },
        computed:{
            getSubList(){
                return this.$store.getters['subscription/getShopList']
            }
        },
        created() {
            let profile = '3aa5e0ab-00d6-4d88-99fd-ae58e152cc3c'
            this.$store.dispatch('subscription/getShopListAction',profile)
        }

    }
</script>

<style scoped>

</style>