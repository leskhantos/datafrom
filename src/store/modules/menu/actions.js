import {
  ListMenus,
  GetMenu,
  GetMeals,
  GetIngredients,
  GetIngredient,
  ListSubscriptions,
  CreateSubscription,
  AddMealsToSub,
  EditSubscription,
  GetMealsByProfile,
  EditPortions,
  SubscriptionsByMenu
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

const createSubscription = (non, payload) => {
  return CreateSubscription(payload)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error.response.data);
      let err = 'Ошибка при оформлении подписки'
      if (error.response.data === 'You already have subscription on this menu') {
        err = 'Вы уже подписаны на это меню'
      }
      throw err;
    })
}

const updateSubscription = (non, payload) => {
  return AddMealsToSub(payload)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
      throw "Подписка не прошла";
    })
}

const editSubscription = (non, payload) => {
  return EditSubscription(payload)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
      throw "Ошибка при редактировании подписки";
    })
}

const editPortions = (non, payload) => {
  return EditPortions(payload.id, payload.portions)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response.data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
      throw "Ошибка при редактировании подписки";
    })
}

const getIngredient = async ({commit}, id) => {
  await GetIngredient(id)
    .then((response) => {
      const data = response.data
      commit('INGREDIENT', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    })
}

const getSubByMenu = async ({commit}, id) => {
  await SubscriptionsByMenu(id)
    .then((response) => {
      const data = response.data
      commit('SUBSCRIPTION', data)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    })
}

const getProfileMeals = async ({commit}, id) => {
  await GetMealsByProfile(id)
    .then((response) => {
      const data = response.data
      let meals = {
        id,
        data
      }
      commit('PROFILE_MEALS', meals)
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.log(error);
    })
}

export default {
  getListMenus,
  getMenu,
  getMeals,
  getIngredients,
  getListSubscriptions,
  createSubscription,
  getIngredient,
  updateSubscription,
  editSubscription,
  getProfileMeals,
  editPortions,
  getSubByMenu
}
