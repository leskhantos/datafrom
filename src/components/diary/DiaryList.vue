<template>
    <ul class="diary__list">
        <li v-for="(meal, mId) in subs.meals" :key="mId" class="paper diary__item">
            <div class="diary__images">
                <div class="diary__img"><img src="/static/images/jpg/diary-5.jpg" alt="diary"></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
                <path d="M12.3,4.2C12.3,4.2,12.2,4.2,12.3,4.2C12,4.5,7,11.8,7,14.7c0,3,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5c0-2.9-5-10.2-5.2-10.5
	C12.7,4.1,12.4,4.1,12.3,4.2z M12.5,19.6c-2.7,0-4.8-2.2-4.8-4.8c0-2.4,3.8-8.2,4.8-9.7c1,1.6,4.8,7.4,4.8,9.7
	C17.3,17.4,15.2,19.6,12.5,19.6z"/>
                <path d="M12.1,18.7c2.6,0,4.7-2.1,4.7-4.7h-0.7c0,2.2-1.8,4-4,4V18.7z"/>
                <path d="M12.5,0C5.6,0,0,5.6,0,12.5S5.6,25,12.5,25S25,19.4,25,12.5C25,5.6,19.4,0,12.5,0z M12.5,24.2c-6.4,0-11.7-5.2-11.7-11.7
	S6.1,0.8,12.5,0.8s11.7,5.2,11.7,11.7C24.2,18.9,18.9,24.2,12.5,24.2z"/>
            </svg>

                <div class="diary__img"><img src="/static/images/jpg/diary-4.jpg" alt="diary"></div>
                <div class="diary__img center"><img src="/static/images/jpg/diary-2.jpg" alt="diary"></div>
                <div class="diary__img mixed"><img src="/static/images/jpg/diary-1.jpg" alt="diary"></div>
                <div class="diary__img"><img src="/static/images/jpg/diary-3.jpg" alt="diary"></div>
            </div>
            <div class="diary__item-title">
                <h2>{{ ruMealType(meal.mealType) }}</h2>
                <p class="composed">
                    <span class="orange">{{ roundUp(getMealWeights(mId).nutrients.fats) }}</span>
                    <span class="yellow">{{ roundUp(getMealWeights(mId).nutrients.carbohydrates) }}</span>
                    <span class="green">{{ roundUp(getMealWeights(mId).nutrients.proteins) }}</span>
                </p>
                <div class="diary__meta">
                    <p class="diary__cal">{{ roundUp(getMealWeights(mId).kilocalories) }} Кал</p>
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
                            <span class="orange">{{ roundUp(getSumRecipeWeights(rId).nutrients.fats) }}</span>
                            <span class="yellow">{{ roundUp(getSumRecipeWeights(rId).nutrients.carbohydrates) }}</span>
                            <span class="green">{{ roundUp(getSumRecipeWeights(rId).nutrients.proteins) }}</span>
                        </p>
                        <div class="diary__meta">
                            <p class="diary__weight">{{ roundUp(subs.recipes[rId].weight) }}г.</p>
                            <p class="diary__cal">{{ roundUp(getSumRecipeWeights(rId).kilocalories) }} Кал</p>
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
        ruMealType(val) {
            const types = {
                'breakfast': 'Завтрак',
                'lunch': 'Обед',
                'snack': 'Перекус',
                'dinner': 'Ужин',
            }

            return types[val]
        },
        revealMeals(e) {
            e.target.classList.toggle('open')
            e.target.parentNode.nextSibling.classList.toggle('open')
        },
        getSumRecipeWeights(rId) {
            if (Object.is(this.$parent.sumRecipeWeights[rId], undefined)) {
                return {
                    kilocalories: 0,
                    nutrients: {
                        proteins: 0,
                        fats: 0,
                        carbohydrates: 0
                    },
                    weight: 0,
                }
            }

            return this.$parent.sumRecipeWeights[rId]
        },
        getMealWeights(mId) {
            if (Object.is(this.$parent.mealWeights[mId], undefined)) {
                return {
                    kilocalories: 0,
                    nutrients: {
                        proteins: 0,
                        fats: 0,
                        carbohydrates: 0
                    },
                    weight: 0,
                }
            }

            return this.$parent.mealWeights[mId]
        },

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