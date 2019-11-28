<template>
    <div class="paper settings__container">
        <h2 class="settings__title">Ваш уровень активности</h2>
        <div class="settings__group">
            <label class="settings__lifestyle">
                <input class="visually-hidden" type="radio" name="lifestyle" v-model="activity" value="none">
                <p>Физическая нагрузка отсутсвует или минимальная</p>
            </label>
            <label class="settings__lifestyle">
                <input class="visually-hidden" type="radio" name="lifestyle" v-model="activity" value="medium_2_times">
                <p>Тренировки средней тяжести 2-3 раз в неделю</p>
            </label>
            <label class="settings__lifestyle">
                <input class="visually-hidden" type="radio" name="lifestyle" v-model="activity" value="medium_5_times">
                <p>Тренировки средней тяжести 5 раз в неделю</p>
            </label>
            <label class="settings__lifestyle">
                <input class="visually-hidden" type="radio" name="lifestyle" v-model="activity"
                       value="intensive_5_times">
                <p>Интенсивные тренировки 5 раз в неделю</p>
            </label>
            <label class="settings__lifestyle">
                <input class="visually-hidden" type="radio" name="lifestyle" v-model="activity" value="every_day">
                <p>Тренировки каждый день</p>
            </label>
            <label class="settings__lifestyle">
                <input class="visually-hidden" type="radio" name="lifestyle" v-model="activity"
                       value="intensive_every_day">
                <p>Интенсивные тренировки каждый день</p>
            </label>
            <label class="settings__lifestyle">
                <input class="visually-hidden" type="radio" name="lifestyle" v-model="activity" value="every_day_work">
                <p>Ежедневная нагрузка + физическая работа</p>
            </label>
        </div>
        <a class="button settings__btn" href="" @click="nextStep">Далее</a>
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
        error: '',
        activity: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']

        profile['activity'] = this.activity
        if (!this.activity) {
          this.error = 'Выберите активность';
        } else {
          this.$store.commit('user/PROFILE_INFO', profile)
          this.$emit('next-step')
        }

      }
    },
    mounted() {
      this.activity = this.$store.getters['user/getProfileInfo'].activity
    }
  }
</script>

<style scoped>
    b, strong {
        margin-top: 16px;
        text-align: center;
        color: red;
    }

    .settings__lifestyle p {
        font-size: 14px;
        text-align: center;
    }
</style>
