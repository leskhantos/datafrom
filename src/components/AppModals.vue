<template>
    <div>
        <div class="modal modal--buy">
            <button class="icon-button modal__btn-close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
            </svg>

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
            <button class="icon-button modal__btn-close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
            </svg>

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
    export default {
        name: "AppModals"
    }
</script>

<style scoped>

</style>