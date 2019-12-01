<template>
    <div class="paper settings__container">
        <div class="settings__upload-avatar">
            <input type="file" @change="onFileSelected">
            <div class="user__avatar-create">
                <img :src="previewImage" alt="Image">
            </div>
            <!--            <button @click.prevent="onUpload">Upload</button>-->

            <!--            <div class="settings__upload-previewImage-image">-->
            <!--            </div>-->
            <p v-if="!isEdit">+ Добавить фото</p>
            <p v-if="isEdit">+ Изменить фото</p>
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
    props: ['profile', 'isEdit'],
    name: "FormStep2",
    data() {
      return {
        error: '',
        title: '',
        previewImage: '/static/images/svg/user.svg',
        formData: null,
        imageId: ''
      }
    },
    methods: {
      nextStep(e) {
        e.preventDefault()

        let profile = this.$store.getters['user/getProfileInfo']
        if (!this.isEdit) {
          this.uploadAvatar(profile)
        } else {
          if (this.previewImage === '/static/images/svg/user.svg' || this.formData !== null) {
            this.uploadAvatar(profile)
          } else {
            profile['title'] = this.title
            if (!this.title) {
              this.error = 'Заполните это поле';
            } else {
              this.$store.commit('user/PROFILE_INFO', profile)
              this.$emit('next-step')
            }
          }
        }
      },
      uploadAvatar(profile) {

        this.$store.dispatch('user/uploadImage', this.formData).then(() => {
          this.$store.commit('error/SET_OK', "Изображение загружено")

          this.imageId = this.$store.getters['user/uploadImage'].id
          profile['avatar'] = this.imageId
          profile['title'] = this.title
          if (!this.title) {
            this.error = 'Заполните это поле';
          } else {
            this.$store.commit('user/PROFILE_INFO', profile)
            this.$emit('next-step')
          }

        }).catch((error) => {
          this.$store.commit('error/SET_ERROR', error);
        })
      },
      onFileSelected(event) {
        let selectedFile = event.target.files[0]

        this.formData = new FormData()
        this.formData.append('file', selectedFile)

        let reader = new FileReader()
        reader.readAsDataURL(selectedFile);
        reader.onload = e => {
          this.previewImage = e.target.result
        }

      }
    },
    mounted() {
      this.title = this.$store.getters['user/getProfileInfo'].title
      if (this.$store.getters['user/getProfileInfo'].avatar.path) {
        this.previewImage = this.$store.getters['user/getProfileInfo'].avatar.path
      }
    }
  }
</script>

<style scoped>
    b, strong {
        margin-top: 16px;
        text-align: center;
        color: red;
    }

    .user__avatar-create {
        position: relative;
        width: 130px;
        height: 130px;
        margin-bottom: 10px;
        border-radius: 50%;
        overflow: hidden;
    }

    .user__avatar-create img {
        display: block;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: center;
        object-position: center;
    }

    .settings__upload-previewImage input {
        cursor: pointer;
    }

    .settings__upload-avatar input {
        cursor: pointer;
    }
</style>