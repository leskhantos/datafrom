<template>
    <div class="diary__container">
        <div class="paper diary__col">
            <h3 class="diary__caption">Выпитая вода</h3>
            <p class="diary__heading-line"><span>стакан 200 мл.</span></p>
            <ul class="list-glass">
                <li v-for="(glass,key) in glassFullQuantity" :key="key">
                    <button class="list-glass__fill" type="button">
                        <FullGlassIcon/>
                    </button>
                </li>
                <li v-show="glassIncomplete">
                    <button class="list-glass__middle" type="button">
                        <IncompleteGlassIcon/>
                    </button>
                </li>
                <li>
                    <button class="list-glass__add" type="button" @click="drinkWater(glassOfWaterMl)">
                        <AddGlassIcon/>
                    </button>
                </li>
            </ul>
            <p class="diary__heading-line"><span>Укажите количество воды в мл</span></p>
            <div class="diary__water-settings">
                <p class="diary__water-selected"><span>{{ this.$parent.sumWater.milliliters }} мл</span>норма 2400</p>
                <input class="diary__water-change" type="text" v-on:keyup.enter="drinkWater($event.target.value)">
            </div>
        </div>
        <div class="paper diary__col">
            <h3 class="diary__caption">Укажите вес</h3>
            <div class="tabs__buttons tabs__buttons--gray diary__tabs-weight">
                <button class="tabs__btn active" type="button">Неделя</button>
                <button class="tabs__btn" type="button">Месяц</button>
                <button class="tabs__btn" type="button">Год</button>
            </div>
            <div class="diary__weight-chart"><img src="/static/images/jpg/chart.jpg" alt="chart"></div>
            <div class="diary__weight-change">
                <p>Задайте вес</p>
                <input type="text" value="95.5 кг">
            </div>
        </div>
    </div>
</template>

<script>
    import FullGlassIcon from "../icons/FullGlassIcon";
    import IncompleteGlassIcon from "../icons/IncompleteGlassIcon";
    import AddGlassIcon from "../icons/AddGlassIcon";

    export default {
        name: "DiaryContainer",
        components: {
            AddGlassIcon,
            IncompleteGlassIcon,
            FullGlassIcon
        },
        methods: {
            drinkWater(ml) {
                this.sumWater.milliliters = parseInt(ml) + parseInt(this.sumWater.milliliters)
                this.$store.dispatch('diary/createWater', {
                    'activityDate': this.$parent.parseDate() + ' 23:59:59',
                    'kilocalories': this.sumSport.calories,
                    'milliliters': ml,
                    'profile': this.$parent.profile.id
                })
            }
        },
        watch: {
            sumWater: {
                handler(n) {
                    let sumMl = n.milliliters
                    this.glassIncomplete = sumMl % this.glassOfWaterMl
                    this.glassFullQuantity = (sumMl - this.glassIncomplete) / this.glassOfWaterMl
                },
                deep: true
            }
        },
        computed: {
            sumWater: {
                set: function (v) {
                    this.$parent.sumWater = parseInt(v)
                },
                get: function () {
                    return this.$parent.sumWater
                }
            },
            sumSport() {
                return this.$parent.sumSport
            }
        },
        data() {
            return {
                glassOfWaterMl: 200,
                glassIncomplete: 0,
                glassFullQuantity: 0,
            }
        }
    }
</script>

<style scoped>

</style>