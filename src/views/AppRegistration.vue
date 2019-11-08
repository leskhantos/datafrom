<template>
    <section class="hero is-success is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Регистрация</h3>
                    <div class="box">
                        <form @submit="onSubmit">
                            <div class="field">
                                <label class="label">Телефон:</label>
                                <div class="control">
                                    <the-mask type="tel" class="input is-large" placeholder="+7 (921) 324 53 55" v-model="phone" mask="+#(###)###-##-##" required />
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Имя:</label>
                                <div class="control">
                                    <input class="input" type="text"  v-model="fname" required>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Фамилия:</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="lname" required>
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Отчество:</label>
                                <div class="control">
                                    <input class="input" type="text" v-model="mname">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Email:</label>
                                <div class="control">
                                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="email" required>
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Выслать код<i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                        <br>
                        <router-link to="/login">Вход</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AppRegistration",
        data(){
            return{
                phone:'',
                fname:'',
                lname:'',
                mname:'',
                email:''
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();
                const regInfo = {
                    phone: "+"+this.phone,
                    fname: this.fname,
                    lname: this.lname,
                    mname: this.mname,
                    email: this.email
                }
                const phone ={
                    phone: "+"+this.phone
                }
                this.$store.commit('user/REGISTRATION_INFO', regInfo)
                this.$store.dispatch('user/sendSMSRegistration',phone)
                    .then(() => {
                        this.$router.push('registration_confirm')
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