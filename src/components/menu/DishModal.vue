<template>
    <div>
        <div :class="show ? 'modal modal--dish show': 'modal modal--dish'">
            <button class="icon-button modal__btn-close" type="button"
                    @click="$emit('modalClose')">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" width="25" height="25">
                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z" />
                </svg>

            </button>
            <div class="modal__container">
                <div class="modal__grid">
                    <div class="modal__col">
                        <div class="modal__slider">
                            <div class="modal__track" data-glide-el="track">
                                <ul class="modal__slides">
                                    <li>
                                        <div class="modal__slide-image"><img src="/static/images/jpg/dish-6.jpg"
                                                                             alt="dish">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="modal__slide-image"><img src="/static/images/jpg/dish-6.jpg"
                                                                             alt="dish">
                                        </div>
                                    </li>
                                    <li>
                                        <div class="modal__slide-image"><img src="/static/images/jpg/dish-6.jpg"
                                                                             alt="dish">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="modal__bullets" data-glide-el="controls[nav]">
                                <button class="modal__bullet" type="button" data-glide-dir="=0">1</button>
                                <button class="modal__bullet" type="button" data-glide-dir="=1">2</button>
                                <button class="modal__bullet" type="button" data-glide-dir="=2">3</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal__col">
                        <h2 class="modal__title">{{recipeForModal.recipe.title}}</h2>
                        <div class="modal-dish__desc">
                            <div class="modal-dish__col">
                                <p>1 порция <span>200 гр.</span></p>
                                <p><span class="color-orange">289 Ккал</span><span>1200/1500</span> 3% нормы</p>
                            </div>
                            <div class="modal-dish__col">
                                <button class="button modal-dish__btn" type="button">Съел(а)</button>
                            </div>
                            <div class="modal-dish__col">
                                <div class="diary__chart modal-dish__chart">
                                    <div class="diary__chart-col green">
                                        <div class="diary__chart-range">
                                            <div style="height: 60%"></div>
                                        </div>
                                        <span>Б</span><span>23</span>
                                    </div>
                                    <div class="diary__chart-col red">
                                        <div class="diary__chart-range">
                                            <div style="height: 70%"></div>
                                        </div>
                                        <span>Ж</span><span>23</span>
                                    </div>
                                    <div class="diary__chart-col yellow">
                                        <div class="diary__chart-range">
                                            <div style="height: 60%"></div>
                                        </div>
                                        <span>У</span><span>23</span>
                                    </div>
                                </div>
                                <p class="modal-dish__text">3%&nbsp;&nbsp;2%&nbsp;&nbsp;5%<br> от нормы</p>
                            </div>
                        </div>
                    </div>
                    <div class="modal__col">
                        <div class="modal__tab-buttons">
                            <button class="modal__tab-btn active" type="button">Описание блюда</button>
                            <button class="modal__tab-btn" type="button">Ингредиенты</button>
                            <button class="modal__tab-btn" type="button">Готовим</button>
                        </div>
                        <div class="modal__tab-content-wrapper">
                            <div class="modal__tab-content active">
                                <div class="modal__tab-content-col flex">
                                    <div class="modal__level">
                                        <p>Уровень сложности: <span>7</span></p>
                                        <div class="modal__level-range">
                                            <div style="width: 70%">
                                                <div class="modal__level-line"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="modal-dish__text"><span
                                            class="color-orange">289 Ккал</span><span>1200/1500</span> 3% нормы</p>
                                    <div class="diary__chart modal-dish__chart modal-dish__chart--horizontal">
                                        <div class="diary__chart-col green">
                                            <div class="diary__chart-range">
                                                <div style="width: 60%"></div>
                                            </div>
                                            <span>Б</span><span>23</span>
                                        </div>
                                        <div class="diary__chart-col red">
                                            <div class="diary__chart-range">
                                                <div style="width: 70%"></div>
                                            </div>
                                            <span>Ж</span><span>23</span>
                                        </div>
                                        <div class="diary__chart-col yellow">
                                            <div class="diary__chart-range">
                                                <div style="width: 60%"></div>
                                            </div>
                                            <span>У</span><span>23</span>
                                        </div>
                                    </div>
                                    <div class="modal__attention">
                                        <p class="modal__attention-title">Требуется подготовка:</p>
                                        <p class="modal__attention-text">Замаринуйте мясо на 8 часов.</p>
                                    </div>
                                </div>
                                <div class="modal__tab-content-col two-column">
                                    <div>
                                        <p class="modal-dish__caption">Инвентарь:</p>
                                        <div class="slider__cutlery">
                                            <div class="slider__cutlery-track" data-glide-el="track">
                                                <ul class="slider__cutlery-list">
                                                    <li><img src="/static/images/png/cooking.png" alt="cutlery"></li>
                                                    <li><img src="/static/images/png/dinner.png" alt="cutlery"></li>
                                                    <li><img src="/static/images/png/oven.png" alt="cutlery"></li>
                                                    <li><img src="/static/images/png/cooking.png" alt="cutlery"></li>
                                                    <li><img src="/static/images/png/dinner.png" alt="cutlery"></li>
                                                    <li><img src="/static/images/png/oven.png" alt="cutlery"></li>
                                                </ul>
                                            </div>
                                            <div class="slider__cutlery-arrows" data-glide-el="controls">
                                                <button class="icon-button slider__cutlery-arrow slider__cutlery-arrow--prev"
                                                        type="button" data-glide-dir="&lt;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6"
                                                         width="25" height="25">
                                                        <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z" />
                                                    </svg>

                                                </button>
                                                <button class="icon-button slider__cutlery-arrow slider__cutlery-arrow--next"
                                                        type="button" data-glide-dir="&gt;">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6"
                                                         width="25" height="25">
                                                        <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z" />
                                                    </svg>

                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="modal-dish__caption">Время готовки:</p>
                                        <p class="modal-dish__time">20 мин</p>
                                    </div>
                                </div>
                                <div class="modal__tab-content-col">
                                    <p class="modal-dish__heading">Описание блюда</p>
                                    <p class="modal-dish__description">Я предлагаю вам приготовить рататуй по
                                        классическому
                                        рецепту французского блюда - из помидоров, кабачков, болгарского перца, лука и
                                        чеснока. Я предлагаю вам приготовить рататуй по классическому рецепту
                                        французского
                                        блюда - из помидоров, кабачков, болгарского перца, лука и чеснока.</p>
                                </div>
                            </div>
                            <div class="modal__tab-content">
                                <div class="modal__tab-content-col">
                                    <p class="modal-dish__caption"><b>Для кого готовим?</b></p>
                                    <ul class="user__profile-list modal-dish__user-list">
                                        <li>
                                            <label class="user__profile">
                                                <input class="visually-hidden" type="checkbox" name="profile-1">
                                                <div class="user__avatar">
                                                    <!--img(src="/static/images/jpg/avatar-1.jpg", alt="avatar")-->
                                                </div>
                                                <p class="user__name">Александр</p>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="user__profile">
                                                <input class="visually-hidden" type="checkbox" name="profile-1">
                                                <div class="user__avatar"><img src="/static/images/jpg/avatar-1.jpg"
                                                                               alt="avatar"></div>
                                                <p class="user__name">Иван</p>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="user__profile user__profile--main">
                                                <input class="visually-hidden" type="checkbox" name="profile-1" checked>
                                                <div class="user__avatar user__avatar--big"><img
                                                        src="/static/images/jpg/avatar.jpg" alt="avatar"></div>
                                                <p class="user__name">Ольга</p>
                                            </label>
                                        </li>
                                        <li>
                                            <label class="user__profile">
                                                <input class="visually-hidden" type="checkbox" name="profile-1">
                                                <div class="user__avatar"><img src="/static/images/jpg/avatar-2.jpg"
                                                                               alt="avatar"></div>
                                                <p class="user__name">Степан</p>
                                            </label>
                                        </li>
                                        <li class="user__btn-add">
                                            <button class="button-add button-add--green button-add--big" type="button">
                                                Добавить профиль
                                            </button>
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
                            <div class="modal__tab-content">
                                <div class="modal-dish__wrap-caption">
                                    <p class="modal-dish__caption"><b>Готовим</b></p>
                                    <div class="rating modal-dish__rating">
                                        <p>Оцените рецепт?</p>
                                        <button class="icon-button rating__like">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.2 478.2" width="25"
                                                 height="25">
                                                <g>
                                                    <path d="M457.6,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
		c14-42.6,13.2-75.2-2.6-97C293.8,1.8,267.3,0,259.5,0c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
		c19.9-18,23.4-37.9,22.7-51.9C461.3,337.1,459.5,330.2,457.6,325.1z M48.3,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6L48.3,447.3L48.3,447.3z M432,313.4
		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
		C444.9,295.3,440.7,304.4,432,313.4z" />
                                                </g>
                                            </svg>

                                        </button>
                                        <button class="icon-button rating__dislike">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.2 478.2" width="25"
                                                 height="25">
                                                <g>
                                                    <path d="M457.6,325.1c9.8-12.5,14.5-25.9,13.9-39.7c-0.6-15.2-7.4-27.1-13-34.4c6.5-16.2,9-41.7-12.7-61.5
		c-15.9-14.5-42.9-21-80.3-19.2c-26.3,1.2-48.3,6.1-49.2,6.3h-0.1c-5,0.9-10.3,2-15.7,3.2c-0.4-6.4,0.7-22.3,12.5-58.1
		c14-42.6,13.2-75.2-2.6-97C293.8,1.8,267.3,0,259.5,0c-7.5,0-14.4,3.1-19.3,8.8c-11.1,12.9-9.8,36.7-8.4,47.7
		c-13.2,35.4-50.2,122.2-81.5,146.3c-0.6,0.4-1.1,0.9-1.6,1.4c-9.2,9.7-15.4,20.2-19.6,29.4c-5.9-3.2-12.6-5-19.8-5h-61
		c-23,0-41.6,18.7-41.6,41.6v162.5c0,23,18.7,41.6,41.6,41.6h61c8.9,0,17.2-2.8,24-7.6l23.5,2.8c3.6,0.5,67.6,8.6,133.3,7.3
		c11.9,0.9,23.1,1.4,33.5,1.4c17.9,0,33.5-1.4,46.5-4.2c30.6-6.5,51.5-19.5,62.1-38.6c8.1-14.6,8.1-29.1,6.8-38.3
		c19.9-18,23.4-37.9,22.7-51.9C461.3,337.1,459.5,330.2,457.6,325.1z M48.3,447.3c-8.1,0-14.6-6.6-14.6-14.6V270.1
		c0-8.1,6.6-14.6,14.6-14.6h61c8.1,0,14.6,6.6,14.6,14.6v162.5c0,8.1-6.6,14.6-14.6,14.6L48.3,447.3L48.3,447.3z M432,313.4
		c-4.2,4.4-5,11.1-1.8,16.3c0,0.1,4.1,7.1,4.6,16.7c0.7,13.1-5.6,24.7-18.8,34.6c-4.7,3.6-6.6,9.8-4.6,15.4c0,0.1,4.3,13.3-2.7,25.8
		c-6.7,12-21.6,20.6-44.2,25.4c-18.1,3.9-42.7,4.6-72.9,2.2c-0.4,0-0.9,0-1.4,0c-64.3,1.4-129.3-7-130-7.1h-0.1l-10.1-1.2
		c0.6-2.8,0.9-5.8,0.9-8.8V270.1c0-4.3-0.7-8.5-1.9-12.4c1.8-6.7,6.8-21.6,18.6-34.3c44.9-35.6,88.8-155.7,90.7-160.9
		c0.8-2.1,1-4.4,0.6-6.7c-1.7-11.2-1.1-24.9,1.3-29c5.3,0.1,19.6,1.6,28.2,13.5c10.2,14.1,9.8,39.3-1.2,72.7
		c-16.8,50.9-18.2,77.7-4.9,89.5c6.6,5.9,15.4,6.2,21.8,3.9c6.1-1.4,11.9-2.6,17.4-3.5c0.4-0.1,0.9-0.2,1.3-0.3
		c30.7-6.7,85.7-10.8,104.8,6.6c16.2,14.8,4.7,34.4,3.4,36.5c-3.7,5.6-2.6,12.9,2.4,17.4c0.1,0.1,10.6,10,11.1,23.3
		C444.9,295.3,440.7,304.4,432,313.4z" />
                                                </g>
                                            </svg>

                                        </button>
                                    </div>
                                </div>
                                <ul class="modal-dish__cook-steps">
                                    <li><img src="/static/images/jpg/cook-step-1.jpg" alt="dish">
                                        <div>
                                            <p class="modal-dish__cook-step">Шаг 1</p>
                                            <p class="modal-dish__cook-desc">Разделываем индейку, отбираем мякоть
                                                индейки и
                                                жир, которые нам пригодятся для жарки и тушения.</p>
                                            <p class="modal-dish__cook-help">Как порезать морковь?</p>
                                        </div>
                                    </li>
                                    <li><img src="/static/images/jpg/cook-step-2.jpg" alt="dish">
                                        <div>
                                            <p class="modal-dish__cook-step">Шаг 2</p>
                                            <p class="modal-dish__cook-desc">Разделываем индейку, отбираем мякоть
                                                индейки и
                                                жир, которые нам пригодятся для жарки и тушения.</p>
                                            <p class="modal-dish__cook-help">Как порезать морковь?</p>
                                        </div>
                                    </li>
                                    <li><img src="/static/images/jpg/cook-step-3.jpg" alt="dish">
                                        <div>
                                            <p class="modal-dish__cook-step">Шаг 3</p>
                                            <p class="modal-dish__cook-desc">Разделываем индейку, отбираем мякоть
                                                индейки и
                                                жир, которые нам пригодятся для жарки и тушения.</p>
                                            <p class="modal-dish__cook-help">Как порезать морковь?</p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="modal-dish__caption"><b>Сервировка</b></p>
                                <div class="modal-dish__cook-wrap"><img src="/static/images/jpg/cook-step-4.jpg"
                                                                        alt="dish">
                                    <p class="modal-dish__cook-desc">Запеченная птица – главное блюдо рождественского
                                        стола.
                                        Поэтому ее подают торжественно, выносят в последнюю очередь на большом красивом
                                        блюде, когда все остальные блюда уже поданы и гости, освежившись бокалом
                                        шампанского
                                        или согревшись глинтвейном, с обрались за столом.</p>
                                </div>
                                <div class="modal-dish__cook-wrap">
                                    <div>
                                        <p class="modal-dish__caption small">Сервировка 1 порции:</p>
                                        <ul class="list-dots">
                                            <li><span>Меню</span><span>1500 кКал</span></li>
                                            <li><span>Соус</span><span>50 г</span></li>
                                            <li><span>Гарнир</span><span>200г</span></li>
                                            <li><span>Мясо</span><span>150г</span></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p class="modal-dish__caption small">Ваш комментарий</p>
                                        <form class="modal-dish__form">
                                            <textarea placeholder="Ваш комментарий"></textarea>
                                            <button class="button button--no-fill modal-dish__form-btn" type="button">
                                                Отправить
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="show ? 'overlay show show-modal': 'overlay'" @click="$emit('modalClose')"></div>
    </div>
</template>

<script>
  export default {
    name: "DishModal",
    props: ['show', 'recipeForModal'],
  }
</script>

<style scoped>
</style>