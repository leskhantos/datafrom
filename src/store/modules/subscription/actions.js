import {
    GetShopList
} from '@/api'
import {normalize,schema} from "normalizr";

const getShopListAction = async ({commit}, dates) => {
    await GetShopList(dates)
        .then((response) => {

            const recipe = new schema.Entity('recipe');

            const ingredient = new schema.Entity('ingredient',{
                recipe: recipe
            });

            const purchase =new schema.Array( new schema.Entity('purchase', {
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

export default {
    getShopListAction,
}