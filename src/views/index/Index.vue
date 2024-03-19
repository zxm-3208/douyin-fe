<template>
    <div class="index">
        <top-bar></top-bar>
        <video-list></video-list> 
    </div>
</template>

<script>
    import TopBar from '../../components/index/TopBar.vue'
    import VideoList from '../../components/index/VideoList.vue'
    export default{
		name:'Index',
		components:{
			TopBar,
            VideoList
			
		}
	}
</script>

<style scoped>
	.index{
		height: 100%;
		/* background: #000000; */
	}
</style>