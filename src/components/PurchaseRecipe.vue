<template>
        <div class="paper scheduler-food__day" v-if="typeOfView === 'first' ? recipeData.meals[typeOfMeal] : true" >
            <p class="scheduler-food__caption">{{ showTitleDateFormat(recipeData.date) }}</p>
            <div class="tabs__buttons tabs__buttons--separate scheduler-food__tabs-btn" v-if="typeOfView==='second'">
                <button class="tabs__btn"  :class="{ active: typeOfMealForDay === 'breakfast'}"  type="button" @click="typeOfMealForDay = 'breakfast'">Завтрак</button>
                <button class="tabs__btn" :class="{ active: typeOfMealForDay === 'dinner' }" type="button" @click="typeOfMealForDay = 'dinner'">Перекус</button>
                <button class="tabs__btn"  :class="{ active: typeOfMealForDay === 'lunch' }"  type="button" @click="typeOfMealForDay = 'lunch'">Обед</button>
                <button class="tabs__btn"   :class="{ active: typeOfMealForDay === 'supper' }"  type="button" @click="typeOfMealForDay = 'supper'">Ужин</button>
            </div>
            <ul class="scheduler-food__list">
                <RecipeItem v-for="recipe in recipeArr" :key="recipe.id" :recipeItem="recipe" :meal="typeOfView === 'first' ? typeOfMeal : typeOfMealForDay" :open="recipe.open" :show="recipe.show" v-on:openItem="open(recipe.id)"  v-on:showItem="show(recipe.id)" />
                <li class="buy__add">
                    <div class="buy__input">
                        <input type="text" placeholder="Добавить еще покупку">
                        <button class="button-add button-add--green buy__btn-add" type="button">Добавить</button>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
    import RecipeItem from "./RecipeItem";
    export default {
        name: "PurchaseRecipe",
        components: {RecipeItem},
        props: ['typeOfView','typeOfMeal','sortType','fromDate','toDate',"recipeData"],
        data(){
            return{
                recipes: [],
                typeOfMealForDay:'breakfast',
                mealDate: '',
                recipe: {},
                recipeArr: []
            }
        },
        methods:{
            showTitleDateFormat(str){
                let date = new Date(str);
                let day = date.getDay();
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
            open(id){
                this.recipeArr = this.recipeArr.map((value)=>{
                    if (value.id === id) {
                        value.open = !value.open
                    }

                    return value
                })
            },
            show(id){
                this.recipeArr = this.recipeArr.map((value)=>{
                    if (value.id === id) {
                        value.show = !value.show
                    }
                    return value
                })
            },
        },
        watch: {
            recipeData: {
                immediate: true,
                handler(val) {
                    this.recipe = val
                }
            },
            sortType: {
                immediate: true,
                handler(sortType) {
                    if (sortType === 'desc'){
                        this.recipeArr = this.recipeArr.sort(function(x, y) {
                            let nameA = x.title.toLowerCase(), nameB = y.title.toLowerCase()
                            if (nameA < nameB)
                                return 1
                            if (nameA > nameB)
                                return -1
                            return 0
                        });
                    }else{
                        this.recipeArr = this.recipeArr.sort(function(x, y) {
                            let nameA = x.title.toLowerCase(), nameB = y.title.toLowerCase()
                            if (nameA < nameB)
                                return 1
                            if (nameA > nameB)
                                return -1
                            return 0
                        });
                        this.recipeArr.reverse()
                    }
                }
            },
            typeOfMealForDay: {
                immediate: true,
                handler(typeOfMealForDay) {
                    if (typeOfMealForDay === 'dinner') {
                        this.recipeArr = []
                        if (this.$props.recipeData.meals.brunch) {
                            this.recipeArr = [...this.$props.recipeData.meals.brunch]
                        }

                        if (this.$props.recipeData.meals.dinner) {
                            this.recipeArr = [...this.$props.recipeData.meals.dinner]
                        }
                    } else {
                        this.recipeArr = this.$props.recipeData.meals[typeOfMealForDay]
                    }

                }
            },
            typeOfView: {
                immediate: true,
                handler(typeOfView) {
                    if (typeOfView === 'first') {
                        this.recipeArr = this.$props.recipeData.meals[this.$props.typeOfMeal]
                    } else {
                        this.recipeArr = this.$props.recipeData.meals[this.typeOfMealForDay]
                    }
                }
            },
            typeOfMeal: {
                immediate: true,
                handler(typeOfMeal) {
                    this.recipeArr = this.$props.recipeData.meals[typeOfMeal]
                }
            },

        },
        mounted() {
            if (this.$props.typeOfView === 'first') {
                this.recipeArr = this.$props.recipeData.meals[this.typeOfMealForDay]
            } else {
                this.recipeArr = this.$props.recipeData.meals[this.$props.typeOfMeal]
            }
        }
    }
</script>

<style scoped>

</style>