<template>
  <body>
    <link v-if="!isMobile" rel="stylesheet" href="/static/css/style.css">
    <link v-else rel="stylesheet" href="/static/css/style-mobile.css">
    <AppHeader/>
    <router-view></router-view>
    <SnackBar/>

    <div class="overlay"></div>
  </body>
</template>

<script>
  import AppHeader from "./components/AppHeader";
  import axios from 'axios'
  import SnackBar from "./components/SnackBar";
  import { isMobile } from 'mobile-device-detect';

  export default {
    name: 'app',
    components:{
      AppHeader,
      SnackBar,
    },
    data() {
      return {
        isMobile: false
      }
    },
    beforeCreate: () => {
      this.isMobile = isMobile
    },
    created: function () {
      axios.interceptors.response.use(response => {
        return response;
      }, error => {
        if (error.response.status === 401) {
          this.$store.dispatch('user/logout').then(() => {
            this.$router.replace('login')
          })
        }
        return Promise.reject(error);
      })
    }
  }
</script>

<style>

</style>
