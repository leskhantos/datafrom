<template>
    <div class="paper settings__container">
        <h2 class="settings__title">Здравствуйте!</h2>
        <p class="settings__text">Ответьте на несколько вопросов и мы подготовим Вам идеальную
            программу.</p>
        <div class="settings__wrapper">
            <div class="settings__col" style="margin-right: 100px;">
                <label class="settings__btn-gender">
                    <input class="visually-hidden" type="radio" name="gender" v-model="gender" value="male">
                    <div class="settings__avatar"><img src="/static/images/png/man.png" alt="man"></div>
                    <span>Мужчина</span>
                </label>
            </div>
            <div class="settings__col">
                <label class="settings__btn-gender">
                    <input class=" visually-hidden" type="radio" name="gender" v-model="gender" value="female">
                    <div class="settings__avatar"><img src="/static/images/png/woman.png" alt="woman">
                    </div>
                    <span>Женщина</span>
                </label>
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
    name: "FormStep1",
    data() {
      return {
        gender: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']
        profile['gender'] = this.gender
        this.$store.commit('user/PROFILE_INFO', profile);

        this.$emit('next-step')
      }
    },
    mounted() {
      this.gender = this.$store.getters['user/getProfileInfo'].gender
    }
  }
</script>

<style scoped>

</style>