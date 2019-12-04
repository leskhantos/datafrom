<template>
    <ul class="diary__list">
        <li v-for="(meal, mId) in subs.meals" :key="mId" class="paper diary__item">
            <div class="diary__images">
                <div v-for="(rId, rKey) in meal.recipes" :key="rKey" class="diary__img">
                    <img :src="getRecipeImage(rId)">
                </div>

<!--                <div class="diary__img center"><img src="/static/images/jpg/diary-2.jpg" alt="diary"></div>-->
<!--                <div class="diary__img mixed"><img src="/static/images/jpg/diary-1.jpg" alt="diary"></div>-->
            </div>
            <div class="diary__item-title">
                <h2>{{ ruMealType(meal.mealType) }}</h2>
                <p class="composed">
                    <span class="orange">{{ roundUp($parent.getMealWeights(mId).nutrients.fats) }}</span>
                    <span class="yellow">{{ roundUp($parent.getMealWeights(mId).nutrients.carbohydrates) }}</span>
                    <span class="green">{{ roundUp($parent.getMealWeights(mId).nutrients.proteins) }}</span>
                </p>
                <div class="diary__meta">
                    <p class="diary__cal">{{ roundUp($parent.getMealWeights(mId).kilocalories) }} Кал</p>
                </div>
            </div>
            <div class="diary__dish-group">
                <div v-for="(rId, rKey) in meal.recipes" :key="rKey">
                    <div class="diary__dish">
                        <CutleryIcon/>
                        <div class="diary__dish-name">
                            <p>{{ subs.recipes[rId].title }}</p>
                        </div>
                        <button class="icon-button diary__dish-btn-submenu" type="button" title="Открыть" @click="revealMeals($event)">
                            <RevealIcon/>
                        </button>
                        <p class="composed">
                            <span class="orange">{{ roundUp($parent.getSumRecipeWeights(rId).nutrients.fats) }}</span>
                            <span class="yellow">{{ roundUp($parent.getSumRecipeWeights(rId).nutrients.carbohydrates) }}</span>
                            <span class="green">{{ roundUp($parent.getSumRecipeWeights(rId).nutrients.proteins) }}</span>
                        </p>
                        <div class="diary__meta">
                            <p class="diary__weight">{{ roundUp(subs.recipes[rId].weight) }}г.</p>
                            <p class="diary__cal">{{ roundUp($parent.getSumRecipeWeights(rId).kilocalories) }} Кал</p>
                        </div>
                    </div>
                    <div class="diary__dish-wrapper">
                        <div v-for="(iId, iKey) of subs.mealRecipes[rId].ingredients" :key="iKey" class="diary__dish">
                            <div class="diary__dish-name">
                                <p>{{ subs.ingredients[iId].title }}</p>
                            </div>
                            <p class="composed"><span class="orange">62</span><span class="yellow">70</span><span class="green">30</span></p>
                            <div class="diary__meta">
                                <p class="diary__weight">{{ roundUp(subs.ingredients[iId].weight) }}г.</p>
                                <p class="diary__cal">89 Кал</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="diary__dish-caption"><span>2</span> Объединить в блюдо</p>
            </div>
            <button class="diary__btn-add" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="25" height="25">
                <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
            </svg>
                <span>Добавить завтрак</span>
            </button>
        </li>
    </ul>
</template>

<script>
import CutleryIcon from "../icons/CutleryIcon";
import RevealIcon from "../icons/RevealIcon";
import mainMixin from "../../mixins/mainMixin";

export default {
    name: "DiaryList",
    components: {
        RevealIcon,
        CutleryIcon
    },
    mixins: [mainMixin],
    methods: {
        revealMeals(e) {
            e.target.classList.toggle('open')
            e.target.parentNode.nextSibling.classList.toggle('open')
        },
        getRecipeImage(rId) {
            return (this.$parent.normalizedMeals.entities.recipes[rId].cover === null)
                ? ''
                : this.$parent.normalizedMeals.entities.recipes[rId].cover.path
        }
    },
    computed: {
        subs() {
            return this.$parent.normalizedMeals.entities
        },
        sumRecipeWeights() {
            return this.$parent.sumRecipeWeights
        },
        mealWeights() {
            return this.$parent.mealWeights
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>

</style>