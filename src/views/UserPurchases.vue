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
                                    <input class="visually-hidden" type="radio" name="alphabet" value="asc" v-model="sortType" @click="sorting(false)"><span class="input-radio__custom"></span>
                                    <p>А - Я</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="alphabet" value="desc" v-model="sortType" @click="sorting(true)"><span class="input-radio__custom"></span>
                                    <p>Я - А</p>
                                </label>
                            </div>
                            <button class="icon-button filter__reset-item" type="reset" @click="resetShopList">
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
                                    <input class="visually-hidden" type="radio" name="type" value="second" v-model="typed" @click="resetShopList"><span class="input-radio__custom"></span>
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
                                <input type="date" v-model="fromDate" @change="getFilteredDate">
                            </div><span>&ndash;</span>
                            <div class="datepicker filter__datepicker">
                                <input type="date" v-model="toDate" @change="getFilteredDate">
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
                            <button class="tabs__btn" :class="{ active: type==='breakfast'}"  type="button" @click="getFilteredByMealOfAll('breakfast')">Завтрак</button>
                            <button class="tabs__btn" :class="{ active: type==='dinner' }" type="button" @click="getFilteredByMealOfAll('dinner')">Перекус</button>
                            <button class="tabs__btn" :class="{ active: type==='lunch' }"  type="button" @click="getFilteredByMealOfAll('lunch')">Обед</button>
                            <button class="tabs__btn" :class="{ active: type==='supper' }"  type="button" @click="getFilteredByMealOfAll('supper')">Ужин</button>
                        </div>
                    </div>
                </div>
                <ul class="paper buy__list" v-if="picked==='ingredient'">
                    <li :class="['buy__item',{'open':item.open}]" v-for="item in getSubList" :key="item.id">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>{{ item.ingredient.title }} {{item.weight}}г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё" @click="showBuyMoreModal=true"></button>
                            <button :class="['icon-button buy__item-arrow',{'open':item.open}]" type="button" title="Открыть" @click="openItem(item.id)">
                                <DownIcon/>
                            </button>
                            <button :class="['icon-button buy__item-action',{'show':item.show}]" type="button" title="Действия" @click="showItem(item.id)">
                                <ActionsIcon/>
                            </button>
                            <section :class="['paper actions anim-show-action',{'show':item.show}]">
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
                        <div :class="['buy__item-dropdown',{'open':item.open}]">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p @click="showRecipeAddModal=true"> {{item.recipe.title+" "+item.weight+"г"}}</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль" @click="showAddUserModal=true">
                                            <ProfileAddIcon/>
                                        </button>
                                        <button :class="['icon-button buy__item-action',{'show':item.ingredient.show}]" type="button" title="Действия" @click="showItem(item.ingredient.id)">
                                            <ActionsIcon/>
                                        </button>
                                        <section :class="['paper actions anim-show-action',{'show':item.ingredient.show}]">
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
                                        <p class="buy__item-meta">{{getTranslatedMealType(item.mealType)}}: {{dateFormat(item.date)}}</p>
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
                <PurchaseRecipe v-else-if="picked==='recipe'" :typed="typed" :type="type" :showAddUserModal="showAddUserModal"/>
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
            <div :class="['modal modal--add-user',{'show':showAddUserModal}]">
                <button class="icon-button modal__btn-close" type="button" @click="showAddUserModal=false">
                    <CloseIcon/>
                </button>
                <div class="modal__container">
                    <h2 class="modal__title">Для кого готовим?</h2>
                    <ul class="user__list">
                        <li>
                            <label class="user__profile">
                                <input class="visually-hidden" type="checkbox" name="profile" checked>
                                <div class="user__avatar">
                                    <!--img(src="./images/jpg/avatar-1.jpg", alt="avatar")-->
                                </div>
                                <p class="user__name">Александр</p>
                            </label>
                        </li>
                        <li>
                            <label class="user__profile">
                                <input class="visually-hidden" type="checkbox" name="profile">
                                <div class="user__avatar"><img src="@/assets/images/jpg/avatar-1.jpg" alt="avatar"></div>
                                <p class="user__name">Иван</p>
                            </label>
                        </li>
                        <li class="user__main">
                            <label class="user__profile">
                                <input class="visually-hidden" type="checkbox" name="profile" checked>
                                <div class="user__avatar"><img src="@/assets/images/jpg/avatar.jpg" alt="avatar"></div>
                                <p class="user__name">Ольга</p>
                            </label>
                        </li>
                        <li>
                            <label class="user__profile">
                                <input class="visually-hidden" type="checkbox" name="profile">
                                <div class="user__avatar"><img src="@/assets/images/jpg/avatar-2.jpg" alt="avatar"></div>
                                <p class="user__name">Степан</p>
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

        </section>
        <div :class="['overlay',{'show show-modal':showOverlay()}]"></div>
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
    import PreviousIcon from "../components/icons/PreviousIcon";
    import NextIcon from "../components/icons/NextIcon";
    import ResetIcon from "../components/icons/ResetIcon";
    import CheckMarkIcon from "../components/icons/CheckMarkIcon";
    import PurchaseRecipe from "../components/PurchaseRecipe";
    export default {
        name: "UserPurchases",
        components:{
            PurchaseRecipe,
            CheckMarkIcon,
            AppProfile,
            BreadCrumbs,
            ShareIcon,
            DownIcon,
            ActionsIcon,
            ClockIcon,
            CloseIcon,
            ProfileAddIcon,
            PreviousIcon,
            NextIcon,
            ResetIcon
        },
        data(){
            return{
                picked:'ingredient',
                typed:'first',
                showBuyMoreModal: false,
                showAddUserModal: false,
                showRecipeAddModal: false,
                fromDate: '2019-11-01',
                toDate: '2019-11-30',
                sortType: '',
                cookBySelf: false,
                mealOfDay: "breakfast",
                type: ''
            }
        },
        methods: {
            resetShopList(){
                this.type=''
                let profile = '3aa5e0ab-00d6-4d88-99fd-ae58e152cc3c?dateFrom=2019-11-01&dateTo=2019-11-31';
                this.$store.dispatch('subscription/getShopListAction',profile)
            },
            getTranslatedMealType(type){
                let rusMealType
                if(type==="breakfast"){
                    rusMealType="Завтрак"
                }else if(type==="supper"){
                    rusMealType="Ужин"
                }else if(type==="dinner"){
                    rusMealType="Перекус"
                }else if(type==="lunch"){
                    rusMealType="Обед"
                }
                return rusMealType
            },
            getFilteredByMealOfAll(type){
                let shopLists = this.$store.getters['subscription/getShopList']
                this.type = type;

                let shopList = shopLists.filter(function (elem) {
                    return elem.mealType === type;
                })
                this.$store.commit('subscription/SET_FILTERED_SHOP_LIST',shopList)
            },
            getFilteredDate(){
                let fromDate = this.fromDate
                let toDate = this.toDate
                let profile = '3aa5e0ab-00d6-4d88-99fd-ae58e152cc3c?dateFrom='+fromDate+'&dateTo='+toDate
                this.$store.dispatch('subscription/getShopListAction',profile)
            },
            dateFormat(str){
                let date = new Date(str)
                let data = date.getDate();
                let month = date.getMonth()+1;
                let year = date.getFullYear();
                return data+"."+month+"."+year
            },
            showItem(id){
                let shopList = this.$store.getters['subscription/getShopList']
                shopList = shopList.map(function (value){
                    if (value.id === id){
                        value.show = !value.show
                    }else if (value.recipe.id === id){
                        value.recipe.show = !value.recipe.show
                    }else if(value.ingredient.id === id){
                        value.ingredient.show = !value.ingredient.show
                    }
                    return value;
                })
                this.$store.commit('subscription/SET_SHOP_LIST',shopList)
                this.$store.commit('subscription/SET_FILTERED_SHOP_LIST',shopList)

            }
        ,openItem(id){
                let shopList = this.$store.getters['subscription/getShopList']
                shopList = shopList.map(function (value){
                    if (value.id === id){
                        value.open = !value.open
                    }
                    return value;
                })
                this.$store.commit('subscription/SET_SHOP_LIST',shopList)
                this.$store.commit('subscription/SET_FILTERED_SHOP_LIST',shopList)
            },
            showOverlay(){
                return this.showAddUserModal || this.showBuyMoreModal || this.showRecipeAddModal
            },
            sorting(reverse){
                let shopList = this.$store.getters['subscription/getShopList']
                let shopListRecipes = this.$store.getters['subscription/getFilteredShopList']

                if (reverse){
                    shopList.sort(function(x, y) {
                        let nameA=x.ingredient.title.toLowerCase(), nameB=y.ingredient.title.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    });
                }else{
                    shopList.sort(function(x, y) {
                        let nameA=x.ingredient.title.toLowerCase(), nameB=y.ingredient.title.toLowerCase()
                        if (nameA < nameB)
                            return 1
                        if (nameA > nameB)
                            return -1
                        return 0
                    });
                }

                if (reverse){
                    shopListRecipes.sort(function(x, y) {
                        let nameA=x.recipe.title.toLowerCase(), nameB=y.recipe.title.toLowerCase()
                        if (nameA < nameB)
                            return -1
                        if (nameA > nameB)
                            return 1
                        return 0
                    });
                }else{
                    shopListRecipes.sort(function(x, y) {
                        let nameA=x.recipe.title.toLowerCase(), nameB=y.recipe.title.toLowerCase()
                        if (nameA < nameB)
                            return 1
                        if (nameA > nameB)
                            return -1
                        return 0
                    });
                }
                this.$store.commit('subscription/SET_SHOP_LIST',shopList)
                this.$store.commit('subscription/SET_FILTERED_SHOP_LIST',shopListRecipes)

            },

        },
        computed:{
            getSubList(){
                return this.$store.getters['subscription/getShopList']
            },
        },
        created() {
            let profile = '3aa5e0ab-00d6-4d88-99fd-ae58e152cc3c?dateFrom=2019-11-01&dateTo=2019-11-31';
            this.$store.dispatch('subscription/getShopListAction',profile)
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>