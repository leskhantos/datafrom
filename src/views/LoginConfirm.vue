<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Введите код подтверждения</h3>
                    <div class="box">
                        <form @submit="onSubmit">
                            <div class="field">
                                <div class="control">
                                    <input type="text" class="input is-large" v-model="code" required/>
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth" @click="onSubmit">Войти<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "VueConfirm",
        data(){
            return {
                code: ""
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()
                let phone = this.$store.getters['user/getPhone']
                const info = {
                    phone: phone,
                    smsConfirmationCode: this.code
                }
                // eslint-disable-next-line no-console
                console.log(info)
                // eslint-disable-next-line no-console
                console.log(phone)

                this.$store.dispatch('user/loginConfirm', info).then(()=>{
                    this.$router.push('/')
                }).catch((error) => {
                    // eslint-disable-next-line
                    this.$store.commit('error/SET_ERROR', error);
                });
            }
        }
    }
</script>

<style scoped>

</style>