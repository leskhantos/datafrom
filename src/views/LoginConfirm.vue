<template>
    <main class="page">
        <div class="centered" v-if="!isMobile">
            <section class="login" style="margin: 50px 0">
                <div class="login__logo"><img src="@/assets/images/png/mail.png" alt="logo"></div>
                <form class="form login__form" @submit="onSubmit">
                    <div class="form__recovery">
                        <p>Введите код СМС</p>
                        <div class="form__recovery-inputs">
                            <div class="form__recovery-input">
                                <input type="text" id="num1" v-model="num1" maxlength="1" v-on:keyup="getFocus('num2')">
                            </div>
                            <div class="form__recovery-input">
                                <input type="text" ref="num2" id="num2" v-model="num2" maxlength="1" v-on:keyup="getFocus('num3')">
                            </div>
                            <div class="form__recovery-input">
                                <input type="text" id="num3" v-model="num3" maxlength="1" v-on:keyup="getFocus('num4')">
                            </div>
                            <div class="form__recovery-input">
                                <input type="text" id="num4" v-model="num4" maxlength="1" v-on:keyup="getFocus('num5')">
                            </div>
                            <div class="form__recovery-input">
                                <input type="text" id="num5" v-model="num5" maxlength="1" v-on:keyup="getFocus('num6')">
                            </div>
                            <div class="form__recovery-input">
                                <input type="text" id="num6" v-model="num6" maxlength="1" v-on:keyup="onSubmit">
                            </div>
                        </div>
                    </div>
                    <div class="form__footer">
                        <p>Код действителен в течении 10 минут</p><a class="form__link" href="">Отправить код еще раз</a>
                    </div>
                </form>
            </section>
        </div>
        <div class="login" v-else>
            <div class="login__logo"><img src="@/assets/images/png/mail.png" alt="logo"></div>
            <form class="form login__form" @submit="onSubmit">
                <div class="form__recovery">
                    <p>Введите код<br> отправленный в СМС</p>
                    <div class="form__recovery-inputs">
                        <div class="form__recovery-input">
                            <input type="text" id="mob1" v-model="num1" maxlength="1" v-on:keyup="getFocus('mob2')">
                        </div>
                        <div class="form__recovery-input">
                            <input type="text" ref="num2" id="mob2" v-model="num2" maxlength="1" v-on:keyup="getFocus('mob3')">
                        </div>
                        <div class="form__recovery-input">
                            <input type="text" id="mob3" v-model="num3" maxlength="1" v-on:keyup="getFocus('mob4')">
                        </div>
                        <div class="form__recovery-input">
                            <input type="text" id="mob4" v-model="num4" maxlength="1" v-on:keyup="getFocus('mob5')">
                        </div>
                        <div class="form__recovery-input">
                            <input type="text" id="mob5" v-model="num5" maxlength="1" v-on:keyup="getFocus('mob6')">
                        </div>
                        <div class="form__recovery-input">
                            <input type="text" id="mob6" v-model="num6" maxlength="1" v-on:keyup="onSubmit">
                        </div>
                    </div>
                </div>
                <div class="form__footer">
                    <p>Код действителен в течении 10 минут</p><a class="form__link" href="">Отправить код еще раз</a>
                </div>
            </form>
        </div>

    </main>


</template>

<script>
    import { isMobile } from 'mobile-device-detect';

    export default {
        name: "LoginConfirm",
        data(){
            return {
                num1:"",
                num2:"",
                num3:"",
                num4:"",
                num5:"",
                num6:""
            }
        },
        methods: {
            getFocus(id) {
                document.getElementById(id).focus();
            },
            onSubmit(e) {
                e.preventDefault()
                let phone = this.$store.getters['user/getPhone']
                let code = this.num1+this.num2+this.num3+this.num4+this.num5+this.num6
                const info = {
                    phone: phone,
                    smsConfirmationCode: code
                }
                this.$store.dispatch('user/loginConfirm', info).then(()=>{
                    this.$router.push('/')
                }).catch((error) => {
                    this.$store.commit('error/SET_ERROR', error);
                });
            }
        },
        computed:{
            isMobile(){
                return isMobile;
            }
        },
    }
</script>

<style scoped>

</style>