<template>
    <section class="scheduler-food">
        <div class="paper scheduler-food__day"  v-for="recipe in recipes" :key="recipe.id">
            <p class="scheduler-food__caption">{{ showTitleDateFormat(recipe.date) }}</p>
            <div class="tabs__buttons tabs__buttons--separate scheduler-food__tabs-btn" v-if="typeOfView==='second'">
                <button class="tabs__btn" :class="{ active: typeOfMealForDay === 'breakfast'}"  type="button" @click="getFilteredByMealOfDay('breakfast',recipe.date)">Завтрак</button>
                <button class="tabs__btn" :class="{ active: typeOfMealForDay === 'brunch' }" type="button" @click="getFilteredByMealOfDay('brunch',recipe.date)">Перекус</button>
                <button class="tabs__btn" :class="{ active: typeOfMealForDay === 'lunch' }"  type="button" @click="getFilteredByMealOfDay('lunch',recipe.date)">Обед</button>
                <button class="tabs__btn" :class="{ active: typeOfMealForDay === 'supper' }"  type="button" @click="getFilteredByMealOfDay('supper',recipe.date)">Ужин</button>
            </div>
            <ul class="scheduler-food__list">
                <li class="scheduler-food__item">
                    <div class="scheduler-food__item-wrap">
                        <label class="input-checkbox">
                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                            <p>{{ recipe.title }}</p>
                        </label>
                        <button  :class="['icon-button scheduler-food__btn-submenu',{'open':recipe.open}]"  class="" type="button" title="Открыть" @click="openItem(recipe.id)">
                            <DownIcon/>
                        </button>
                        <button class="icon-button icon-button--big modal-add-user" type="button" title="Добавить профиль">
                            <ProfileAddIcon/>
                        </button>
                        <button :class="['icon-button buy__item-action',{'show':recipe.show}]" type="button" title="Действия" @click="showItem(recipe.id)">
                            <ActionsIcon/>
                        </button>
                        <section :class="['paper actions anim-show-action',{'show':recipe.show}]">
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
                            <p class="composed"><span class="orange">{{(recipe.proteins).toFixed(2)}}</span><span class="yellow">{{(recipe.fats).toFixed(2)}}</span><span class="green">{{(recipe.carboHydrates).toFixed(2)}}</span></p>
                            <p class="scheduler-food__weight">{{ recipe.weight }} г</p>
                            <p class="scheduler-food__ccal">{{ recipe.calories }} Кал</p>
                            <p class="scheduler-food__item-date">{{getTranslatedMealType(recipe.mealType)}}: <b>{{showDateFormat(recipe.date)}}</b></p>
                        </div>
                    </div>
                    <div  :class="['scheduler-food__item-dropdown',{'open':recipe.open}]">
                        <ul class="scheduler-food__sublist">
                            <li class="scheduler-food__item" v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                                <div class="scheduler-food__item-wrap">
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p> {{ingredient.title}} {{ingredient.weight}} г</p>
                                    </label>
                                    <button  :class="['icon-button buy__item-action',{'show':ingredient.show}]" type="button" title="Действия" @click="showChildItem(recipe.id,ingredient.id)">
                                        <ActionsIcon/>
                                    </button>
                                    <section :class="['paper actions anim-show-action',{'show':ingredient.show}]">
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
        props: ['typeOfView','typeOfMeal','sortType','fromDate','toDate'],
        data(){
            return{
                recipes: [],
                typeOfMealForDay:'',
                mealDate: ''
            }
        },
        methods:{
            getFilteredByMealOfDay(type,date){
                this.typeOfMealForDay = type
                this.mealDate = date
            },
            getTranslatedMealType(type){
                let rusMealType
                switch(type){
                    case 'breakfast':
                        rusMealType="Завтрак";
                        break;
                    case 'supper':
                        rusMealType="Ужин";
                        break;
                    case 'dinner':
                        rusMealType="Перекус";
                        break;
                    case 'lunch':
                        rusMealType="Обед";
                        break;
                    case 'brunch':
                        rusMealType="Перекус";
                        break;
                    default:
                        rusMealType="Нужно перевести";
                        break;
                }
                return rusMealType
            },
            showChildItem(id,ingr_id){
                this.recipes=this.recipes.map(function (value){
                    if (value.id === id){
                        value.ingredients.map(function (val) {
                            if(val.id === ingr_id){
                                val.show = !val.show
                            }
                        })
                    }
                    return value;
                })
            },
            showItem(id){
                this.recipes=this.recipes.map(function (value){
                    if (value.id === id){
                        value.show = !value.show
                    }
                    return value;
                })
            }
            ,openItem(id){
                this.recipes=this.recipes.map(function (value){
                    if (value.id === id){
                        value.open = !value.open
                    }
                    return value;
                })
            },
            showTitleDateFormat(str){
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
            showDateFormat(str){
                let date = new Date(str)
                let data = date.getDate();
                let month = date.getMonth()+1;
                let year = date.getFullYear();
                return data+"."+month+"."+year
            },
        },
        computed:{
        },
        mounted() {
            let arr =  Object.values(this.$store.getters['subscription/getRecipes'])
            let ingredients = this.$store.getters['subscription/getIngredients']
            arr.map((value)=> {
                value.date = this.$store.getters['subscription/getDate'](value)
                value.weight = this.$store.getters['subscription/getWeight'](value)
                value.calories = this.$store.getters['subscription/getCalories'](value,ingredients)
                value.proteins = this.$store.getters['subscription/getProteins'](value,ingredients)
                value.fats = this.$store.getters['subscription/getFats'](value,ingredients)
                value.carboHydrates = this.$store.getters['subscription/getCarboHydrates'](value,ingredients)
                value.mealType = this.$store.getters['subscription/getMealType'](value)
                value.ingredients = this.$store.getters['subscription/getIngredientsByRecipe'](value, ingredients)
                return value
            })
            // eslint-disable-next-line no-console
            console.log(arr)
            this.recipes = arr
        },
        watch: {
            'sortType':  function () {
                this.recipes = this.$store.getters['subscription/getSortedRecipes'](this.sortType)
            },
            'typeOfMeal': function () {
                let recipes = this.$store.getters['subscription/getRecipes']
                this.recipes = this.$store.getters['subscription/getByTypeOfAllMeal'](this.typeOfMeal,recipes)
            },
            'typeOfMealForDay': function () {
                this.recipes = this.$store.getters['subscription/getByTypeOfMealForDay'](this.typeOfMealForDay,this.mealDate)
            },
            'typeOfView': function () {
                let arr =  Object.values(this.$store.getters['subscription/getRecipes'])
                let ingredients = this.$store.getters['subscription/getIngredients']
                arr.map((value)=> {
                value.date = this.$store.getters['subscription/getDate'](value)
                value.weight = this.$store.getters['subscription/getWeight'](value)
                value.calories = this.$store.getters['subscription/getCalories'](value,ingredients)
                value.proteins = this.$store.getters['subscription/getProteins'](value,ingredients)
                value.fats = this.$store.getters['subscription/getFats'](value,ingredients)
                value.carboHydrates = this.$store.getters['subscription/getCarboHydrates'](value,ingredients)
                value.mealType = this.$store.getters['subscription/getMealType'](value)
                value.ingredients = this.$store.getters['subscription/getIngredientsByRecipe'](value, ingredients)
                return value
            })
                this.typeOfMealForDay=''
                this.recipes = arr
            },
            'fromDate': function () {
                let recipes = this.$store.getters['subscription/getRecipes']
                this.recipes = this.$store.getters['subscription/getFilteredRecipesByDate'](this.fromDate,this.toDate,recipes)
            },
            'toDate':function () {
                let recipes = this.$store.getters['subscription/getRecipes']
                this.recipes = this.$store.getters['subscription/getFilteredRecipesByDate'](this.fromDate,this.toDate,recipes)
            }
        }
    }
</script>

<style scoped>

</style>