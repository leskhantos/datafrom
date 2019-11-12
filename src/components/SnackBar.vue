<template>
    <div :class="show" :style="'background-color: '+color" id="snackbar">
        {{error}}
        {{ok}}
    </div>
</template>

<script>
    export default {
        name: "Snackbar",
        data() {
            return {
                show: '',
                color: ''
            }
        },
        computed: {
            error() {
                return this.$store.getters['error/getError']
            },
            ok() {
                return this.$store.getters['error/getOk']
            }
        },
        watch: {
            error: {
                immediate: true,
                handler(val) {
                    if (val != null) {
                        this.show = ''
                        this.show = 'show'
                        this.color = 'rgba(178, 73, 62, 0.86)'
                    }
                }
            },
            ok: {
                immediate: true,
                handler(val) {
                    if (val != null) {
                        this.show = ''
                        this.show = 'show'
                        this.color = 'rgba(62, 159, 178, 0.86)'
                    }
                }
            },
            show: {
                immediate: true,
                handler(val) {
                    if (val !== '') {
                        let $this = this
                        setTimeout(function(){
                            $this.show = ''
                            $this.$store.commit('error/CLEAR_ALL')
                        }, 3000);
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #snackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        padding: 21px;
        position: fixed;
        font-size: medium;
        z-index: 1000;
        right: 2%;
        top: 30px;
    }

    .show {
        visibility: visible !important;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
    }

    @-webkit-keyframes fadein {
        from {top: 0; opacity: 0;}
        to {top: 30px; opacity: 1;}
    }

    @keyframes fadein {
        from {top: 0; opacity: 0;}
        to {top: 30px; opacity: 1;}
    }

    @-webkit-keyframes fadeout {
        from {top: 30px; opacity: 1;}
        to {top: 0; opacity: 0;}
    }

    @keyframes fadeout {
        from {top: 30px; opacity: 1;}
        to {top: 0; opacity: 0;}
    }
</style>
