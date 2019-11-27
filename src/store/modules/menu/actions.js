import {
  ListMenus,
  GetMenu,
  GetMeals,
  GetIngredients,
  ListSubscriptions
} from '@/api'


const getListMenus = async ({commit}) => {
  await ListMenus()
    .then((response) => {
      const data = response.data._embedded.items
      commit('LIST_MENUS', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}

const getMenu = async ({commit}, id) => {
  await GetMenu(id)
    .then((response) => {
      const data = response.data
      commit('MENU', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    })
}

const getMeals = async ({commit}, menu) => {
  await GetMeals(menu.menuId, menu.menuProportionId)
    .then((response) => {
      const data = response.data
      commit('MEALS', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}

const getIngredients = async ({commit}, recipe) => {
  await GetIngredients(recipe.recipe, recipe.weight)
    .then((response) => {
      const data = response.data
      commit('INGREDIENTS', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}

const getListSubscriptions = async ({commit}) => {
  await ListSubscriptions()
    .then((response) => {
      const data = response.data._embedded.items
      commit('LIST_SUBSCRIPTIONS', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    })
}
export default {
  getListMenus,
  getMenu,
  getMeals,
  getIngredients,
  getListSubscriptions
}
