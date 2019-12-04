import {tns} from "tiny-slider/src/tiny-slider"
import Glide from '@glidejs/glide';

export default {
    methods: {
        runWaterSlider() {
            const slider = document.querySelector(`.menu__slides`);

            if (slider) {
                const btnContainer = document.querySelector(`.menu__arrows`);
                const btnPrev = document.querySelector(`.menu__slider-arrow--prev`);
                const btnNext = document.querySelector(`.menu__slider-arrow--next`);

                tns({
                    container: slider,
                    controlsContainer: btnContainer,
                    prevButton: btnPrev,
                    nextButton: btnNext,
                });
            }

            const diarySliders = [...document.querySelectorAll(`.diary__food-wrap.slider`)];

            if (diarySliders.length > 0) {
                for (let i = 0, length = diarySliders.length; i < length; i++) {
                    new Glide(diarySliders[i], {
                        perView: 4,
                        bound: true,
                        gap: 15,
                        peek: {
                            before: 0,
                            after: 5,
                        },
                    }).mount();
                }
            }

            const modalSliders = document.querySelector(`.modal__slides`);

            if (modalSliders) {
                const modalSlidersBullets = document.querySelector(`.modal__bullets`);

                tns({
                    container: modalSliders,
                    loop: false,
                    rewind: true,
                    controls: false,
                    navContainer: modalSlidersBullets,
                    autoplay: true,
                    autoplayButtonOutput: false,
                });
            }

            const cutlerySliders = document.querySelector(`.slider__cutlery`);

            if (cutlerySliders) {
                new Glide(cutlerySliders, {
                    perView: 3,
                    gap: 20,
                    bound: true,
                    peek: {
                        before: 5,
                        after: 0,
                    },
                }).mount();
            }

            const profilesList = [...document.querySelectorAll(`.profiles-list`)];

            if (profilesList.length > 0) {
                profilesList.forEach((list) => {
                    if (list.children.length > 2) {
                        tns({
                            container: list,
                            items: 2,
                            loop: false,
                            rewind: true,
                            nav: false,
                            gutter: 5,
                            responsive: {
                                1400: {
                                    items: 4,
                                }
                            },
                        });
                    }
                });
            }

            const menuDishSlider = document.querySelector(`.menu__dish-slides`);

            if (menuDishSlider) {
                tns({
                    container: menuDishSlider,
                    items: 7,
                    loop: false,
                    rewind: true,
                    nav: false,
                    gutter: 5,
                    responsive: {
                        960: {
                            items: 8,
                        },
                        1170: {
                            items: 7,
                        },
                        1340: {
                            items: 8,
                        },
                        1500: {
                            items: 9,
                        },
                        1680: {
                            items: 10,
                        },
                        1900: {
                            items: 11,
                        },
                    },
                });
            }

            const diaryWaterSlider = document.querySelector(`.diary__water-slides`);

            if (diaryWaterSlider.getElementsByTagName('li').length > 0) {
                tns({
                    container: diaryWaterSlider,
                    items: 5,
                    loop: false,
                    rewind: true,
                    nav: false,
                });
            }
        }
    }
}