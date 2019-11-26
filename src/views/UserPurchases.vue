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
                                    <input class="visually-hidden" type="radio" name="alphabet" value="asc" v-model="sortType"><span class="input-radio__custom"></span>
                                    <p>А - Я</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="alphabet" value="desc" v-model="sortType"><span class="input-radio__custom"></span>
                                    <p>Я - А</p>
                                </label>
                            </div>
                            <button class="icon-button filter__reset-item" type="reset" @click="resetSort">
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
                                    <input class="visually-hidden" type="radio" name="type" value="first" v-model="typeOfView" @click="resetSort"><span class="input-radio__custom"></span>
                                    <p>1 вид</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" value="second" v-model="typeOfView" @click="resetSort"><span class="input-radio__custom"></span>
                                    <p>2 вид</p>
                                </label>
                            </div>
                        </form>

                    </div>
                    <div class="filter__col">
                        <p class="filter__name">Выбор недели:</p>
                        <div class="filter__item">
                            <button class="icon-button filter__btn-arrow filter__btn-arrow--prev" type="button" @click="prevWeek">
                                <PreviousIcon/>
                            </button>
                            <div class="datepicker filter__datepicker">
                                <input type="date" v-model="fromDate">
                            </div><span>&ndash;</span>
                            <div class="datepicker filter__datepicker">
                                <input type="date" v-model="toDate">
                            </div>
                            <button class="icon-button filter__btn-arrow filter__btn-arrow--next" type="button" @click="nextWeek">
                                <NextIcon/>
                            </button>
                        </div>
                        <div class="filter__item">
                            <p class="filter__label">Вид списка покупок:</p>
                            <div class="filter__item-wrap">
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" value="ingredient" v-model="picked" @click="resetSort"><span class="input-radio__custom"></span>
                                    <p>Ингредиенты</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" value="recipe" v-model="picked" @click="resetSort"><span class="input-radio__custom"></span>
                                    <p>По рецептам</p>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="filter__col span-2" v-if="typeOfView==='first' && picked==='recipe'">
                        <div class="tabs__buttons">
                            <button class="tabs__btn" :class="{ active: typeOfMeal === 'breakfast'}"  type="button" @click="getFilteredByMealOfAll('breakfast')">Завтрак</button>
                            <button class="tabs__btn" :class="{ active: typeOfMeal === 'dinner' }" type="button" @click="getFilteredByMealOfAll('dinner')">Перекус</button>
                            <button class="tabs__btn" :class="{ active: typeOfMeal === 'lunch' }"  type="button" @click="getFilteredByMealOfAll('lunch')">Обед</button>
                            <button class="tabs__btn" :class="{ active: typeOfMeal === 'supper' }"  type="button" @click="getFilteredByMealOfAll('supper')">Ужин</button>
                        </div>
                    </div>
                </div>
                <PurchaseIngredient v-if="picked==='ingredient'" :sortType="sortType" :fromDate="fromDate" :toDate="toDate"/>
                <PurchaseRecipe  v-else-if="picked==='recipe'" :typeOfView="typeOfView" :typeOfMeal="typeOfMeal" :sortType="sortType" :fromDate="fromDate" :toDate="toDate"/>
            </div>
                <div :class="['modal modal--buy',{'show':showBuyMoreModal}]">
                    <button class="icon-button modal__btn-close" type="button" @click="showBuyMoreModal=false">
                        <CloseIcon/>
                    </button>
                    <div class="modal__container">
                        <h2 class="modal__title">Купить ещё</h2>
                        <div class="counter">
                            <button class="counter__btn counter__btn--min" type="button"></button>
                            <input type="text" value="300 г">
                            <button class="counter__btn counter__btn--plus" type="button"></button>
                        </div>
                        <button class="button modal__btn" type="button">Купить ещё</button>
                    </div>
                </div>
                <div :class="['modal modal--recipe',{'show':showRecipeAddModal}]">
                    <button class="icon-button modal__btn-close" type="button" @click="showRecipeAddModal=false">
                        <CloseIcon/>
                    </button>
                    <div class="modal__container">
                        <button class="button modal__btn-title" @click="cookBySelf=true">Пригтовлю сам(а)</button>
                        <div class="modal__wrap-hidden" v-show="cookBySelf===true">
                            <p class="modal__text">Добавить все ингредиенты<br> «Соус-песто» в Свои покупки?</p>
                            <div class="modal__btn-group">
                                <button class="button button--no-fill" type="button">
                                    <CheckMarkIcon/>
                                    <span>Добавить</span>
                                </button>
                                <button class="button button--no-fill modal__btn-close-wrap-hidden" type="button" @click="cookBySelf=false">

                                    <CloseIcon/>
                                    <span>Отменить</span>
                                </button>
                            </div>
                        </div>
                        <h2 class="modal__caption">Соус песто</h2>
                        <ul class="modal__group">
                            <li>
                                <label class="input-checkbox">
                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                    <p>Соус песто 300г</p>
                                </label>
                            </li>
                            <li>
                                <label class="input-checkbox">
                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                    <p>Петрушка 100г</p>
                                </label>
                            </li>
                            <li>
                                <label class="input-checkbox">
                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                    <p>Базилик 100г</p>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div :class="['modal modal--add-user',{'show':showAddUserModal}]">
                    <button class="icon-button modal__btn-close" type="button" @click="showAddUserModal=false">
                        <CloseIcon/>
                    </button>
                    <div class="modal__container">
                        <h2 class="modal__title">Для кого готовим?</h2>
                        <ul class="user__list">
                            <li v-for="(profile, key) in listProfiles" :key="key">
                                <label class="user__profile">
                                    <input class="visually-hidden" type="checkbox" name="profile" checked>
                                    <div class="user__avatar">
                                        <img :src="profile.avatar.path" alt="avatar">
                                    </div>
                                    <p v-if="profile.fullName.firstName != null" class="user__name">{{profile.fullName.firstName}}</p>
                                </label>
                            </li>
                        </ul>
                        <h3 class="modal__title">Хотите добавить гостя?</h3>
                        <div class="counter">
                            <button class="counter__btn counter__btn--min" type="button"></button>
                            <input type="text" value="1 гость">
                            <button class="counter__btn counter__btn--plus" type="button"></button>
                        </div>
                    </div>
                </div>
        </section>
            <div :class="['overlay',{'show show-modal':showAddUserModal}]"></div>
    </main>
