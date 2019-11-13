<template>
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
                        <input class="visually-hidden" type="radio" name="type" value="first" v-model="typed" @change="sendType"><span class="input-radio__custom"></span>
                        <p>1 вид</p>
                    </label>
                    <label class="input-radio">
                        <input class="visually-hidden" type="radio" name="type" value="second" v-model="typed" @change="sendType"><span class="input-radio__custom"></span>
                        <p>2 вид</p>
                    </label>
                    <label class="input-radio">
                        <input class="visually-hidden" type="radio" name="type" value="third" v-model="typed" @change="sendType"><span class="input-radio__custom"></span>
                        <p>3 вид</p>
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
                        <input class="visually-hidden" type="radio" name="type" value="ingredient" v-model="picked" @change="sendPick"><span class="input-radio__custom"></span>
                        <p>Ингредиенты</p>
                    </label>
                    <label class="input-radio">
                        <input class="visually-hidden" type="radio" name="type" value="recipe" v-model="picked" @change="sendPick"><span class="input-radio__custom"></span>
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

</template>

<script>
    import ResetIcon from "./ResetIcon";
    import PreviousIcon from "./PreviousIcon";
    import NextIcon from "./NextIcon";
    export default {
        name: "PurchaseFilter",
        props:{
            pick:String,
            type:String
        },
        components:{
            ResetIcon,
            PreviousIcon,
            NextIcon
        },
        data(){
            return{
                picked:"ingredient",
                typed:"first"
            }
        },
        methods:{
            sendPick(){
                this.$emit('changePick',this.picked)
            },
            sendType(){
                this.$emit('changeType',this.typed)
            }
        }

    }
</script>

<style scoped>

</style>