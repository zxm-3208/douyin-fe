<template>
	<div class="edit">
		<myheader title="编辑资料" hasLeft="true" rightTxt="false" @changeBack="toBack"></myheader>
		<div class="edit-wrap">
			<div class="ava-box">
				<div class="avatar">
					<img src="../../../public/images/head.jpg" alt="">
					<span class="iconfont icon-xiangji"></span>
					<input type="file">
				</div>
				<p>点击更换头像</p>
			</div>
			<div class="edit-box">
				<div class="edit-item">
					<span class="label">名字</span>
					<span class="label">名字
						<span class="iconfont icon-arrow-right"></span>
					</span>
				</div>
				<div class="edit-item">
					<span class="label">抖音号</span>
					<span class="label">1234546789
						<span class="iconfont icon-arrow-right"></span>
					</span>
				</div>
				<div class="edit-item">
					<span class="label">简介</span>
					<span class="label">失败是成功之母
						<span class="iconfont icon-arrow-right"></span>
					</span>
				</div>
				<div class="edit-item">
					<span class="label">学校</span>
					<span class="label">点击设置
						<span class="iconfont icon-arrow-right"></span>
					</span>
				</div>
				<div class="edit-item">
					<span class="label">性别</span>
					<span class="label">女
						<span class="iconfont icon-arrow-right"></span>
					</span>
				</div>
				<div class="edit-item">
					<span class="label">生日</span>
					<span class="label">1991-1-1
						<span class="iconfont icon-arrow-right"></span>
					</span>
				</div>
				<div class="edit-item">
					<span class="label">地区</span>
					<span class="label">中国 北京
						<span class="iconfont icon-arrow-right"></span>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Myheader from '../../components/header/Myheader.vue'
	export default{
		name:'Edit',
		components:{
			Myheader
		},
		methods:{
			toBack(){
				this.$router.push('/me')
			}
		}
	}
</script>
<style scoped>
	.edit{
		background: #101821;
		height: 100vh;
	}
	.edit-wrap{
		padding: 0 10px;
		box-sizing: border-box;
	}
	.ava-box{
		color: #cccccc;
		text-align: center;
		padding: 20px;
	}
	.avatar{position:relative;}
	.avatar img{
		height: 100px;
		width: 100px;
		border-radius:50px;
		margin-bottom: 16px;
		opacity: .6;
	}
	.avatar .iconfont{
		position: absolute;
		left: 50%;
		top: 40%;
		transform:translate(-50%,-50%) ;
		font-size: 26px;
		color: #FFFFFF;
	}
	.avatar input{
		position: absolute;
		left: 50%;
		top:40%;
		width: 50%;
		transform:translate(-50%,-50%);
		opacity:0;
	}
	.edit-box{
		border-top: 1px solid #292831;
		color:#cccccc;
	}
	.edit-item{
		display: flex;
		justify-content: space-between;
		line-height: 55px;
	}
	.edit-item .label{
		color: #FFFFFF;
	}
	.edit-item .iconfont{
		margin-right: 10px;
	}
</style>
