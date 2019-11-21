import {
  ListMenus,
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
export default {
  getListMenus
}