</template>

<script>

    import AppProfile from "../components/AppProfile";
    import BreadCrumbs from "../components/BreadCrumbs";
    import ShareIcon from "../components/icons/ShareIcon";
    import CloseIcon from "../components/icons/CloseIcon";
    import PreviousIcon from "../components/icons/PreviousIcon";
    import NextIcon from "../components/icons/NextIcon";
    import ResetIcon from "../components/icons/ResetIcon";
    import CheckMarkIcon from "../components/icons/CheckMarkIcon";
    import PurchaseRecipe from "../components/PurchaseRecipe";
    import PurchaseIngredient from "../components/PurchaseIngredient";


    export default {
        name: "UserPurchases",
        components:{
            PurchaseIngredient,
            PurchaseRecipe,
            CheckMarkIcon,
            AppProfile,
            BreadCrumbs,
            ShareIcon,
            CloseIcon,
            PreviousIcon,
            NextIcon,
            ResetIcon
        },
        data(){
            return{
                picked:'',
                typeOfView:'first',
                showBuyMoreModal: false,
                showAddUserModal: false,
                showRecipeAddModal: false,
                fromDate: '',
                toDate: '',
                cookBySelf: false,
                typeOfMeal: '',
                sortType:''
            }
        },
        methods: {
            resetSort(){
                this.typeOfMeal=''
                this.sortType=''
            },
            getFilteredByMealOfAll(type){
                this.typeOfMeal = type;
            },
            prevWeek(){
                let fromDate = new Date(this.fromDate)
                let toDate = new Date(this.toDate)

                fromDate.setDate(fromDate.getDate() - 7);
                this.fromDate = fromDate.toISOString().split('T')[0];
                toDate.setDate(toDate.getDate() - 7);
                this.toDate = toDate.toISOString().split('T')[0];
            },
            nextWeek(){
                let fromDate = new Date(this.fromDate)
                let toDate = new Date(this.toDate)

                fromDate.setDate(fromDate.getDate() + 7);
                this.fromDate = fromDate.toISOString().split('T')[0];
                toDate.setDate(toDate.getDate() + 7);
                this.toDate = toDate.toISOString().split('T')[0];
            },
            getCurrentDate(){
                let today = new Date();
                let dd = String(today.getDate()).padStart(2, '0');
                let mm = String(today.getMonth() + 1).padStart(2, '0');
                let yyyy = today.getFullYear();

                today = yyyy + '-' + mm + '-' + dd;
                this.toDate = today
            },
            getDiffDate(){
                let date = new Date();
                date.setDate(date.getDate() - 7);
                this.fromDate = date.toISOString().split('T')[0];
            },
            getFilteredDate(){
                let fromDate = this.fromDate
                let toDate = this.toDate
                let dates = '?dateFrom='+fromDate+'&dateTo='+toDate
                this.$store.dispatch('subscription/getShopListAction',dates)
            },
            showOverlay(){
                return this.showAddUserModal || this.showBuyMoreModal || this.showRecipeAddModal
            },
        },
        computed:{
            listProfiles() {
                return this.$store.getters['user/getListProfiles'].items;
            },
        },
        mounted() {
            this.getCurrentDate()
            this.getDiffDate()
            let dates = '?dateFrom=2019-11-01&dateTo=2019-11-30';
            this.$store.dispatch('subscription/getShopListAction',dates)
        },
    }
</script>

<style scoped>

</style>