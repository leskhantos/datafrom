<template>
    <main class="page">
        <div class="centered">
            <section class="login" style="margin: 50px 0">
                <div class="login__logo">
                    <AppLogo/>
                </div>
                <form class="form login__form" @submit="onSubmit">
                    <div class="form__wrapper">
                        <div class="input-field form__input">
                            <div class="input-field__wrapper">
                                <input class="input" type="text" placeholder="Имя" v-model="$v.fname.$model" :class="status($v.fname)" required>
                                <UserIcon/>
                            </div>
                            <p class="input-field__error-text">Имя более 20 сим.</p>
                        </div>
                        <div class="input-field form__input">
                            <div class="input-field__wrapper">
                                <input class="input" type="text" placeholder="Фамилия" v-model="$v.lname.$model" :class="status($v.lname)" required>
                                <UserIcon/>
                            </div>
                            <p class="input-field__error-text"> Фамилия более 20 сим.</p>
                        </div>
                        <div class="input-field input-field form__input">
                            <div class="input-field__wrapper">
                                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" v-model="$v.email.$model" :class="status($v.email)" required>
                                <MailIcon/>
                            </div>
                            <p class="input-field__error-text">E-mail занят</p>
                        </div>
                        <div class="input-field form__input">
                            <div class="input-field__wrapper">
                                <the-mask type="tel" placeholder="+7 (921) 324 53 55" v-model="$v.phone.$model" :class="status($v.phone)" mask="+#(###)###-##-##" required />
                            </div>
                            <p class="input-field__error-text">Укажите телефон</p>
                        </div>
                    </div>
                    <button class="button form__submit" type="submit" @click="onSubmit">Регистрация</button>
                    <div class="form__footer">
                        <p>Уже зарегистрированы</p><router-link class="form__link" to="/login">Войти</router-link>
                    </div>
                </form>
            </section>
        </div>
    </main>

</template>

<script>
    import AppLogo from "../components/AppLogo";
    import UserIcon from "../components/icons/UserIcon";
    import MailIcon from "../components/icons/MailIcon";
    import { required, minLength, email } from 'vuelidate/lib/validators'

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
        components:{
          AppLogo,
            UserIcon,
            MailIcon
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
                        this.$store.commit('error/SET_ERROR', error);
                    })
            }, status(validation) {
                return {
                    error: validation.$error,
                    dirty: validation.$dirty
                }
            }
        },
        validations: {
            phone: {
                required,
                minLength: minLength(11)
            },
            fname: {
                required,
                minLength: minLength(2),
                alpha: /^[а-яё]*$/
            },
            lname: {
                alpha: /^[а-яё]*$/
            },
            email: {
                email
            }
        }
    }
</script>

<style scoped>
    input {
        border: 1px;
        border-radius: 4px;
        background: white;
        padding: 5px 10px;
    }

    .dirty {
        border-color: #5A5;
        background: #EFE;
    }

    .dirty:focus {
        outline-color: #8E8;
    }

    .error {
        border-color: red;
        background: #FDD;
    }

    .error:focus {
        outline-color: #F99;
    }
</style>
