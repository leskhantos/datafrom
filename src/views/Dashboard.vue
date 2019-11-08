<template>
    <body>
        <AppHeader/>
        <main class="page">
            <section class="breadcrumbs">
                <ul class="breadcrumbs__list">
                    <li class="breadcrumbs__item"><a class="breadcrumbs__link" href="/">Личный кабинет</a></li>
                </ul>
            </section>
            <section class="grid">
            <AppProfile/>
            </section>
            <AppModals/>
        </main>

    </body>
</template>

<script>
    import AppHeader from "../components/AppHeader";
    import AppProfile from "../components/AppProfile";
    import AppModals from "../components/AppModals"

    export default {
       components:{
           AppHeader,
           AppProfile,
           AppModals
        },
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>