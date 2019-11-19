<template>

    <div class="paper settings__container">
        <h2 class="settings__title">Укажите дату рождения</h2>
        <div class="datepicker settings__datepicker">
            <input type="date" v-model="birthDate">
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
    name: "FormStep2",
    data() {
      return {
        birthDate: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']
        profile['birthDate'] = this.birthDate
        this.$store.commit('user/PROFILE_INFO', profile);

        this.$emit('next-step')
      }
    },
    mounted() {
      this.birthDate = this.$store.getters['user/getProfileInfo'].birthDate
    }
  }
</script>

<style scoped>

</style>