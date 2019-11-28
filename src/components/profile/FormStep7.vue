<template>
    <div class="paper settings__container">
        <h2 class="settings__title">Ваша цель</h2>
        <div class="settings__group">
            <label class="settings__target">
                <input class="visually-hidden" type="radio" name="target" v-model="target" value="gain_weight">
                <div><img src="/static/images/png/weight-1.png" alt="weight">
                    <p>Набор мышечной массы</p>
                </div>
            </label>
            <label class="settings__target">
                <input class="visually-hidden" type="radio" name="target" v-model="target" value="lose_weight">
                <div><img src="/static/images/png/weight-2.png" alt="weight">
                    <p>Медленная потеря веса</p>
                </div>
            </label>
            <label class="settings__target">
                <input class="visually-hidden" type="radio" name="target" v-model="target" value="hold_weight">
                <div><img src="/static/images/png/weight-3.png" alt="weight">
                    <p>Поддержание текущей формы</p>
                </div>
            </label>
            <!--            <label class="settings__target">-->
            <!--                <input class="visually-hidden" type="radio" name="target">-->
            <!--                <div><img src="/static/images/png/weight-4.png" alt="weight">-->
            <!--                    <p>Быстрая потеря веса</p>-->
            <!--                </div>-->
            <!--            </label>-->
        </div>
        <b :class="{'active':error!==''}">{{ this.error }}</b>
        <a class="button settings__btn" href=""
           @click="nextStep">Далее
        </a>
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
    name: "FormStep7",
    data() {
      return {
        error: '',
        target: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']

        profile['target'] = this.target
        if (!this.target) {
          this.error = 'Выберите цель';
        } else {
          this.$store.commit('user/PROFILE_INFO', profile)
          this.$emit('create')
        }

      }
    },
    mounted() {
      this.target = this.$store.getters['user/getProfileInfo'].target
    }
  }
</script>

<style scoped>
    b, strong {
        margin-top: 16px;
        text-align: center;
        color: red;
    }
</style>
