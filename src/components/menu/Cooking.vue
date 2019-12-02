<template>
    <div :class="active ? 'modal__tab-content active' : 'modal__tab-content'">
        <div class="modal-dish__wrap-caption">
            <p class="modal-dish__caption"><b>Готовим</b></p>
        </div>
        <ul class="modal-dish__cook-steps">
            <li v-for="step in cookingSteps" :key="step.id"><img
                    :src="step.cookingStepCover ? step.cookingStepCover.path : ''" alt="dish">
                <div>
                    <p class="modal-dish__cook-step">Шаг {{step.position}}</p>
                    <p class="modal-dish__cook-desc">{{step.guide}}</p>
                    <p class="modal-dish__cook-help">Как порезать морковь?</p>
                </div>
            </li>
        </ul>
        <p class="modal-dish__caption"><b>Сервировка</b></p>
        <div class="modal-dish__cook-wrap">
            <p class="modal-dish__cook-desc">{{recipeForModal.recipe.serving}}</p>
        </div>
        <div class="modal-dish__cook-wrap">
<!--            <div>-->
<!--                <p class="modal-dish__caption small">Ваш комментарий</p>-->
<!--                <form class="modal-dish__form">-->
<!--                    <textarea placeholder="Ваш комментарий"></textarea>-->
<!--                    <button class="button button&#45;&#45;no-fill modal-dish__form-btn" type="button">-->
<!--                        Отправить-->
<!--                    </button>-->
<!--                </form>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
  export default {
    name: "Cooking",
    props: ["active", "recipeForModal"],
    data() {
      return {
        cookingSteps: []
      }
    },
    watch: {
      recipeForModal: {
        immediate: true,
        handler(val) {
          if (val.recipe.cookingSteps) {
            this.cookingSteps = val.recipe.cookingSteps.sort((a, b) => {
              return a.position - b.position
            })
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
