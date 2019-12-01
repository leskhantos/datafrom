<template>
  <body>
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
  export default {
    name: 'app',
    components:{
      AppHeader,
      SnackBar
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
        return Promise.reject(new Error(400));
      })
    }
  }
</script>

<style>

</style>
