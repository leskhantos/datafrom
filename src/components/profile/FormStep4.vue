<template>
    <div class="paper settings__container">
        <h2 class="settings__title">Укажите ваш рост</h2>
        <div class="settings__height">
            <input type="number" placeholder="180" v-model="height"><span>см</span>
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
    name: "FormStep4",
    data() {
      return {
        error: '',
        height: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']

        profile['height'] = this.height
        if (!this.height) {
          this.error = 'Заполните это поле';
        } else {
          this.$store.commit('user/PROFILE_INFO', profile)
          this.$emit('next-step')
        }

      }
    },
    mounted() {
      this.height = this.$store.getters['user/getProfileInfo'].height
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