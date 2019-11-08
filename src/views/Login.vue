<template>
    <body>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Вход</h3>
                    <div class="box">
                        <form @submit="onSubmit">
                            <div class="field">
                                <div class="control">
                                    <the-mask type="tel" class="input is-large" placeholder="+7 (921) 324 53 55" v-model="phone" mask="+#(###)###-##-##" required />
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Выслать код<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                        <br>
                        <router-link to="/registration">Регистрация</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </body>
</template>

<script>


    export default {
        data() {
            return {
                phone: '',
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();
                const phone = {
                    phone: "+"+this.phone,
                }
                this.$store.commit('user/PHONE', "+"+this.phone)
                this.$store.dispatch('user/sendSMSLogin', phone)
                    .then(() => {
                        this.$router.push('login_confirm')
                    })
                    .catch((error) => {
                        // eslint-disable-next-line
                        console.error(error);
                        this.$store.commit('error/SET_ERROR', error);
                    })
            },
        }
    }
</script>

<style scoped>

</style>