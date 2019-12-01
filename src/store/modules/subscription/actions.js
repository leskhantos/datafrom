import {
    GetShopList,
    GetGeneratedSubscriptionMeals,
    GetShopList,
    AddCustomShopItem,
    GetIngredientsList,
    SetBoughtIngredient
} from '@/api'
import {normalize,schema} from "normalizr";

const getShopListAction = async ({commit}, dates) => {
  commit('RECIPES',[])
  commit('INGREDIENTS',[])
  commit('PURCHASES',[])
    await GetShopList(dates)
        .then((response) => {

            const recipe = new schema.Entity('recipe');

            const ingredient = new schema.Entity('ingredient',{
                recipe: recipe
            });

            const purchase = new schema.Array( new schema.Entity('purchase', {
                ingredient: ingredient,
                recipe: recipe,
            }));

            const normalizedData = normalize(response.data, purchase);

            let recipesData = normalizedData.entities.recipe
            let ingredientData = normalizedData.entities.ingredient
            let purchaseData = normalizedData.entities.purchase
            commit('RECIPES',recipesData)
            commit('INGREDIENTS',ingredientData)
            commit('PURCHASES',purchaseData)
        })
        .catch(() => {
            commit('SET_ERROR','Ошибка при получении данных')
        })
}
const addCustomShopItem = ({commit}, payload) => {
     AddCustomShopItem(payload)
        .then((response) => {
            // eslint-disable-next-line no-console
            console.log(response)
        })
        .catch(() => {
            commit('SET_ERROR','Ошибка при отправке данных')
        })
}
const getIngredientsList = ({commit},search) => {
    GetIngredientsList(search)
        .then((response) => {
            commit('ALL_INGREDIENTS',response.data._embedded.items)
        })
        .catch(() => {
            commit('SET_ERROR','Ошибка при отправке данных')
        })
}
const setBoughtIngredient = ({commit},shopItem) => {
    SetBoughtIngredient(shopItem)
        .then((response) => {
            // eslint-disable-next-line no-console
            console.log(response)
        })
        .catch(() => {
            commit('SET_ERROR','Ошибка при отправке данных')
        })
}

const getGeneratedSubscriptionMeals = async ({commit}, profile) => {
  await GetGeneratedSubscriptionMeals(profile)
    .then((response) => {
      const data = response.data
      commit('GET_GENERATED_SUBSCRIPTION_MEALS', data._embedded.items)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}

export default {
    getShopListAction,
    addCustomShopItem,
    getIngredientsList,
    setBoughtIngredient
    getShopListAction,
    getGeneratedSubscriptionMeals,
}