<template>
    <div :class="active ? 'modal__tab-content active' : 'modal__tab-content'">
        <div class="modal__tab-content-col flex">
            <div class="modal__level">
                <p>Уровень сложности: <span>{{difficulty}}</span></p>
                <div class="modal__level-range">
                    <div style="width: 70%">
                        <div class="modal__level-line"></div>
                    </div>
                </div>
            </div>
            <p class="modal-dish__text"><span
                    class="color-orange">{{recipeForModal.kilocalories}} Ккал</span><span>1200/1500</span> 3% нормы</p>
            <div class="diary__chart modal-dish__chart modal-dish__chart--horizontal">
                <div class="diary__chart-col green">
                    <div class="diary__chart-range">
                        <div style="width: 60%"></div>
                    </div>
                    <span>Б</span><span>{{recipeForModal.proteins}}</span>
                </div>
                <div class="diary__chart-col red">
                    <div class="diary__chart-range">
                        <div style="width: 70%"></div>
                    </div>
                    <span>Ж</span><span>{{recipeForModal.fats}}</span>
                </div>
                <div class="diary__chart-col yellow">
                    <div class="diary__chart-range">
                        <div style="width: 60%"></div>
                    </div>
                    <span>У</span><span>{{recipeForModal.carbohydrates}}</span>
                </div>
            </div>
            <div class="modal__attention">
                <p class="modal__attention-title">Требуется подготовка:</p>
                <p class="modal__attention-text">{{recipeForModal.recipe.preparingDesc}}</p>
            </div>
        </div>
        <div class="modal__tab-content-col two-column">
            <div>
                <p class="modal-dish__caption">Инвентарь:</p>
                <div class="slider__cutlery">
                    <div class="slider__cutlery-track" data-glide-el="track">
                        <ul class="slider__cutlery-list">
                            <li><img src="/static/images/png/cooking.png" alt="cutlery"></li>
                            <li><img src="/static/images/png/dinner.png" alt="cutlery"></li>
                            <li><img src="/static/images/png/oven.png" alt="cutlery"></li>
                            <li><img src="/static/images/png/cooking.png" alt="cutlery"></li>
                            <li><img src="/static/images/png/dinner.png" alt="cutlery"></li>
                            <li><img src="/static/images/png/oven.png" alt="cutlery"></li>
                        </ul>
                    </div>
                    <div class="slider__cutlery-arrows" data-glide-el="controls">
                        <button class="icon-button slider__cutlery-arrow slider__cutlery-arrow--prev"
                                type="button" data-glide-dir="&lt;">
                            <ArrowLeft></ArrowLeft>
                        </button>
                        <button class="icon-button slider__cutlery-arrow slider__cutlery-arrow--next"
                                type="button" data-glide-dir="&gt;">
                            <ArrowRight></ArrowRight>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <p class="modal-dish__caption">Время готовки:</p>
                <p class="modal-dish__time">{{recipeForModal.recipe.cookingTime}} мин</p>
            </div>
        </div>
        <div class="modal__tab-content-col">
            <p class="modal-dish__heading">Описание блюда</p>
            <p class="modal-dish__description">{{recipeForModal.recipe.notificationDesc}}</p>
        </div>
    </div>
</template>

<script>
  import ArrowLeft from "../icons/ArrowLeftIcon";
  import ArrowRight from "../icons/ArrowRightIcon";

  export default {
    name: "DishDescription",
    components: {ArrowRight, ArrowLeft},
    props: ['recipeForModal', 'active'],
    data() {
      return {
        difficulty: ''
      }
    },
    mounted() {
      if (this.recipeForModal.recipe.difficulty === 'easy') {
        this.difficulty = 1
      } else if (this.recipeForModal.recipe.difficulty === 'normal') {
        this.difficulty = 2
      } else if (this.recipeForModal.recipe.difficulty === 'hard') {
        this.difficulty = 3
      }
    },
    watch: {
      recipeForModal: function () {
        if (this.recipeForModal.recipe.difficulty === 'easy') {
          this.difficulty = 1
        } else if (this.recipeForModal.recipe.difficulty === 'normal') {
          this.difficulty = 2
        } else if (this.recipeForModal.recipe.difficulty === 'hard') {
          this.difficulty = 3
        }
      },
    }
  }
</script>

<style scoped>

</style>
