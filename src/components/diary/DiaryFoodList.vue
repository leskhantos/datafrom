<template>
    <ul class="paper diary__food-list">
        <li>
            <p>Завтрак</p><span>500 Кал</span>
            <div class="diary__food-wrap">
                <ul class="diary__food-sublist">
                    <li>
                        <div class="diary__food-img no-border checked"><img src="/static/images/jpg/diary-2.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-5.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-3.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-4.jpg" alt="diary"></div>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <p>Перекус</p><span>500 Кал</span>
            <div class="diary__food-wrap slider">
                <div class="diary__food-track" data-glide-el="track">
                    <ul class="diary__food-sublist">
                        <li>
                            <div class="diary__food-img no-border checked"><img src="/static/images/jpg/diary-2.jpg" alt="diary"></div>
                        </li>
                        <li>
                            <div class="diary__food-img"><img src="/static/images/jpg/diary-5.jpg" alt="diary"></div>
                        </li>
                        <li>
                            <div class="diary__food-img"><img src="/static/images/jpg/diary-3.jpg" alt="diary"></div>
                        </li>
                        <li>
                            <div class="diary__food-img"><img src="/static/images/jpg/diary-4.jpg" alt="diary"></div>
                        </li>
                        <li>
                            <div class="diary__food-img"><img src="/static/images/jpg/diary-5.jpg" alt="diary"></div>
                        </li>
                        <li>
                            <div class="diary__food-img"><img src="/static/images/jpg/diary-3.jpg" alt="diary"></div>
                        </li>
                        <li>
                            <div class="diary__food-img"><img src="/static/images/jpg/diary-4.jpg" alt="diary"></div>
                        </li>
                    </ul>
                </div>
                <div class="diary__food-arrows" data-glide-el="controls">
                    <button class="icon-button button-prev" type="button" data-glide-dir="&lt;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6" width="25" height="25">
                        <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                    </svg>

                    </button>
                    <button class="icon-button button-next" type="button" data-glide-dir="&gt;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.8 257.6" width="25" height="25">
                        <path d="M225.9,257.6c-8.1,0-16.2-3.1-22.4-9.3L9.3,54C-3.1,41.7-3.1,21.6,9.3,9.3C21.6-3.1,41.7-3.1,54,9.3l171.9,171.9L397.8,9.3
    c12.4-12.4,32.4-12.4,44.7,0c12.4,12.4,12.4,32.4,0,44.8L248.3,248.3C242.1,254.5,234,257.6,225.9,257.6z"/>
                    </svg>

                    </button>
                </div>
            </div>
        </li>
        <li>
            <p>Обед</p><span>500 Кал</span>
            <div class="diary__food-wrap">
                <ul class="diary__food-sublist">
                    <li>
                        <div class="diary__food-img no-border checked"><img src="/static/images/jpg/diary-2.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-5.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-3.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-4.jpg" alt="diary"></div>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <p>Перекус</p><span>500 Кал</span>
            <div class="diary__food-wrap">
                <ul class="diary__food-sublist">
                    <li>
                        <div class="diary__food-img no-border checked"><img src="/static/images/jpg/diary-2.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-5.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-3.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-4.jpg" alt="diary"></div>
                    </li>
                </ul>
            </div>
        </li>
        <li>
            <p>Ужин</p><span>500 Кал</span>
            <div class="diary__food-wrap">
                <ul class="diary__food-sublist">
                    <li>
                        <div class="diary__food-img no-border checked"><img src="/static/images/jpg/diary-2.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-5.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-3.jpg" alt="diary"></div>
                    </li>
                    <li>
                        <div class="diary__food-img"><img src="/static/images/jpg/diary-4.jpg" alt="diary"></div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "DiaryFoodList",
        mounted() {
            let thumbs = document.querySelectorAll('.diary__food-img')
            let close = document.querySelector('.modal__btn-close')
            let modal = document.querySelector('.modal.modal--food')
            let overlay = document.querySelector('.overlay')

            for (let thumb of thumbs) {
                thumb.onclick = () => {
                    overlay.classList.add('show', 'show-modal')
                    modal.classList.add('show')
                }
            }

            close.onclick = () => {
                overlay.classList.remove('show', 'show-modal')
                modal.classList.remove('show')
            }
        }
    }
</script>

<style scoped>

</style>
