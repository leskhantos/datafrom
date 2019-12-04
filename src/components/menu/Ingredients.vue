<template>
    <div :class="active ? 'modal__tab-content active' : 'modal__tab-content'">
        <div class="modal__tab-content-col">
            <p class="modal-dish__caption"><b>Для кого готовим?</b></p>
            <ul class="user__profile-list modal-dish__user-list">
                <li v-for="(item,key) in recipeForModal.profiles" :key="key">
                    <label :class="['user__profile', { 'user__profile--main':item.isMain }]">
                        <input class="visually-hidden" type="checkbox" name="profile-1" :checked="item.isMain">
                        <div :class="['user__avatar', { 'user__avatar--big':item.isMain }]"><img :src="item.avatar.path"
                                                                                                 alt="avatar"></div>
                        <p class="user__name">{{item.title}}</p>
                    </label>
                </li>
            </ul>
            <p class="modal-dish__caption"><b>Хотите добавить гостя?</b></p>
            <div class="counter modal-dish__counter">
                <button class="counter__btn counter__btn--min" @click="delGuest()" type="button"></button>
                <input type="text" v-model="guests">
                <button class="counter__btn counter__btn--plus" @click="addGuest()" type="button"></button>
            </div>
        </div>
        <div class="modal__tab-content-col">
            <div class="modal-dish__wrap-caption">
                <p class="modal-dish__caption"><b>Ингредиенты:</b></p>
                <p class="modal-dish__input">на
                    <input type="number" value="2">порции
                </p>
            </div>
            <ul class="modal-dish__food-list">
                <li v-for="ingredient in recipeForModal.ingredients" :key="ingredient.id"><img v-if="ingredient.cover" :src="ingredient.cover.path">
                    <p>{{ingredient.title}}</p><span>{{ingredient.items ? ingredient.items + ' шт' : ingredient.weight + ' гр'}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Ingredients",
    props: ['recipeForModal', 'active', 'subId'],
    data() {
      return {
        guests: 0
      }
    },
    methods: {
      addGuest() {
        this.guests ++

        this.$store.dispatch('menu/editPortions', {
          id: this.$props.subId,
          portions: this.guests
        }).then(() => {
          this.$store.commit('error/SET_OK', "Кол-во порций успешно изменено")
        })
      },
      delGuest() {

      }
    }
  }
</script>

<style scoped>

</style>
