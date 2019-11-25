<template>

    <main class="page">
        <div class="centered">
            <section>
                <ul class="settings__list">
                    <li :class="{'done':step>=1}" v-on:click="step=1">
                        <a>Пол</a>
                    </li>
                    <li :class="{'done':step>=2}" v-on:click="step=2">
                        <a>Имя</a>
                    </li>
                    <li :class="{'done':step>=3}" v-on:click="step=3">
                        <a>Дата рождения</a>
                    </li>
                    <li :class="{'done':step>=4}" v-on:click="step=4">
                        <a>Рост</a>
                    </li>
                    <li :class="{'done':step>=5}" v-on:click="step=5">
                        <a>Вес</a>
                    </li>
                    <!--                    <li><a>Активность</a></li>-->
                    <li :class="{'done':step>=6}" v-on:click="step=6">
                        <a>Цель</a>
                    </li>
                    <!--                    <li><a>Аллергены</a></li>-->
                    <li :class="{'done':step>=7}" v-on:click="step=7">
                        <a>Расчёт калорий и БЖУ</a>
                    </li>
                </ul>

                <component
                        :is="currentStep"
                        v-on:next-step="childNextStep"
                        v-on:create="createProfile"
                        v-on:finish="finishRegistration"
                >
                </component>
            </section>
        </div>
    </main>
</template>

<script>
  import BreadCrumbs from "@/components/BreadCrumbs";
  import AppProfile from "@/components/AppProfile";
  import FormStep1 from '@/components/profile/FormStep1'
  import FormStep2 from '@/components/profile/FormStep2'
  import FormStep3 from '@/components/profile/FormStep3'
  import FormStep4 from '@/components/profile/FormStep4'
  import FormStep5 from '@/components/profile/FormStep5'
  import FormStep6 from '@/components/profile/FormStep6'
  import FormStep7 from '@/components/profile/FormStep7'

  export default {
    components: {
      FormStep1,
      FormStep2,
      FormStep3,
      FormStep4,
      FormStep5,
      FormStep6,
      FormStep7,
      BreadCrumbs,
      AppProfile
    },
    data() {
      return {
        step: 1
      }
    },
    name: "RegistrationProfile",
    computed: {
      currentStep() {
        return 'FormStep' + this.step
      },
    },
    methods: {
      childNextStep() {
        this.step += 1
      },
      createProfile() {
        const profile = this.$store.getters['user/getProfileInfo']
        profile['fullName'] = this.$store.getters['user/getUserInfo'].fullName
        this.$store.dispatch('user/createProfile', profile).then(() => {
          this.step += 1
        }).catch((error) => {
          this.$store.commit('error/SET_ERROR', error);
        })
      },
      finishRegistration() {
        this.$router.push({name: 'home'})
      },
    }
  }
</script>

<style scoped>
    .done {
        cursor: pointer;
    }
</style>