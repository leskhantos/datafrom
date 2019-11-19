<template>

    <div class="paper settings__container">
        <div class="settings__wrapper">
            <div class="settings__col" style="margin-right: 180px;">
                <h2 class="settings__title settings__title--small">Укажите ваш<br> текущий вес</h2>
                <div class="settings__weight">
                    <input type="number" placeholder="105" v-model="weight"><span>кг</span>
                </div>
            </div>
            <div class="settings__col">
                <h2 class="settings__title settings__title--small">Укажите ваш<br> желаемый вес</h2>
                <div class="settings__weight">
                    <input type="number" placeholder="55"><span>кг</span>
                </div>
            </div>
        </div>
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
    name: "FormStep4",
    data() {
      return {
        weight: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']
        profile['weight'] = this.weight
        this.$store.commit('user/PROFILE_INFO', profile);

        this.$emit('next-step')
      }
    },
    mounted() {
      this.weight = this.$store.getters['user/getProfileInfo'].weight
    }
  }
</script>

<style scoped>

</style>