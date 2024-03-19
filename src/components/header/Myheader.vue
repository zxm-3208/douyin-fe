<template>
	<div class="myHeader">
		<div class="back" v-if="hasLeft" @click="goBack">
			<span class="iconfont icon-jiantou3"></span>
		</div>
		
		<div class=""><span>{{title}}</span></div>
		<div class="right" v-if="hasRight"><span>{{rightTxt}}</span></div>
	</div>
</template>
<script>
	export default{
		name:"Myheader",
		props:{
			title:{
				type:String,
				required:true
			},
			rightTxt:{
				type:String,
				required:true
			},
			hasRight:{
				type:String,
				required:false
			},
			hasLeft:{
				type:String,
				required:false
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			goBack(){
				// 触发父组件的方法
				this.$emit('changeBack')
			}
		}
	}
</script>
<style scoped>
	.myHeader{
		height: 48px;
		width: 100%;
		line-height: 48px;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid #292831;
		background-color: #101821;
		color: #eeeeee;
		position: relative;
	}
	.back{
		position: absolute;
		left: 10px;
	}
	.right{
		position: absolute;
		right: 10px;
	}
</style>
