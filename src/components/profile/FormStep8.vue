<template>
    <div class="paper settings__container">
        <h2 class="settings__title">Расчёт калорийности рациона и БЖУ</h2>
        <p class="settings__text">Для вас рассчитаны рекомендуемые нормы калорийности и БЖУ.<br> Вы можете
            их изменить.</p>
        <div class="settings__input">
            <p>Калорийность</p>
            <input type="number" disabled v-model="calories"><span>кал</span>
        </div>
        <CaloriesRange v-model="calories" :range="[1500, 2000, 2500, 3000]" />
        <div class="chart settings__chart">
            <p class="chart__caption">Суточная норма БЖУ</p>
            <div class="chart__container">
                <div class="chart__list">
                    <div class="chart__item">
                        <p class="chart__name">Б</p>
                        <div class="chart__range">
                            <div class="chart__range-fill red" :style="{height: this.percentProteins+'%'}"></div>
                        </div>
                        <label class="chart__input"><span>%</span>
                            <input type="number" v-model="percentProteins">
                        </label>
                    </div>
                    <div class="chart__item">
                        <p class="chart__name">Ж</p>
                        <div class="chart__range">
                            <div class="chart__range-fill yellow" :style="{height: this.percentFats+'%'}"></div>
                        </div>
                        <label class="chart__input"><span>%</span>
                            <input type="number" v-model="percentFats">
                        </label>
                    </div>
                    <div class="chart__item">
                        <p class="chart__name">У</p>
                        <div class="chart__range">
                            <div class="chart__range-fill green" :style="{height: this.percentCarbohydrates+'%'}"></div>
                        </div>
                        <label class="chart__input"><span>%</span>
                            <input type="number" v-model="percentCarbohydrates">
                        </label>
                    </div>
                </div>
                <div class="chart__meta">
                    <div class="chart__meta-item">
                        <p><span class="red">Б</span> {{ Math.round(proteins) }}г</p>
                        <p>1г = 4 кал</p>
                    </div>
                    <div class="chart__meta-item">
                        <p><span class="yellow">Ж</span> {{ Math.round(fats) }}г</p>
                        <p>1г = 9 кал</p>
                    </div>
                    <div class="chart__meta-item">
                        <p><span class="green">У</span> {{ Math.round(carbohydrates) }}г</p>
                        <p>1г = 4 кал</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="button settings__btn" type="button" @click="createProfile">Начать!</button>
    </div>
</template>


<script>

  import CaloriesRange from "./CaloriesRange";

  export default {
    name: "FormStep8",
    components: {CaloriesRange},
    data() {
      return {
        calories: 1700,
        percentFats: 20,
        percentProteins: 30,
        percentCarbohydrates: 50,
        fats: 0,
        proteins: 0,
        carbohydrates: 0
      }
    },
    methods: {
      createProfile(e) {
        e.preventDefault()

        this.$emit('finish')
      },
      getAge(dateString) {
        let today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
    },
    mounted() {
      let profile = this.$store.getters['user/getProfileInfo']
      profile['age'] = this.getAge(profile['birthDate']);
      profile['fatsPercentage'] = this.percentFats;
      profile['proteinsPercentage'] = this.percentProteins;
      profile['carbohydratesPercentage'] = this.percentCarbohydrates;
      this.$store.dispatch('user/getNutrients', profile).then(() => {
        let nutrients = this.$store.getters['user/getNutrients'];
        this.calories = Math.round(nutrients.calories);
        this.fats = Math.round(nutrients.fats);
        this.proteins = Math.round(nutrients.proteins);
        this.carbohydrates = Math.round(nutrients.carbohydrates);
      })
    },
    watch: {
      calories: function () {
        this.proteins = Math.round(((this.calories * this.percentProteins) / 100) / 4),
          this.fats = Math.round(((this.calories * this.percentFats) / 100) / 9),
          this.carbohydrates = Math.round(((this.calories * this.percentCarbohydrates) / 100) / 4)
      },
      percentProteins: function () {
          if (this.percentProteins >= 0 && this.percentProteins <= 100){
              this.proteins = Math.round(((this.calories * this.percentProteins) / 100) / 4)
          }else {
              this.percentProteins=0
          }
      },
      percentFats: function () {
          if (this.percentFats >= 0 && this.percentFats <= 100){
              this.fats = Math.round(((this.calories * this.percentFats) / 100) / 9)
          }else {
              this.percentFats = 0
          }
      },
      percentCarbohydrates: function () {
          if (this.percentCarbohydrates >= 0 && this.percentCarbohydrates <= 100){
              this.carbohydrates = Math.round(((this.calories * this.percentCarbohydrates) / 100) / 4)
          }else {
              this.percentCarbohydrates = 0
          }
      }
    }
  }
</script>

<style scoped>

</style>
