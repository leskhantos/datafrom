<template>
    <ul class="paper buy__list">
        <li :class="['buy__item',{'open':ingredient.open, 'disabled':ingredient.isBought}]"
            v-for="ingredient in ingredients" :key="ingredient.id">
            <div class="buy__item-wrap">
                <label class="input-checkbox" @click="setBought(ingredient.isBought,ingredient.ingredientsPurchases)">
                    <input class="visually-hidden" type="checkbox" :checked="ingredient.isBought"
                           :disabled="ingredient.isBought"><span class="input-checkbox__custom"></span>
                    <p>{{ ingredient.title }} {{ingredient.weight}}г</p>
                </label>
<!--                <button class="button-add buy__item-add" type="button" title="Купить ещё"-->
<!--                        @click="showBuyMoreModal=true" disabled></button>-->
                <button :class="['icon-button buy__item-arrow',{'open':ingredient.open}]" type="button" title="Открыть"
                        @click="openItem(ingredient.id)">
                    <DownIcon />
                </button>
                <!--                <button :class="['icon-button buy__item-action',{'show':ingredient.show}]" type="button" title="Действия" @click="showItem(ingredient.id)">-->
                <!--                    <ActionsIcon/>-->
                <!--                </button>-->
                <section :class="['paper actions anim-show-action',{'show':ingredient.show}]">
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
            </div>
            <div v-if="ingredient.open" :class="['buy__item-dropdown',{'open':ingredient.open}]">
                <ul class="buy__sublist">
                    <li class="buy__item" v-for="(recipe,keyItem) in ingredient.recipes" :key="recipe.id + '_' + keyItem">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox" :checked="recipe.isBought"
                                       :disabled="recipe.isBought"><span
                                    class="input-checkbox__custom"></span>
                                <p @click="showRecipeAddModal=true"> {{recipe.title}} {{recipe.weight}} г</p>
                            </label>
                            <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button"
                                    title="Добавить профиль">
                                <ProfileAddIcon />
                            </button>
                            <!--                            <button :class="['icon-button buy__item-action',{'show':recipe.show}]" type="button" title="Действия" @click="showChildItem(ingredient.id,recipe.id)" >-->
                            <!--                                <ActionsIcon/>-->
                            <!--                            </button>-->
                            <section :class="['paper actions anim-show-action',{'show':recipe.show}]">
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

                            <p class="buy__item-meta">{{getTranslatedMealType(recipe.mealType)}}: {{
                                showDateFormat(recipe.date)}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
        <li class="buy__add">
            <div>
                <v-select v-model="selected" label="title" @search="getOptions" :options="options">
                    <div slot="no-options">Нет подходящего ингредиента</div>
                    <i slot="spinner" class="icon icon-spinner"></i>
                </v-select>
                <button class="button-add button-add--green buy__btn-add" type="button" @click="showBuyMoreModal=true">
                    Добавить
                </button>
            </div>
        </li>
        <div :class="['modal modal--buy',{'show':showBuyMoreModal}]">
            <button class="icon-button modal__btn-close" type="button" @click="showBuyMoreModal=false">
                <CloseIcon />
            </button>
            <div class="modal__container">
                <h2 class="modal__title">Купить ещё</h2>
                <div class="counter">
                    <button class="counter__btn counter__btn--min" type="button" @click="minusWeight"></button>
                    <input type="number" v-model="weightForCustom" placeholder="300 г" min="0">
                    <button class="counter__btn counter__btn--plus" type="button" @click="plusWeight"></button>
                </div>
                <button class="button modal__btn" type="button" @click="sendData">Купить ещё</button>
            </div>
        </div>
        <div :class="['overlay',{'show show-modal':showBuyMoreModal}]"></div>
    </ul>
</template>

<script>
  import DownIcon from "./icons/DownIcon";
  import ClockIcon from "./icons/ClockIcon";
  import CloseIcon from "./icons/CloseIcon";
  import ProfileAddIcon from "./icons/ProfileAddIcon";
  import 'vue-select/dist/vue-select.css';

  export default {
    name: "PurchaseIngredient",
    props: ['sortType', 'fromDate', 'toDate'],
    components: {ProfileAddIcon, CloseIcon, ClockIcon, DownIcon},
    data() {
      return {
        ingredients: [],
        selected: {},
        selectedId: '',
        showBuyMoreModal: false,
        weightForCustom: 0,
        options: []
      }
    },
    computed: {
      storeIngredients() {
        return this.$store.getters['subscription/getIngredients']
      }
    },
    methods: {
      setBought(isBought, purchases) {
        if (!isBought) {
          purchases.forEach((purchase) => {
            this.$store.dispatch('subscription/setBoughtIngredient', purchase)
          })
        }

      },
      getOptions(search) {
        this.$store.dispatch('subscription/getIngredientsList', search).then(() => {
          this.options = this.$store.getters['subscription/getAllIngredients']
        })
      },
      sendData() {
        let payload = {
          ingredient: this.setSelectedId(),
          weight: this.weightForCustom,
          date: this.getCurrentDate()
        }

        this.$store.dispatch('subscription/addCustomShopItem', payload).then(() => {
          this.showBuyMoreModal = false
          this.weightForCustom = 0
          this.$store.commit('error/SET_OK', 'Отправлено');
        }).catch(() => {
          this.$store.commit('error/SET_ERROR', 'Ошибка при отправке');
        });

      },
      minusWeight() {
        if (this.weightForCustom <= 0) {
          this.weightForCustom = 0
        } else {
          this.weightForCustom = this.weightForCustom - 1
        }
      },
      plusWeight() {
        this.weightForCustom = this.weightForCustom + 1
      },
      getTranslatedMealType(type) {
        let rusMealType
        if (type === "breakfast") {
          rusMealType = "Завтрак"
        } else if (type === "supper") {
          rusMealType = "Ужин"
        } else if (type === "dinner") {
          rusMealType = "Перекус"
        } else if (type === "lunch") {
          rusMealType = "Обед"
        } else if (type === "brunch") {
          rusMealType = "Перекус"
        }
        return rusMealType
      },
      showChildItem(id, rec_id) {
        this.ingredients = this.ingredients.map(function (value) {
          if (value.id === id) {
            value.recipes.map(function (val) {
              if (val.id === rec_id) {
                val.show = !val.show
              }
            })
          }
          return value;
        })
      },
      showItem(id) {
        this.ingredients = this.ingredients.map(function (value) {
          if (value.id === id) {
            value.show = !value.show
          }
          return value;
        })
      },
      openItem(id) {
        this.ingredients = this.ingredients.map(function (value) {
          if (value.id === id) {
            value.open = !value.open
          }
          return value;
        })
      },
      showDateFormat(str) {
        let date = new Date(str)
        let data = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return data + "." + month + "." + year
      },
      getCurrentDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        return today
      },
      setSelectedId() {
        this.selectedId = this.selected.id
        return this.selectedId
      },
      computeIngredient() {
        let arr = Object.values(this.$store.getters['subscription/getIngredients'])
        arr = arr.map((value) => {
          value.isBought = this.$store.getters['subscription/getIsBought'](value)
          value.ingredientsPurchases = this.$store.getters['subscription/getIngredientsPurchases'](value)
          value.weight = this.$store.getters['subscription/getWeight'](value)
          value.recipes = this.$store.getters['subscription/getRecipesByIngredient'](value)
          return value
        })
        this.ingredients = arr
      }
    },
    mounted() {
      if(this.$store.getters['subscription/getIngredients']) {
        this.computeIngredient()
      }
    },
    watch: {
      'sortType': function () {
        this.ingredients = this.$store.getters['subscription/getSortedIngredients'](this.sortType)
      },
      storeIngredients: {
        immediate: true,
        handler() {
          this.computeIngredient()
        }
      }
    }
  }
</script>

<style scoped>
    .buy__item-arrow {
        margin-left: auto;
    }

</style>
