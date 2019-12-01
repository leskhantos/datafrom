<template>
    <li class="scheduler-food__item" v-if="recipe">
        <div class="scheduler-food__item-wrap">
            <label class="input-checkbox">
                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                <p>{{ recipe.title }}</p>
            </label>
            <button :class="['icon-button scheduler-food__btn-submenu',{'open':open}]" class="" type="button"
                    title="Открыть" @click="$emit('openItem')">
                <DownIcon />
            </button>
            <button class="icon-button icon-button--big modal-add-user" type="button" title="Добавить профиль">
                <ProfileAddIcon />
            </button>
            <!--            <button :class="['icon-button buy__item-action',{'show':show}]" type="button" title="Действия" @click="$emit('showItem')">-->
            <!--                <ActionsIcon/>-->
            <!--            </button>-->
            <section :class="['paper actions anim-show-action',{'show':recipe.show}]">
                <div class="actions__item">
                    <div class="actions__img">
                        <ClockIcon />
                    </div>
                    <label class="input-checkbox">
                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                        <p>Отложить на 24 часа</p>
                    </label>
                </div>
                <div class="actions__item">
                    <div class="actions__img" style="width: 20px; margin-left: 18px;">
                        <CloseIcon />
                    </div>
                    <label class="input-checkbox">
                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                        <p>Скрыть</p>
                    </label>
                </div>
            </section>
            <div class="scheduler-food__meta">
                <p class="composed"><span class="orange" v-if="recipe.proteins">{{((recipe.weight/100)*recipe.proteins).toFixed(0)}}</span>
                    <span class="yellow" v-if="recipe.fats">{{((recipe.weight/100)*recipe.fats).toFixed(0)}}</span>
                    <span class="green" v-if="recipe.carboHydrates">{{((recipe.weight/100)*recipe.carboHydrates).toFixed(0)}}</span>
                </p>
                <p class="scheduler-food__weight">{{ recipe.weight }} г</p>
                <p class="scheduler-food__ccal">{{ ((recipe.weight/100)*recipe.calories).toFixed(0) }} ККал</p>
                <p class="scheduler-food__item-date">{{getTranslatedMealType(meal)}}:
                    <b>{{showDateFormat(date)}}</b></p>
            </div>
        </div>
        <div v-if="open" :class="['scheduler-food__item-dropdown',{'open':open}]">
            <ul class="scheduler-food__sublist">
                <li class="scheduler-food__item" v-for="ingredient in recipe.ingredients" :key="ingredient.id">
                    <div class="scheduler-food__item-wrap">
                        <label class="input-checkbox">
                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                            <p> {{ingredient.title}} {{ingredient.weight}} г</p>
                        </label>
                        <!--                        <button  :class="['icon-button buy__item-action',{'show':ingredient.show}]" type="button" title="Действия">-->
                        <!--                            <ActionsIcon/>-->
                        <!--                        </button>-->
                        <section :class="['paper actions anim-show-action',{'show':ingredient.show}]">
                            <div class="actions__item">
                                <div class="actions__img">
                                    <ClockIcon />
                                </div>
                                <label class="input-checkbox">
                                    <input class="visually-hidden" type="checkbox"><span
                                        class="input-checkbox__custom"></span>
                                    <p>Отложить на 24 часа</p>
                                </label>
                            </div>
                            <div class="actions__item">
                                <div class="actions__img" style="width: 20px; margin-left: 18px;">
                                    <CloseIcon />
                                </div>
                                <label class="input-checkbox">
                                    <input class="visually-hidden" type="checkbox"><span
                                        class="input-checkbox__custom"></span>
                                    <p>Скрыть</p>
                                </label>
                            </div>
                        </section>
                    </div>
                </li>
            </ul>
        </div>

    </li>
</template>

<script>
  import DownIcon from "./icons/DownIcon";
  import ProfileAddIcon from "./icons/ProfileAddIcon";
  import ClockIcon from "./icons/ClockIcon";
  import CloseIcon from "./icons/CloseIcon";

  export default {
    name: "RecipeItem",
    props: ['recipeItem', 'open', 'meal', 'show', 'date'],
    data() {
      return {
        recipe: {}
      }
    },
    components: {CloseIcon, ClockIcon, ProfileAddIcon, DownIcon},
    methods: {

      getTranslatedMealType(type) {
        let rusMealType;
        switch (type) {
          case 'breakfast':
            rusMealType = "Завтрак";
            break;
          case 'supper':
            rusMealType = "Ужин";
            break;
          case 'dinner':
            rusMealType = "Перекус";
            break;
          case 'lunch':
            rusMealType = "Обед";
            break;
          case 'brunch':
            rusMealType = "Перекус";
            break;
          default:
            rusMealType = "Нужно перевести";
            break;
        }
        return rusMealType
      },
      showItem(id) {
        this.recipes = this.recipes.map(function (value) {
          if (value.id === id) {
            value.show = !value.show
          }
          return value;
        })
      },
      showDateFormat(str) {
        let date = new Date(str);
        let data = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return data + "." + month + "." + year
      },
    },
    beforeMount() {
      this.recipe = this.$props.recipeItem
      this.recipe.date = this.$props.date
      this.recipe.mealType = this.$props.meal
      this.recipe.weight = this.$store.getters['subscription/getRecipeWeightByDateAndMeal'](this.recipe)
      this.recipe.ingredients = this.recipe.ingredients.map((ingredient) => {
        ingredient.weight = this.$store.getters['subscription/getIngredientWeightByDateAndMeal'](ingredient, this.recipe)
        return ingredient
      })
    }
  }
</script>

<style scoped>

</style>
