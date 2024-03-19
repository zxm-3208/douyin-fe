
<template>
	<div class="follow">
		<!-- 使用Myheader组件 -->
		<Myheader title="同城" rightTxt="false"></Myheader>


		<div class="vedio">
			<div class="son">
				<img src="../../../public/images/001.jpg" alt="">
				<div>#秋天的景色适合去旅游</div>
			</div>
			<div class="son1">
				<img src="../../../public/images/002.jpg" alt="">
				<div>#埃菲尔铁塔签到#哈哈哈 到此一游</div>
			</div>
			<div class="son">
				<img src="../../../public/images/003.jpg" alt="">
				<div>#我的家乡美美哒</div>
			</div>
			<div class="son1">
				<img src="../../../public/images/004.jpg" alt="">
				<div>#哈哈 第一次种花</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	//引入Myheader组件
	import Myheader from '../../components/header/Myheader.vue'
	export default{
		name:"",
		components:{
			Myheader  //注册Myheader组件
		}
	}
</script>
<style scoped>
	.vedio{
		width:100%;
		background-color: #101821;
		color: #FFFFFF;
		overflow:hidden;
		padding-bottom: 60px;
	}
	.son{
		float: left;
		width:49%;
	}
	.son1{
		float: right;
		width:49%;
	}
	.son, .son1 div{
		font-size: 14px;
		font-weight: 400;
		padding-bottom:15px;
	}
</style>
