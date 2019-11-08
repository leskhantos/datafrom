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
                            <button class="button is-block is-info is-large is-fullwidth" @click="onSubmit">Подтвердить<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "RegistrationConfirm",
        data(){
            return {
                code: ""
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault()
                let info = this.$store.getters['user/getRegistrationInfo']
                const data = {
                    phone: info.phone,
                    smsConfirmationCode: this.code,
                    fullName:{
                        firstName: info.fname,
                        lastName: info.lname,
                        middleName: info.mname
                    },
                    email: info.email
                }
                // eslint-disable-next-line no-console
                console.log(info)

                this.$store.dispatch('user/registrationConfirm', data).then(()=>{
                    this.$router.push('/login')
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