<template>
    <main class="page">
        <div class="centered" v-if="!isMobile">
            <section class="login" style="margin: 50px 0">
                <div class="login__logo">
                    <AppLogo/>
                </div>
                <form class="form login__form" @submit="onSubmit">
                    <div class="form__wrapper">
                        <div class="input-field form__input">
                            <div class="input-field__wrapper">
                                <the-mask type="tel"  placeholder="+7 (921) 324 53 55" v-model="$v.phone.$model" :class="status($v.phone)" mask="+#(###)###-##-##" required />
                            </div>
                            <p class="input-field__error-text">Укажите телефон</p>
                        </div>
                    </div>
                    <button class="button form__submit" type="submit">Войти</button>
                    <div class="form__footer">
                        <p>Ещё не зарегистрированы?</p><router-link class="form__link" to="/registration">Зарегистрироваться</router-link>
                    </div>
                </form>
            </section>

        </div>
        <div class="login" v-else>
            <div class="login__logo">
                <AppLogo/>
            </div>
            <form class="form login__form" @submit="onSubmit">
                <div class="form__wrapper">
                    <div class="input-field form__input">
                        <div class="input-field__wrapper">
                            <the-mask type="tel"  placeholder="+7 (921) 324 53 55" v-model="$v.phone.$model" :class="status($v.phone)" mask="+#(###)###-##-##" required />
                        </div>
                        <p class="input-field__error-text">Укажите телефон</p>
                    </div>
                </div>
                <button class="button form__submit" type="submit">Войти</button>
                <div class="form__footer">
                    <p>Ещё не зарегистрированы?</p><router-link class="form__link" to="/registration">Зарегистрироваться</router-link>
                </div>
            </form>
        </div>
    </main>

</template>

<script>

    import AppLogo from "../components/AppLogo";
    import { required, minLength } from 'vuelidate/lib/validators'
    import { isMobile } from 'mobile-device-detect';

    export default {
        data() {
            return {
                phone: '',
            }
        },
        components:{
            AppLogo,

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
                        this.$store.commit('error/SET_ERROR', error);
                    })
            },
            status(validation) {
                return {
                    error: validation.$error,
                    dirty: validation.$dirty
                }
            }
        },
        computed:{
            isMobile(){
                return isMobile;
            }
        },
        validations: {
            phone: {
                required,
                minLength: minLength(11)
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
