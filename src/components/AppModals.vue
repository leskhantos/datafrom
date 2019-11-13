<template>
    <div>
        <div class="modal modal--buy">
            <button class="icon-button modal__btn-close" type="button">
               <CloseIcon/>
            </button>
            <div class="modal__container">
                <h2 class="modal__title">Купить ещё</h2>
                <div class="counter">
                    <button class="counter__btn counter__btn--min" type="button"></button>
                    <input type="text" value="300 г">
                    <button class="counter__btn counter__btn--plus" type="button"></button>
                </div>
                <button class="button modal__btn" type="button">Купить ещё</button>
            </div>
        </div>
        <div class="modal modal--add-user">
            <button class="icon-button modal__btn-close" type="button">
                <CloseIcon/>
            </button>
            <div class="modal__container">
                <h2 class="modal__title">Для кого готовим?</h2>
                <ul class="user__list">
                    <li>
                        <label class="user__profile">
                            <input class="visually-hidden" type="checkbox" name="profile" checked>
                            <div class="user__avatar">
                                <!--img(src="./images/jpg/avatar-1.jpg", alt="avatar")-->
                            </div>
                            <p class="user__name">Александр</p>
                        </label>
                    </li>
                    <li>
                        <label class="user__profile">
                            <input class="visually-hidden" type="checkbox" name="profile">
                            <div class="user__avatar"><img src="@/assets/images/jpg/avatar-1.jpg" alt="avatar"></div>
                            <p class="user__name">Иван</p>
                        </label>
                    </li>
                    <li class="user__main">
                        <label class="user__profile">
                            <input class="visually-hidden" type="checkbox" name="profile" checked>
                            <div class="user__avatar"><img src="@/assets/images/jpg/avatar.jpg" alt="avatar"></div>
                            <p class="user__name">Ольга</p>
                        </label>
                    </li>
                    <li>
                        <label class="user__profile">
                            <input class="visually-hidden" type="checkbox" name="profile">
                            <div class="user__avatar"><img src="@/assets/images/jpg/avatar-2.jpg" alt="avatar"></div>
                            <p class="user__name">Степан</p>
                        </label>
                    </li>
                    <li class="user__btn-add">
                        <button class="button-add button-add--green button-add--big" type="button">Добавить профиль</button>
                    </li>
                </ul>
                <h3 class="modal__title">Хотите добавить гостя?</h3>
                <div class="counter">
                    <button class="counter__btn counter__btn--min" type="button"></button>
                    <input type="text" value="1 гость">
                    <button class="counter__btn counter__btn--plus" type="button"></button>
                </div>
                <div class="modal__separator"></div>
                <h3 class="modal__title">Количество порций</h3>
                <div class="counter">
                    <button class="counter__btn counter__btn--min" type="button"></button>
                    <input type="text" value="2 порции">
                    <button class="counter__btn counter__btn--plus" type="button"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CloseIcon from "./CloseIcon";
    export default {
        name: "AppModals",
        components: {CloseIcon}
    }
</script>

<style scoped>

</style>