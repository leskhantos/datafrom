<template>
    <body>
    <AppHeader/>
    <main class="page">
        <section class="breadcrumbs">
            <ul class="breadcrumbs__list">
                <li class="breadcrumbs__item"><router-link class="breadcrumbs__link" to="/">Личный кабинет</router-link></li>
                <li class="breadcrumbs__item">Покупки</li>
            </ul>
        </section>
        <section class="grid">
            <AppProfile/>
            <div class="grid__column">
                <div class="title__wrapper">
                    <h1 class="title">Покупки</h1>
                    <button class="button-share" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 454 481.6">
                        <path d="M367.8,309.4c-27.7,0-52.4,13.2-68.2,33.6l-132.3-73.9c3.1-8.9,4.8-18.5,4.8-28.4c0-10-1.7-19.5-4.9-28.5l132.2-73.8
    c15.7,20.5,40.5,33.8,68.3,33.8c47.4,0,86.1-38.6,86.1-86.1S415.2,0,367.7,0s-86.1,38.6-86.1,86.1c0,10,1.7,19.6,4.9,28.5
    l-132.1,73.8c-15.7-20.6-40.5-33.8-68.3-33.8C38.7,154.6,0,193.2,0,240.7s38.7,86.1,86.2,86.1c27.8,0,52.6-13.3,68.4-33.9
    l132.2,73.9c-3.2,9-5,18.7-5,28.7c0,47.4,38.6,86.1,86.1,86.1S454,443,454,395.5S415.3,309.4,367.8,309.4z M367.8,27.1
    c32.6,0,59.1,26.5,59.1,59.1s-26.5,59.1-59.1,59.1s-59.1-26.5-59.1-59.1S335.3,27.1,367.8,27.1z M86.2,299.8
    c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S118.7,299.8,86.2,299.8z M367.8,454.5
    c-32.6,0-59.1-26.5-59.1-59.1s26.5-59.1,59.1-59.1s59.1,26.5,59.1,59.1S400.4,454.5,367.8,454.5z"/>
                    </svg>
                        <span>Поделиться</span>
                    </button>
                </div>
                <div class="paper filter">
                    <div class="filter__col">
                        <p class="filter__name">Сортировать по:</p>
                        <form class="filter__item">
                            <p class="filter__label">По алфавиту:</p>
                            <div class="filter__item-wrap">
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="alphabet"><span class="input-radio__custom"></span>
                                    <p>А - Я</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="alphabet"><span class="input-radio__custom"></span>
                                    <p>Я - А</p>
                                </label>
                            </div>
                            <button class="icon-button filter__reset-item" type="reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                            </svg>

                            </button>
                        </form>
                        <form class="filter__item">
                            <p class="filter__label">По отделам:</p>
                            <div class="select filter__select">
                                <select>
                                    <option value="" selected></option>
                                    <option value="Овощи">Овощи</option>
                                    <option value="Овощи">Овощи</option>
                                    <option value="Овощи">Овощи</option>
                                </select>
                            </div>
                            <button class="icon-button filter__reset-item" type="reset"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                            </svg>

                            </button>
                        </form>
                    </div>
                    <div class="filter__col">
                        <p class="filter__name">Выбор недели:</p>
                        <div class="filter__item">
                            <button class="icon-button filter__btn-arrow filter__btn-arrow--prev" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <div class="datepicker filter__datepicker">
                                <input type="date">
                            </div><span>&ndash;</span>
                            <div class="datepicker filter__datepicker">
                                <input type="date">
                            </div>
                            <button class="icon-button filter__btn-arrow filter__btn-arrow--next" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                        </div>
                        <div class="filter__item">
                            <p class="filter__label">Вид списка покупок:</p>
                            <div class="filter__item-wrap">
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type" checked><span class="input-radio__custom"></span>
                                    <p>Ингредиенты</p>
                                </label>
                                <label class="input-radio">
                                    <input class="visually-hidden" type="radio" name="type"><span class="input-radio__custom"></span>
                                    <p>По рецептам</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <ul class="paper buy__list">
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Картофель 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Свекла 300г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Морковь 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Картофель 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Свекла 300г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Морковь 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Картофель 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Свекла 300г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Морковь 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Картофель 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Свекла 300г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Морковь 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                <p>Картофель 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item disabled">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                <p>Свекла 300г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__item disabled">
                        <div class="buy__item-wrap">
                            <label class="input-checkbox">
                                <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                <p>Морковь 200г</p>
                            </label>
                            <button class="button-add buy__item-add" type="button" title="Купить ещё"></button>
                            <button class="icon-button buy__item-arrow" type="button" title="Открыть"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6">
                                <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                            </svg>

                            </button>
                            <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                <circle cx="64" cy="256" r="64"/>
                                <circle cx="64" cy="448" r="64"/>
                                <circle cx="64" cy="64" r="64"/>
                            </svg>

                            </button>
                            <section class="paper actions anim-show-action">
                                <div class="actions__item">
                                    <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                        <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                        <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Отложить на 24 часа</p>
                                    </label>
                                </div>
                                <div class="actions__item">
                                    <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                        <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                    </svg>

                                    </div>
                                    <label class="input-checkbox">
                                        <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                        <p>Скрыть</p>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="buy__item-dropdown">
                            <ul class="buy__sublist">
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Картофель 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                            <p>Солянка 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                                <li class="buy__item disabled">
                                    <div class="buy__item-wrap">
                                        <label class="input-checkbox">
                                            <input class="visually-hidden" type="checkbox" checked><span class="input-checkbox__custom"></span>
                                            <p>Оливье 200г</p>
                                        </label>
                                        <button class="icon-button icon-button--big buy__item-add-user modal-add-user" type="button" title="Добавить профиль"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 512">
                                            <path d="M360.9,307.1c-11.6-53.6-53.3-96.1-106.5-108.8c24.5-20.6,40-51.5,40-85.9C294.4,50.4,244,0,182.1,0
	c-62,0-112.4,50.4-112.4,112.4c0,34.4,15.6,65.3,40,85.9C46.9,213.2,0,269.9,0,337.3v111.4h254.1c15.5,37.1,52.2,63.3,94.9,63.3
	c56.7,0,102.8-46.1,102.8-102.8C451.8,356.5,412,313,360.9,307.1z M100.1,112.4c0-45.2,36.8-82,82-82c45.2,0,82,36.8,82,82
	s-36.8,82-82,82C136.9,194.4,100.1,157.6,100.1,112.4z M246.2,409.2c0,3.1,0.1,6.2,0.4,9.2H30.4v-81.1
	c0-62.1,50.5-112.6,112.6-112.6h78.3c52,0,95.9,35.4,108.7,83.4C282.3,317.1,246.2,359,246.2,409.2z M349,481.6
	c-40,0-72.5-32.5-72.5-72.5s32.5-72.5,72.5-72.5s72.5,32.5,72.5,72.5S389,481.6,349,481.6z"/>
                                            <path d="M364.2,366.7h-30.4V394h-27.3v30.4h27.3v27.3h30.4v-27.3h27.3V394h-27.3V366.7z"/>
                                        </svg>

                                        </button>
                                        <button class="icon-button buy__item-action" type="button" title="Действия"><svg mlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                                            <circle cx="64" cy="256" r="64"/>
                                            <circle cx="64" cy="448" r="64"/>
                                            <circle cx="64" cy="64" r="64"/>
                                        </svg>

                                        </button>
                                        <section class="paper actions anim-show-action">
                                            <div class="actions__item">
                                                <div class="actions__img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
                                                    <path d="M587.6,186.9c-32.3-75.2-87.1-129.9-162.9-162.3C386.7,8.4,347,0.2,305.5,0.2c-41.5,0-80.9,8.2-118.8,24.4
    C111.5,56.9,56.4,111.5,24.1,186.9C7.9,224.6,0,264.2,0,305.7c0,41.5,7.9,81.4,24.1,119.1c32.3,75.3,87.4,130.3,162.6,162.6
    c37.9,16.2,77.3,24.4,118.8,24.4s81.2-8.3,119.1-24.4c75.9-32.4,130.7-87.4,163-162.6c16.2-37.9,24.4-77.6,24.4-119.1
    C612,264.2,603.8,224.8,587.6,186.9z M538.7,440.9c-24,41.2-56.9,73.9-98.4,98c-41.2,24-86.3,36.1-134.8,36.1
    c-36.5,0-71.3-7-104.4-21.4c-33.1-14.4-61.7-33.3-85.7-57.2c-23.9-23.9-43-52.8-57.2-86C44,377.3,37.1,342.1,37.1,305.7
    c0-48.5,11.9-93.4,35.8-134.5c24-41.2,56.9-73.9,98-98C212.1,49,257,37,305.5,37c48.5,0,93.6,12.1,134.8,36.1
    c41.4,24.2,74.3,56.9,98.4,98c24.1,41.2,36.1,86,36.1,134.5C574.9,354.2,562.9,399.4,538.7,440.9z"/>
                                                    <path d="M324.9,303V129.7c0-10.4-9-18.7-19.4-18.7c-9.7,0-18.4,8.4-18.4,18.7v176c0,0.3,0.7,1.7,0.7,2.7c-0.7,6,1,11,5,15.1
    l100.1,100c6.7,6.7,19.1,6.7,25.8,0c7.7-7.7,7.2-18.9,0-26.1L324.9,303z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Отложить на 24 часа</p>
                                                </label>
                                            </div>
                                            <div class="actions__item">
                                                <div class="actions__img" style="width: 20px; margin-left: 18px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                                                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
    L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
    c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
    c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
                                                </svg>

                                                </div>
                                                <label class="input-checkbox">
                                                    <input class="visually-hidden" type="checkbox"><span class="input-checkbox__custom"></span>
                                                    <p>Скрыть</p>
                                                </label>
                                            </div>
                                        </section>
                                        <p class="buy__item-meta">Обед: 10.11.2018</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="buy__add">
                        <div class="buy__input">
                            <input type="text" placeholder="Добавить еще покупку">
                            <button class="button-add button-add--green buy__btn-add" type="button">Добавить</button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    </body>
</template>

<script>
    import AppProfile from "../components/AppProfile";
    import AppHeader from "../components/AppHeader";
    export default {
        name: "UserPurchases",
        components:{
            AppProfile,
            AppHeader
        }
    }
</script>

<style scoped>

</style>