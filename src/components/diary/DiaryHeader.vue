<template>
    <div class="paper diary__header">
        <div class="title__wrapper">
            <h1 class="title">Дневник</h1>
            <div class="diary__datepicker">
                <button class="icon-button diary__btn-arrow diary__btn-arrow--prev" type="button">
                    <NextIcon/>
                </button>
                <div class="datepicker filter__datepicker">
                    <input type="date" v-model="dateInput">
                </div>
                <button class="icon-button diary__btn-arrow diary__btn-arrow--next" type="button">
                    <PreviousIcon/>
                </button>
            </div>
        </div>
        <div class="diary__header-wrap">
            <div class="diary__header-col">
                <div class="diary__text-with-icon">
                    <RunnerIcon/>
                    <p class="green">+{{ sumSport.calories }} Кал</p>
                </div>
                <div class="diary__text-with-icon">
                    <VoterIcon/>
                    <p><span class="blue">{{ sumWater.milliliters }} мл</span> норма 2400</p>
                </div>
            </div>
            <div class="diary__header-col">
                <div class="diary__calories">
                    <svg width="200" height="200">
                        <circle r="100" cx="50%" cy="50%" stroke="#efeff1" stroke-width="10" fill="none"></circle>
                        <circle r="100" cx="50%" cy="50%" stroke="#f58b1f" stroke-width="10" fill="none" stroke-dasharray="628" stroke-dashoffset="549.5"></circle>
                    </svg>
                    <p class="diary__calories-current"><span>100</span> Ккал</p>
                    <p class="diary__calories-normal">норма<br> {{  profileNutrients.calories }}</p>
                </div>
            </div>
            <div class="diary__header-col">
                <div class="diary__chart">
                    <div class="diary__chart-col green">
                        <div class="diary__chart-range">
                            <div :style="getChartHeight(profileNutrients.proteins)"></div>
                        </div><span>Б</span><span>{{ profileNutrients.proteins }}</span>
                    </div>
                    <div class="diary__chart-col red">
                        <div class="diary__chart-range">
                            <div :style="getChartHeight(profileNutrients.fats)"></div>
                        </div><span>Ж</span><span>{{ profileNutrients.fats }}</span>
                    </div>
                    <div class="diary__chart-col yellow">
                        <div class="diary__chart-range">
                            <div :style="getChartHeight(profileNutrients.carbohydrates)"></div>
                        </div><span>У</span><span>{{ profileNutrients.carbohydrates }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PreviousIcon from "../icons/PreviousIcon";
    import RunnerIcon from "../icons/RunnerIcon";
    import VoterIcon from "../icons/VoterIcon";
    import NextIcon from "../icons/NextIcon";
    import mainMixin from "../../mixins/mainMixin"

    export default {
        name: "DiaryHeader",
        components: {
            NextIcon,
            VoterIcon,
            RunnerIcon,
            PreviousIcon,
        },
        mixins: [mainMixin],
        methods: {
            getChartHeight(val) {
                return 'height: ' + (val / (this.profileNutrients.calories / 100)) + '%'
            }
        },
        computed: {
            profileNutrients() {
                return this.$parent.profileNutrients
            },
            listWater() {
                return this.$parent.listWater
            },
            sumWater() {
                return this.$parent.sumWater
            },
            sumSport() {
                return this.$parent.sumSport
            }
        },
        watch: {
            profileNutrients(newVal) {
                Object.keys(newVal).map((key) => {
                    newVal[key] = this.roundUp(newVal[key])
                })
            }
        },
        data() {
            return {
                dateInput: ''
            }
        },
        created() {
            this.dateInput = this.getCurrentDate()
        },
        mounted() {
            let diaryHeader = document.querySelector('.diary__header')

            window.addEventListener('scroll', () => {
                const current = (document.documentElement.clientWidth <= 1439) ? 90 : 110;
                const top = Math.round(diaryHeader.getBoundingClientRect().top);

                if (top <= current) {
                    diaryHeader.classList.add('small');
                } else {
                    diaryHeader.classList.remove('small');
                }
            });
        }
    }
</script>

<style scoped>

</style>
