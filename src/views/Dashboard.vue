<template>
    <body>
        <AppHeader/>
        <main class="page">
            <BreadCrumbs/>
            <AppProfile/>
            <AppModals/>
        </main>
    </body>
</template>

<script>
    import AppHeader from "../components/AppHeader";
    import AppProfile from "../components/AppProfile";
    import AppModals from "../components/AppModals";
    import BreadCrumbs from "../components/BreadCrumbs";

    export default {
       components:{
           BreadCrumbs,
           AppHeader,
           AppProfile,
           AppModals
        },
    }
</script>

<style scoped>
</style>