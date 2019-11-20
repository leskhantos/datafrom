<template>
    <section class="scheduler-food">
        <div class="paper scheduler-food__day"  v-for="list in getFilteredSubList" :key="list.id">
            <p class="scheduler-food__caption">{{ showDateFormat(list.date) }}</p>
            <div class="tabs__buttons tabs__buttons--separate scheduler-food__tabs-btn" v-if="typed==='second'">
                <button class="tabs__btn"  type="button" >Завтрак</button>
                <button class="tabs__btn"  type="button" >Перекус</button>
                <button class="tabs__btn"  type="button"  >Обед</button>
                <button class="tabs__btn"  type="button" >Ужин</button>
            </div>
            <ul class="scheduler-food__list">
                <li class="scheduler-food__item">
                    <div class="scheduler-food__item-wrap">
                        <label class="input-checkbox">
                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                            <p>{{ list.recipe.title }}</p>
                        </label>
                        <button  :class="['icon-button scheduler-food__btn-submenu',{'open':list.open}]"  class="" type="button" title="Открыть" @click="openItem(list.id)">
                            <DownIcon/>
                        </button>
                        <button class="icon-button icon-button--big modal-add-user" type="button" title="Добавить профиль" @click="showAddUserModal=true">
                            <ProfileAddIcon/>
                        </button>
                        <button :class="['icon-button buy__item-action',{'show':list.show}]" type="button" title="Действия" @click="showItem(list.id)">
                            <ActionsIcon/>
                        </button>
                        <section :class="['paper actions anim-show-action',{'show':list.show}]">
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
                            <p class="composed"><span class="orange">{{list.ingredient.nutrients[0].amountPerHundredGrams}}</span><span class="yellow">{{list.ingredient.nutrients[1].amountPerHundredGrams}}</span><span class="green">{{list.ingredient.nutrients[2].amountPerHundredGrams}}</span></p>
                            <p class="scheduler-food__weight">{{list.weight}} г</p>
                            <p class="scheduler-food__ccal">{{list.ingredient.kilocaloriesPerHundredGrams}} Кал</p>
                            <p class="scheduler-food__item-date">{{getTranslatedMealType(list.mealType)}}: <b>{{dateFormat(list.date)}}</b></p>
                        </div>
                    </div>
                    <div  :class="['scheduler-food__item-dropdown',{'open':list.open}]">
                        <ul class="scheduler-food__sublist">
                            <li class="scheduler-food__item">
                                <div class="scheduler-food__item-wrap">
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>{{list.ingredient.title+" "+list.weight+"г"}}</p>
                                    </label>
                                    <button  :class="['icon-button buy__item-action',{'show':list.recipe.show}]" type="button" title="Действия" @click="showItem(list.recipe.id)">
                                        <ActionsIcon/>
                                    </button>
                                    <section :class="['paper actions anim-show-action',{'show':list.recipe.show}]">
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

</template>

<script>
    import DownIcon from "./icons/DownIcon";
    import ProfileAddIcon from "./icons/ProfileAddIcon";
    import ActionsIcon from "./icons/ActionsIcon";
    import ClockIcon from "./icons/ClockIcon";
    import CloseIcon from "./icons/CloseIcon";
    export default {
        name: "PurchaseRecipe",
        components: {CloseIcon, ClockIcon, ActionsIcon, ProfileAddIcon, DownIcon},
        props: ['typed','type','showAddUserModal'],
        data(){
            return{
            }
        },
        methods:{
            showDateFormat(str){
                let date = new Date(str)
                let day = date.getDay()
                let data = date.getDate();
                let month = date.getMonth()+1;
                let year = date.getFullYear();
                let weekday = new Array(7);
                weekday[0] = "Воскресенье";
                weekday[1] = "Понедельник";
                weekday[2] = "Вторник";
                weekday[3] = "Среда";
                weekday[4] = "Четверг";
                weekday[5] = "Пятница";
                weekday[6] = "Суббота";

                return weekday[day]+" "+data+"-"+month+"-"+year;
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
                }else if(type==="brunch"){
                    rusMealType="Полдник"
                }
                return rusMealType
            },
            dateFormat(str){
                let date = new Date(str)
                let data = date.getDate();
                let month = date.getMonth()+1;
                let year = date.getFullYear();
                return data+"."+month+"."+year
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
        },
        computed:{
            getFilteredSubList(){
                return this.$store.getters['subscription/getFilteredShopList']
            }
        }
    }
</script>

<style scoped>

</style>