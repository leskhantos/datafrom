<template>

    <main class="page">
        <section :class="['grid', { 'first-time':!isOneExist }]">
            <AppProfile v-if="isOneExist" />
            <div class="grid__column">
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
                        <li :class="{'done':step>=6}" v-on:click="step=6">
                            <a>Активность</a>
                        </li>
                        <!--                    <li><a>Аллергены</a></li>-->
                        <li :class="{'done':step>=7}" v-on:click="step=7">
                            <a>Цель</a>
                        </li>
                        <li :class="{'done':step>=8}" v-on:click="step=8">
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
        </section>
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
  import FormStep8 from '@/components/profile/FormStep8'

  export default {
    components: {
      FormStep1,
      FormStep2,
      FormStep3,
      FormStep4,
      FormStep5,
      FormStep6,
      FormStep7,
      FormStep8,
      BreadCrumbs,
      AppProfile
    },
    data() {
      return {
        step: 1
      }
    },
    name: "RegistrationProfile",
    props: ['isOneExist', 'isEdit'],
    computed: {
      currentStep() {
        return 'FormStep' + this.step
      },
    },
    methods: {
      childNextStep() {
        this.step += 1
        // eslint-disable-next-line no-console
        console.log(this.step)
      },
      createProfile() {
        const profile = this.$store.getters['user/getProfileInfo']
        if (this.isEdit) {
          const profileInfo = {
            id: profile.id,
            payload: {
              title: profile.title,
              fullName: {
                firstName: profile.fullName.firstName,
                lastName: profile.fullName.lastName,
                middleName: profile.fullName.middleName,
              },
              height: profile.height,
              weight: profile.weight,
              target: profile.target,
              gender: profile.gender,
              birthDate: profile.birthDate,
              activity: profile.activity,
            }
          }
          this.$store.dispatch('user/editProfile', profileInfo).then(() => {
            this.$store.commit('error/SET_OK', "Профиль успешно отредактирован")
            this.step += 1
          }).catch((error) => {
            this.$store.commit('error/SET_ERROR', error);
          })
        } else {
          profile['fullName'] = this.$store.getters['user/getUserInfo'].fullName
          this.$store.dispatch('user/createProfile', profile).then(() => {
            this.$store.commit('error/SET_OK', "Профиль успешно создан")
            this.step += 1
          }).catch((error) => {
            this.$store.commit('error/SET_ERROR', error);
          })
        }
      },
      finishRegistration() {
        let profile = {}
        this.$store.commit('user/PROFILE_INFO', profile)
        if (this.isOneExist) {
          this.$router.push({name: 'profile', params: {id: this.$store.getters['user/getProfileInfo'].id}})
        } else {
          this.$router.push({name: 'home'})
        }
      },
    }
  }
</script>

<style scoped>
    .done {
        cursor: pointer;
    }

    .grid.first-time {
        display: block;
        margin-top: 50px;
    }

    .settings__list {
        margin-top: 50px;
    }
</style>