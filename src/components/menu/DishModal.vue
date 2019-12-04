<template>
    <div :class="show ? 'modal modal--dish show': 'modal modal--dish'">
        <button class="icon-button modal__btn-close" type="button"
                @click="$emit('modalClose')">
            <CloseForModalIcon />
        </button>
        <div class="modal__container">
            <div class="modal__grid">
                <div class="modal__col">
                    <div class="modal__slider">
                        <div class="modal__track" data-glide-el="track">
                            <ul class="modal__slides">
                                <li>
                                    <div class="modal__slide-image"><img :src="recipeForModal.recipe.cover ? recipeForModal.recipe.cover.path : ''"
                                                                         alt="dish">
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="modal__bullets" data-glide-el="controls[nav]">
                        </div>
                    </div>
                </div>
                <div class="modal__col">
                    <h2 class="modal__title">{{recipeForModal.recipe.title}}</h2>
                    <div class="modal-dish__desc">
                        <div class="modal-dish__col">
                            <p>{{recipeForModal.recipe.numbersOfServings}} порция(и)
                                <span>{{recipeForModal.weight}} гр.</span>
                            </p>
                            <p><span
                                    class="color-orange">{{recipeForModal.kilocalories}} Ккал</span><span>1200/1500</span>
                                3% нормы</p>
                        </div>
                        <div class="modal-dish__col">
                            <button class="button modal-dish__btn" type="button">Съел(а)</button>
                        </div>
                        <div class="modal-dish__col">
                            <div class="diary__chart modal-dish__chart">
                                <div class="diary__chart-col red">
                                    <div class="diary__chart-range">
                                        <div style="height: 60%"></div>
                                    </div>
                                    <span>Б</span><span>{{recipeForModal.proteins}}</span>
                                </div>
                                <div class="diary__chart-col yellow">
                                    <div class="diary__chart-range">
                                        <div style="height: 70%"></div>
                                    </div>
                                    <span>Ж</span><span>{{recipeForModal.fats}}</span>
                                </div>
                                <div class="diary__chart-col green">
                                    <div class="diary__chart-range">
                                        <div style="height: 60%"></div>
                                    </div>
                                    <span>У</span><span>{{recipeForModal.carbohydrates}}</span>
                                </div>
                            </div>
                            <p class="modal-dish__text">3%&nbsp;&nbsp;2%&nbsp;&nbsp;5%<br> от нормы</p>
                        </div>
                    </div>
                </div>
                <div class="modal__col">
                    <div class="modal__tab-buttons">
                        <button :class="['modal__tab-btn', { 'active':tab === 'DishDescription' }]" type="button"
                                @click="tab='DishDescription'">Описание
                            блюда
                        </button>
                        <button :class="['modal__tab-btn', { 'active':tab === 'Ingredients' }]" type="button"
                                @click="tab='Ingredients'">Ингредиенты
                        </button>
                        <button :class="['modal__tab-btn', { 'active':tab === 'Cooking' }]" type="button"
                                @click="tab='Cooking'">Готовим
                        </button>
                    </div>
                    <div class="modal__tab-content-wrapper">
                        <DishDescription
                                :active="currentTab === 'DishDescription'"
                                :recipeForModal="recipeForModal"
                        >
                        </DishDescription>
                        <Ingredients
                                :active="currentTab === 'Ingredients'"
                                :recipeForModal="recipeForModal"
                        >
                        </Ingredients>
                        <Cooking
                                :active="currentTab === 'Cooking'"
                                :recipeForModal="recipeForModal"
                        >
                        </Cooking>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import DishDescription from "./DishDescription";
  import Ingredients from "./Ingredients";
  import Cooking from "./Cooking";
  import CloseForModalIcon from "../icons/CloseForModalIcon";

  export default {
    name: "DishModal",
    props: ['show', 'recipeForModal'],
    components: {
      CloseForModalIcon,
      DishDescription,
      Ingredients,
      Cooking
    },
    data() {
      return {
        tab: 'DishDescription'
      }
    },
    computed: {
      currentTab() {
        return this.tab
      },
    },
    mounted() {
      this.tab = 'DishDescription'
    }
  }
</script>

<style scoped>
</style>
