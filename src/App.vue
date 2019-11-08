<template>
  <router-view></router-view>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'app',
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
