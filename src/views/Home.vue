<template>
    <div class="home">
        <router-view></router-view>
        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import TabBar from '../components/home/TabBar.vue';
    export default{
        name:'Home',
        components:{
            TabBar,
        }

    }
</script>