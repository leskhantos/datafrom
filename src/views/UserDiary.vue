<template>
    <main class="page">
        <BreadCrumbs/>
        <section class="grid">
            <AppProfile/>
            <div class="grid__column">
                <DiaryHeader v-on:set-date="setDate"/>
                <div v-show="!Object.is(this.normalizedMeals.entities.recipes, undefined)">
                    <DiaryFoodList v-on:set-meal-for-modal="setMealForModal"/>
                    <DiaryList/>
                </div>
                <DiaryContainer/>
                <DiaryActivity/>
                <DiaryRecipesModal v-bind:modal-meal-id="modalMealId"/>
            </div>
        </section>
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
    import DiaryRecipesModal from "../components/diary/DiaryRecipesModal";

    export default {
        name: "UserDiary",
        components: {
            DiaryRecipesModal,
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
            setDate(date) {
                this.dateInput = date
            },
            setMealForModal(mId) {
                this.modalMealId = mId
            },
            getSumRecipeWeights(rId) {
                if (Object.is(this.sumRecipeWeights[rId], undefined)) {
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

                return this.sumRecipeWeights[rId]
            },
            getMealWeights(mId) {
                if (Object.is(this.mealWeights[mId], undefined)) {
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

                return this.mealWeights[mId]
            },
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
            },
            loadWater() {
                return this.$store.dispatch('diary/listWaterForOneDay', {
                    profile : this.profile.id,
                    date : this.dateInput
                })
            },
            loadState() {
                this.$store.dispatch('user/getListProfiles').then(() => {
                    let testId = '3aa5e0ab-00d6-4d88-99fd-ae58e152cc3c'
                    this.$store.dispatch('nutrients/getProfileNutrients', { 'profile': testId })

                    this.loadWater().then(() => {
                        this.calculateSumWater(this.listWater)
                    })
                    this.$store.dispatch('diary/listSportForOneDay', {
                        profile : this.profile.id,
                        date : this.dateInput
                    }).then(() => {
                        this.calculateSumSport(this.listSport)
                    })

                    this.$store.dispatch('subscription/getSubsForOneDay', {
                        profile: testId,
                        date: this.dateInput
                    }).then(() => {
                        this.normalizedMeals = this.normalizeMeals()

                        let calculateWeight = {}
                        Object.keys(this.normalizedMeals.entities.recipes).map((id) => {
                            calculateWeight = this.$store.dispatch('recipe/calculateWeight', {
                                recipe: id,
                                weight: this.roundUp(this.normalizedMeals.entities.recipes[id].weight)
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
                return this.$store.getters['diary/listWaterForOneDay']
            },
            listWeight() {
                return this.$store.getters['diary/getListWeight']
            },
            listSleep() {
                return this.$store.getters['diary/getListSleep']
            },
            listSport() {
                return this.$store.getters['diary/listSportForOneDay']
            },
            listAllSportActivities() {
                return this.$store.getters['diary/listAllSportActivities']
            },
            listEatenIngredient() {
                return this.$store.getters['diary/listEatenIngredient']
            },
            subscriptionMeals() {
                return this.$store.getters['subscription/getSubsForOneDay']
            },
        },
        watch: {
            dateInput() {
                this.loadState()
            }
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
                modalMealId: '',
                dateInput: '',
            }
        },
        created() {
           this.loadState()
        },
    }
</script>

<style scoped>

</style>
