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
                        <p class="user__name">{{item.fullName.firstName}}</p>
                    </label>
                </li>
            </ul>
            <p class="modal-dish__caption"><b>Хотите добавить гостя?</b></p>
            <div class="counter modal-dish__counter">
                <button class="counter__btn counter__btn--min" type="button"></button>
                <input type="text" value="300 г">
                <button class="counter__btn counter__btn--plus" type="button"></button>
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
                <li><img src="/static/images/png/tomato.png" alt="tomato">
                    <p>Помидоры</p><span>5 шт</span>
                </li>
                <li><img src="/static/images/png/squash.png" alt="squash">
                    <p>Кабачок</p><span>1 шт</span>
                </li>
                <li><img src="/static/images/png/tomato.png" alt="tomato">
                    <p>Помидоры</p><span>5 шт</span>
                </li>
                <li><img src="/static/images/png/squash.png" alt="squash">
                    <p>Кабачок</p><span>1 шт</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Ingredients",
    props: ['recipeForModal', 'active'],
  }
</script>

<style scoped>

</style>
