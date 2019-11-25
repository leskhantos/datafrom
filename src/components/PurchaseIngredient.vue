<template>
    <ul class="paper buy__list">
        <li :class="['buy__item',{'open':ingredient.open}]" v-for="ingredient in ingredients" :key="ingredient.id">
            <div class="buy__item-wrap">
                <label class="input-checkbox">
                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                    <p>{{ ingredient.title }} {{ingredient.weight}}г</p>
                </label>
                <button class="button-add buy__item-add" type="button" title="Купить ещё" @click="showBuyMoreModal=true"></button>
                <button :class="['icon-button buy__item-arrow',{'open':ingredient.open}]" type="button" title="Открыть" @click="openItem(ingredient.id)">
                    <DownIcon/>
                </button>
                <button :class="['icon-button buy__item-action',{'show':ingredient.show}]" type="button" title="Действия" @click="showItem(ingredient.id)">
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
            <div :class="['buy__item-dropdown',{'open':ingredient.open}]">
                <ul class="buy__sublist">
                    <li class="buy__item" v-for="recipe in ingredient.recipes" :key="recipe.id">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p @click="showRecipeAddModal=true"> {{recipe.title}} {{ingredient.weight}} г</p>
                            </label>
                            <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль">
                                <ProfileAddIcon/>
                            </button>
                            <button :class="['icon-button buy__item-action',{'show':recipe.show}]" type="button" title="Действия" @click="showChildItem(ingredient.id,recipe.id)" >
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

                            <p class="buy__item-meta">{{getTranslatedMealType(ingredient.mealType)}}: {{ showDateFormat(ingredient.date)}}</p>
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
</template>

<script>
    import DownIcon from "./icons/DownIcon";
    import ActionsIcon from "./icons/ActionsIcon";
    import ClockIcon from "./icons/ClockIcon";
    import CloseIcon from "./icons/CloseIcon";
    import ProfileAddIcon from "./icons/ProfileAddIcon";

    export default {
        name: "PurchaseIngredient",
        props:['sortType'],
        components: {ProfileAddIcon, CloseIcon, ClockIcon, ActionsIcon, DownIcon},
        data(){
            return{
                ingredients: []
            }
        },
        methods:{
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
                    rusMealType="Перекус"
                }
                return rusMealType
            },
            showChildItem(id,rec_id){
                this.ingredients=this.ingredients.map(function (value){
                    if (value.id === id){
                        value.recipes.map(function (val) {
                            if(val.id === rec_id){
                                val.show = !val.show
                            }
                        })
                    }
                    return value;
                })
            },
            showItem(id){
                this.ingredients=this.ingredients.map(function (value){
                    if (value.id === id){
                        value.show = !value.show
                    }
                    return value;
                })
            }
            ,openItem(id){
                this.ingredients=this.ingredients.map(function (value){
                    if (value.id === id){
                        value.open = !value.open
                    }
                    return value;
                })
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
            let arr = Object.values(this.$store.getters['subscription/getIngredients'])
            let recipes = this.$store.getters['subscription/getRecipes']
            arr.map((value)=>{
                value.mealType = this.$store.getters['subscription/getMealType'](value)
                value.date = this.$store.getters['subscription/getDate'](value)
                value.weight = this.$store.getters['subscription/getWeight'](value)
                value.recipes = this.$store.getters['subscription/getRecipesByIngredient'](value,recipes)
                return value
            })
            this.ingredients =  arr
        },
        watch: {
            'sortType': function () {
                    this.ingredients = this.$store.getters['subscription/getSortedIngredients'](this.sortType)
                },
        }
    }
</script>

<style scoped>

</style>