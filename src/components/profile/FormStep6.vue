<template>
    <div class="paper settings__container">
        <h2 class="settings__title">Расчёт калорийности рациона и БЖУ</h2>
        <p class="settings__text">Для вас рассчитаны рекомендуемые нормы калорийности и БЖУ.<br> Вы можете
            их изменить.</p>
        <div class="settings__input">
            <p>Калорийность</p>
            <input type="number" value="1700"><span>кал</span>
        </div>
        <div class="range settings__range">
            <div class="range__container">
                <div class="range__line"></div>
                <button class="range__btn" style="transform: translateX(30%);"></button>
            </div>
            <div class="range__values"><span>1500</span><span>2000</span><span>2500</span><span>3000</span>
            </div>
        </div>
        <div class="chart settings__chart">
            <p class="chart__caption">Суточная норма БЖУ</p>
            <div class="chart__container">
                <div class="chart__list">
                    <div class="chart__item">
                        <p class="chart__name">Б</p>
                        <div class="chart__range">
                            <div class="chart__range-fill red" style="height: 20%"></div>
                        </div>
                        <label class="chart__input"><span>%</span>
                            <input type="number" value="20">
                        </label>
                    </div>
                    <div class="chart__item">
                        <p class="chart__name">Ж</p>
                        <div class="chart__range">
                            <div class="chart__range-fill yellow" style="height: 30%"></div>
                        </div>
                        <label class="chart__input"><span>%</span>
                            <input type="number" value="30">
                        </label>
                    </div>
                    <div class="chart__item">
                        <p class="chart__name">У</p>
                        <div class="chart__range">
                            <div class="chart__range-fill green" style="height: 50%"></div>
                        </div>
                        <label class="chart__input"><span>%</span>
                            <input type="number" value="50">
                        </label>
                    </div>
                </div>
                <div class="chart__meta">
                    <div class="chart__meta-item">
                        <p><span class="red">Б</span> 350г</p>
                        <p>1г = 4 кал</p>
                    </div>
                    <div class="chart__meta-item">
                        <p><span class="yellow">Ж</span> 350г</p>
                        <p>1г = 9 кал</p>
                    </div>
                    <div class="chart__meta-item">
                        <p><span class="green">У</span> 350г</p>
                        <p>1г = 4 кал</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="button settings__btn" type="button" @click="createProfile">Начать!</button>
    </div>
</template>


<script>

  export default {
    props: {
      profile: {
        type: Object,
        default: () => ({}),
      }
    },
    name: "FormStep6",
    data() {
      return {
        target: ''
      }
    },
    methods: {
      createProfile(e) {
        e.preventDefault()

        this.$emit('create')
      }
    }
  }
</script>

<style scoped>

</style>