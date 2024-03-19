<!-- 密码登陆组件

在大多数的网站上，输入手机和密码时，判断输入的内容是否符合要求或者是否为空，将弹出一个消息来说明。

在本项目中，自定义一个弹出组件，在components文件夹下创建toast文件夹，然后在toast文件夹下创建Toast.vue组件，在这个组件中设计了弹出消息的一些样式 -->

<template>
	<div class="sign">
		<div class="sign-header">
			<router-link to="/sign" tag="span" class="iconfont icon-jiantou3"></router-link>
			<span>帮助</span>
		</div>
		<div class="sign-content">
			<div class="des">
				<h2>手机号登录</h2>
			</div>
			<div class="sign-box">
				<div class="sele">
					<select v-model="telErea" class="sele-controll">
						<option value="">+86</option>
					</select>
				</div>

				<div class="inp">
					<input @keyup="loginAction" v-model="phone" type="text" class="inp-controll" placeholder="请输入手机号" />
				</div>
				
			</div>
			
			<div class="sign-box">
				<div class="inp">
					<input @keyup="loginAction" v-model="password" type="password" class="inp-controll" placeholder="请输入密码" />
				</div>
			</div>
			
			<div class="not-sign">
				<p>登录即表明同意<a href="">抖音协议</a>和<a href="">隐私协议</a></p>
			</div>
			<div class="code-btn">
				<button @click="loginAction" :disabled="disabled" :class="[btnBg?'active':'']">登录</button>
			</div>
			<div class="other">
				<span>忘记了？<a href="">登录密码</a></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"Tbsign",
		data(){
			return{
				telErea:'',
				password:'',
				disabled:true,
				btnBg:false,
				phone:''
			}
		},
		methods:{
			loginAction(){
				var reg=/^1[345789]{1}\d{9}$/;
				if(this.phone==""){	
					//调用自定义弹出组件
					this.$toast('手机号不能为空')
				}else if(!reg.test(this.phone)){
					this.$toast({
						message:"请填写正确的手机号码",
						type:"error",
						duration:3000,
					})
				}else if(this.password==""){
					this.$toast({
						message:"密码不能为空",
						type:"error",
						duration:3000,
					})
					return
				}else{
					this.disabled=false;
					this.btnBg=true;	
				}
				// 请求登录接口
				if(this.password==123456){
					this.$router.push("/me")
				}
			}
		}
	}
</script>
<style scoped>
	.sign{
		padding: 30px;
	}
	.sign-header{
		display: flex;
		justify-content:space-between;
	}
	.sign-header .iconfont{
		font-size: 25px;
	}
	.sign-content{
		padding: 40px 10px;
	}
	.des{
		margin-bottom: 30px;
	}
	.des h2{
		font-size:24px;
		font-weight: bold;
		color: #000000;
	}
	.des p{
		line-height:50px;
		color: #666;
		
	}
	.des,.not-sign p a{
		color: #628db8;
	}
	.sign-box{
		display: flex;
		height: 50px;
		align-items: center;
		background-color: #f9f9f9;
		margin-top: 12px;
	}
	.sele-controll{
		background-color: #f9f9f9;
		height: 36px;
		font-weight: bold;
		margin-left:5px;
		border: none;
		outline: none;
	}
	.inp-controll{
		background-color: #f9f9f9;
		height: 36px;
		margin-left:10px;
		border: none;
		width: 90%;
		outline: none;
	}
	input{
		caret-color: #fe2c55;
	}
	input::-webkit-input-placeholder{
		color:#666;
	}
	.not-sign p{
		color: #666;
		font-size: 14px;
		margin-top:10 ;
	}
	.code-btn button{
		margin: 20px 0;
		width: 100%;
		padding: 15px 0;
		border: none;
		color: #f9f9f9;
	}
	.code-btn .active{
		color:#fff;
		background-color: #FE2C55;
	}
	.other{
		display: flex;
		justify-content: space-between;
	}
	.other a{
		color: #628db8;
	}
</style>
