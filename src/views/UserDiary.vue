<template>
    <main class="page">
        <BreadCrumbs/>
        <section class="grid">
            <AppProfile/>
            <div class="grid__column">
                <DiaryHeader/>
                <DiaryFoodList/>
                <DiaryList/>
                <DiaryContainer/>
                <DiaryActivity/>
            </div>
        </section>
        <div class="modal modal--food">
            <button class="icon-button modal__btn-close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="25" height="25">
                <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
            </svg>

            </button>
            <div class="modal__container">
                <ul class="menu__scheduler-dish-list">
                    <li class="menu__scheduler-dish-item">
                        <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-1.jpg" alt="dish"></div>
                        <div class="menu__scheduler-content">
                            <p class="menu__scheduler-desc">Индейка с яблочный соусом под маринадом с анчоусами и капперсами</p>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="25" height="25">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                            <p class="composed"><span class="orange">62</span><span class="yellow">70</span><span class="green">30</span></p>
                            <p class="menu__scheduler-calories"><span>200г.</span>89 Кал</p>
                            <button class="button" type="button">Съел(а)</button>
                        </div>
                    </li>
                    <li class="menu__scheduler-dish-item">
                        <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-2.jpg" alt="dish"></div>
                        <div class="menu__scheduler-content">
                            <p class="menu__scheduler-desc">Карбонара с креветками</p>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="25" height="25">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                            <p class="composed"><span class="orange">62</span><span class="yellow">70</span><span class="green">30</span></p>
                            <p class="menu__scheduler-calories"><span>200г.</span>89 Кал</p>
                            <button class="button" type="button">Съел(а)</button>
                        </div>
                    </li>
                    <li class="menu__scheduler-dish-item">
                        <div class="menu__scheduler-image"><img src="/static/images/jpg/dish-3.jpg" alt="dish"></div>
                        <div class="menu__scheduler-content">
                            <p class="menu__scheduler-desc">Индейка с яблочный соусом под маринадом с анчоусами и капперсами</p>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="25" height="25">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                            <p class="composed"><span class="orange">62</span><span class="yellow">70</span><span class="green">30</span></p>
                            <p class="menu__scheduler-calories"><span>200г.</span>89 Кал</p>
                            <button class="button" type="button">Съел(а)</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
    import AppProfile from "../components/AppProfile";
    import BreadCrumbs from "../components/BreadCrumbs";
    import DiaryHeader from "../components/diary/DiaryHeader";
    import DiaryFoodList from "../components/diary/DiaryFoodList";
    import DiaryList from "../components/diary/DiaryList";
    import DiaryContainer from "../components/diary/DiaryContainer";
    import DiaryActivity from "../components/diary/DiaryActivity";
    import mainMixin from "../mixins/mainMixin"
    import { normalize, schema } from "normalizr";

    export default {
        name: "UserDiary",
        components: {
            DiaryActivity,
            DiaryContainer,
            DiaryList,
            DiaryFoodList,
            DiaryHeader,
            AppProfile,
            BreadCrumbs,
        },
        mixins: [mainMixin],
        methods: {
            calculateSumMealWeights(normalizedMeals, sumRecipeWeights) {
                let sumWeight = []

                Object.keys(normalizedMeals.entities.meals).map((mId) => {
                    let mealWeight = {
                        kilocalories: 0,
                        nutrients: {
                            proteins: 0,
                            fats: 0,
                            carbohydrates: 0
                        }
                    }

                    let recipes = normalizedMeals.entities.meals[mId].recipes
                    if (!Object.is(recipes, undefined)) {
                       for (let rId of recipes) {
                           if (!Object.is(sumRecipeWeights[rId], undefined)) {
                               mealWeight.kilocalories += sumRecipeWeights[rId].kilocalories
                               mealWeight.nutrients.fats += sumRecipeWeights[rId].nutrients.fats
                               mealWeight.nutrients.carbohydrates += sumRecipeWeights[rId].nutrients.carbohydrates
                               mealWeight.nutrients.proteins += sumRecipeWeights[rId].nutrients.proteins
                           }
                       }
                    }

                    sumWeight[mId] = mealWeight
                })
                
                this.mealWeights = Object.assign({}, this.mealWeights, sumWeight)
            },
            calculateSumWeight(calculatedWeight, recipeId) {
                let sumWeight = {
                    kilocalories: 0,
                    nutrients: {
                        proteins: 0,
                        fats: 0,
                        carbohydrates: 0
                    },
                }

                for (let weightItem of calculatedWeight) {
                    sumWeight.kilocalories += weightItem.kilocalories
                    for (let nutrients of weightItem.nutrients) {
                        sumWeight.nutrients[nutrients.type] += nutrients.weight
                    }
                }

                this.$set(this.sumRecipeWeights, recipeId, sumWeight)
            },
            calculateSumWater(waterList) {
                let sumWater = {
                    kilocalories: 0,
                    milliliters: 0,
                }

                for (let water of waterList) {
                    sumWater.kilocalories += water.milliliters
                    sumWater.milliliters += water.milliliters
                }

                this.sumWater = Object.assign({}, this.sumWater, sumWater)
            },
            calculateSumSport(sportList) {
                let sumSport = {
                    calories: 0,
                    sportValue: 0
                }

                for (let sport of sportList) {
                    sumSport.calories += sport.calories
                    sumSport.sportValue += sport.sportValue
                }

                this.sumSport = Object.assign({}, this.sumSport, sumSport)
            },
            parseDate() {
                let date = document.querySelector('.datepicker > input')

                return date.value
            },
            normalizeMeals() {
                // subscriptionMeals.meal.recipes.ingredients
                const ingredientSchema = new schema.Entity('ingredients')
                // subscriptionMeals.meal.recipes
                const mealRecipesSchema = new schema.Entity('mealRecipes', {
                    ingredients: [ingredientSchema]
                })
                // subscriptionMeals.meal
                const mealSchema = new schema.Entity('meals', {
                    recipes: [mealRecipesSchema]
                })

                // subscriptionMeals.recipes.recipe
                const recipeSchema = new schema.Entity('recipes')
                // subscriptionMeals.recipes
                const recipeItemSchema = new schema.Entity('recipeItems', {
                    recipe: recipeSchema
                })

                // subscriptionMeals
                const subscriptionMealsSchema = new schema.Array({
                    meal: mealSchema,
                    recipes: [recipeItemSchema],
                })

                let normalized = normalize(this.subscriptionMeals, subscriptionMealsSchema);

                // DELETE THIS !!! DELETE THIS !!! DELETE THIS !!!
                // DELETE THIS !!! DELETE THIS !!! DELETE THIS !!!
                // DELETE THIS !!! DELETE THIS !!! DELETE THIS !!!
                delete normalized.entities.mealRecipes['ecb8c74b-6267-404e-8f7e-d00df8e295a5']
                Object.keys(normalized.entities.meals).map((id) => {
                    for (let r of normalized.entities.meals[id].recipes) {
                        if (r === 'ecb8c74b-6267-404e-8f7e-d00df8e295a5') {
                            delete normalized.entities.meals[id].recipes
                        }
                    }
                })

                Object.keys(normalized.entities.mealRecipes).map((rId) => {
                    let totalWeight = 0
                    for (let iId of normalized.entities.mealRecipes[rId].ingredients) {
                        totalWeight += normalized.entities.ingredients[iId].weight
                    }
                    normalized.entities.mealRecipes[rId].weight = totalWeight
                    normalized.entities.recipes[rId].weight = totalWeight
                })

                return normalized
            }
        },
        computed: {
            profileNutrients() {
                return this.$store.getters['nutrients/getProfileNutrients']
            },
            profile() {
                return this.$store.getters['user/getListProfiles'].items[0]
            },
            listWater() {
                return this.$store.getters['diary/getListWater']
            },
            listWeight() {
                return this.$store.getters['diary/getListWeight']
            },
            listSleep() {
                return this.$store.getters['diary/getListSleep']
            },
            listSport() {
                return this.$store.getters['diary/getListSport']
            },
            listAllSportActivities() {
                return this.$store.getters['diary/listAllSportActivities']
            },
            listEatenIngredient() {
                return this.$store.getters['diary/listEatenIngredient']
            },
            subscriptionMeals() {
                return this.$store.getters['subscription/getGeneratedSubscriptionMeals']
            },
        },
        data() {
            return {
                normalizedMeals: {
                    entities: {},
                    result: {}
                },
                mealWeights: {},
                recipeWeights: {},
                sumRecipeWeights: {},
                sumWater: {},
                sumSport: {},
            }
        },
        created() {
            this.$store.dispatch('user/getListProfiles').then(() => {
                let testId = '3aa5e0ab-00d6-4d88-99fd-ae58e152cc3c'
                this.$store.dispatch('nutrients/getProfileNutrients', { 'profile': testId })
                this.$store.dispatch('diary/getListWater', {
                    'profile' : this.profile.id,
                    'dateTo' : this.getTonight()
                }).then(() => {
                    this.calculateSumWater(this.listWater)
                })
                this.$store.dispatch('diary/getListSport', {
                    'profile' : this.profile.id,
                    'dateTo' : this.getTonight()
                }).then(() => {
                    this.calculateSumSport(this.listSport)
                })

                this.$store.dispatch('subscription/getGeneratedSubscriptionMeals', testId).then(() => {
                    this.normalizedMeals = this.normalizeMeals()

                    let calculateWeight = {}
                    Object.keys(this.normalizedMeals.entities.recipes).map((id) => {
                        calculateWeight = this.$store.dispatch('recipe/calculateWeight', {
                            'recipe': id,
                            'weight': this.roundUp(this.normalizedMeals.entities.recipes[id].weight)
                        }).then(() => {
                            let recipeWeights = this.$store.getters['recipe/calculateWeight']
                            this.$set(this.recipeWeights, id, recipeWeights)
                            this.calculateSumWeight(recipeWeights, id)
                        })
                    })

                    calculateWeight.then(() => {
                        this.calculateSumMealWeights(this.normalizedMeals, this.sumRecipeWeights)
                    })
                })
            })
        },
    }
</script>

<style scoped>

</style>
