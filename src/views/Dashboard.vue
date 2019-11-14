<template>
    <body>
        <main class="page">
            <BreadCrumbs/>
            <AppProfile/>
            <AppModals/>
        </main>
    </body>
</template>

<script>
    import AppProfile from "../components/AppProfile";
    import AppModals from "../components/AppModals";
    import BreadCrumbs from "../components/BreadCrumbs";

    export default {
       components:{
           BreadCrumbs,
           AppProfile,
           AppModals
        },
    }
</script>

<style scoped>
</style>