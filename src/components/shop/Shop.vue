<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import appHeader from './subcom/Header.vue'
    import appFooter from './subcom/Footer.vue'
    export default {
        components:{
            appHeader,
            appFooter
        }
    }
</script>

<style scoped>

</style>