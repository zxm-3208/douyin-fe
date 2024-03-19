<!-- index组件的顶部导航栏组件 -->


<template>
    <div class="top-bar">
        <div class="left">
			<span class="iconfont icon-live"></span>
		</div>

        <div class="middle">
			<div class="item" @click="changeTop(0)">
				<router-link to="/guanzhu" tag="span" :class="topIndex==0?'active':'' ">
					关注
				</router-link>
			</div>
			<div class="item" @click="changeTop(1)">
				<router-link to="/tuijian" tag="span" :class="topIndex==1?'active':'' ">
					推荐
				</router-link>
			</div>
		</div>




        <div class="right">
			<span class="iconfont icon-sousuo"></span>
		</div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                topIndex:1
            }
        },
        methods:{
            changeTop(index){
                this.topIndex=index;
            }
        },
    }
</script>


<style scoped>
	.top-bar{
		position: fixed;
		width: 100%;
		height: 60px;
		font-size: 18px;
		color: #CCCCCC;
		padding: 20px;
		display: flex;
		box-sizing: border-box;
		z-index: 999;
	}
	.left, .right{
		width: 30%;
	}
	.right{
		text-align: right;
	}
	.iconfont{
		font-size:24px;	
	}
	.middle{
		width: 40%;
		display: flex;
		justify-items: center;
	}
	.middle .item{
		flex:1;
		text-align: center;
	}
	.middle .item span{
		padding: 5px 0;
	}
	.middle .item .active{
		color:#FFFFFF;
		border-bottom: 2px solid #ffffff;
	}
	
</style>
