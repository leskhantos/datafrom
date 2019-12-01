<template>
    <div class="paper settings__container">
        <div class="settings__upload-avatar">
            <input type="file">
            <div class="settings__upload-avatar-image">
            </div>
            <p>+ Добавить фото</p>
        </div>
        <h2 class="settings__title">Укажите имя</h2>
        <div class="settings__input settings__input--center">
            <input type="text" placeholder="Ваше имя" v-model="title">
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
    name: "FormStep2",
    data() {
      return {
        error: '',
        title: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']

        profile['title'] = this.title
        if (!this.title) {
          this.error = 'Заполните это поле';
        } else {
          this.$store.commit('user/PROFILE_INFO', profile)
          this.$emit('next-step')
        }

      }
    },
    mounted() {
      this.title = this.$store.getters['user/getProfileInfo'].title
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