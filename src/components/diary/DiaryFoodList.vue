<template>
    <ul class="paper diary__food-list">
        <li v-for="(meal, mId) in subs.meals" :key="mId">
            <p>{{ ruMealType(meal.mealType) }}</p>
            <span>{{ roundUp($parent.getMealWeights(mId).kilocalories) }} Кал</span>
            <div class="diary__food-wrap slider">
                <div class="diary__food-track" data-glide-el="track">
                    <ul class="diary__food-sublist">
                        <li v-for="(rId, rKey) in meal.recipes" :key="rKey">
                            <div class="diary__food-img" @click="showModal(mId)">
                                <img :src="getRecipeImage(rId)">
                            </div>
                        </li>
                    </ul>
                </div>
<!--                <div class="diary__food-arrows" data-glide-el="controls">-->
<!--                    <button class="icon-button button-prev" type="button" data-glide-dir="&lt;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6" width="25" height="25">-->
<!--                        <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3-->
<!--    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>-->
<!--                    </svg>-->

<!--                    </button>-->
<!--                    <button class="icon-button button-next" type="button" data-glide-dir="&gt;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6" width="25" height="25">-->
<!--                        <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3-->
<!--    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>-->
<!--                    </svg>-->

<!--                    </button>-->
<!--                </div>-->
            </div>
        </li>
    </ul>
</template>

<script>
    import mainMixin from "../../mixins/mainMixin";

    export default {
        name: "DiaryFoodList",
        mixins: [mainMixin],
        methods: {
            getRecipeImage(rId) {
                return (this.subs.recipes[rId].cover === null)
                    ? ''
                    : this.subs.recipes[rId].cover.path
            },
            showModal(mId) {
                this.$emit('set-meal-for-modal', mId)
                this.eclipse.overlay.classList.add('show')
                this.eclipse.modal.classList.add('show', 'show-modal')
            },
        },
        computed: {
            subs() {
                return this.$parent.normalizedMeals.entities
            },
            eclipse() {
                return {
                    'close': document.querySelector('.modal__btn-close'),
                    'modal': document.querySelector('.modal.modal--food'),
                    'overlay': document.querySelector('.overlay'),
                }
            }
        },
        mounted() {
            this.eclipse.close.onclick = () => {
                this.eclipse.overlay.classList.remove('show', 'show-modal')
                this.eclipse.modal.classList.remove('show')
            }
        }
    }
</script>

<style scoped>

</style>
