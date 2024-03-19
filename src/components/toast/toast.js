// 其中定义了弹出的内容和持续显示的时间 组件定义完成后还需要实例化组件
import Vue from 'vue'
// 引入静态组件
import toast from './Toast.vue'
// 返回一个 扩展实例构造器
let Toast=Vue.extend(toast)
let  instance
// 时间设置一个定时器
let timer=null
// 设置参数
// 定义弹出组件的函数，接收2个参数，要显示的文本和显示时间
let toastMsg=(options)=>{
	if(!instance){
		// 创建实例
		instance=new Toast()
		// 动态的把toast.vue挂载到body上
		document.body.append(instance.$mount().$el)
	}
	// 默认时间
	instance.duration=2000;
	if(typeof options==='string'){
		instance.message=options
	}else if(typeof options==='object'){
		instance.type=options.type
		instance.message=options.message
		instance.duration=options.duration||2000
	}else{
		return
	}
	instance.show=true
	timer=setTimeout(()=>{
		instance.show=false
		clearTimeout(timer)
		timer=null
	},instance.duration)
}
export default toastMsg




