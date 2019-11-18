<template>
    <body>
        <main class="page">
            <BreadCrumbs/>
            <AppProfile/>
        </main>
    </body>
</template>

<script>
    import AppProfile from "../components/AppProfile";
    import BreadCrumbs from "../components/BreadCrumbs";

    export default {
       components:{
           BreadCrumbs,
           AppProfile,
        },
    }
</script>

<style scoped>
</style>