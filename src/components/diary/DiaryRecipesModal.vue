<template>
    <div class="modal modal--food">
        <button class="icon-button modal__btn-close" type="button">
            <CloseIcon/>
        </button>
        <div class="modal__container">
            <ul class="menu__scheduler-dish-list">
                <li v-for="(rId, rKey) in modalRecipes" :key="rKey" class="menu__scheduler-dish-item">
                    <div class="menu__scheduler-image">
                        <img :src="getRecipeImage(rId)" :alt="recipes[rId].title">
                    </div>
                    <div class="menu__scheduler-content">
                        <p class="menu__scheduler-desc">{{ recipes[rId].title }}</p>
                        <p class="composed">
                            <span class="orange">{{ roundUp($parent.getSumRecipeWeights(rId).nutrients.fats) }}</span>
                            <span class="yellow">{{ roundUp($parent.getSumRecipeWeights(rId).nutrients.carbohydrates) }}</span>
                            <span class="green">{{ roundUp($parent.getSumRecipeWeights(rId).nutrients.proteins) }}</span>
                        </p>
                        <p class="menu__scheduler-calories">
                            <span>{{ roundUp(recipes[rId].weight) }}г.</span>
                            {{ roundUp($parent.getSumRecipeWeights(rId).kilocalories) }} Кал
                        </p>
                        <button class="button" type="button">Съел(а)</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import CloseIcon from "../icons/CloseIcon";
    import mainMixin from "../../mixins/mainMixin";

    export default {
        name: "DiaryRecipesModal",
        props: ['modalMealId'],
        mixins: [mainMixin],
        components: {
            CloseIcon
        },
        methods: {
            getRecipeImage(rId) {
                return (this.$parent.normalizedMeals.entities.recipes[rId].cover === null)
                    ? ''
                    : this.$parent.normalizedMeals.entities.recipes[rId].cover.path
            }
        },
        computed: {
            recipes() {
                return this.$parent.normalizedMeals.entities.recipes
            }
        },
        watch: {
            modalMealId(v) {
                this.modalRecipes = this.$parent.normalizedMeals.entities.meals[v].recipes
            }
        },
        data() {
            return {
                modalRecipes: {}
            }
        },
    }
</script>

<style scoped>

</style>