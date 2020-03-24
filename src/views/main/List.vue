<template>
    <div id="template-list">
        <h1></h1>
        <div class="cascader">
            <div class="title" @click="open"></div>
            <div class="content" v-if="isShow">内容</div>
        </div>

		<router-link to="/SaoLei" style="margin-right:30px;">扫雷</router-link>
		<router-link to="/Father">father</router-link>

		<input type="button" value="点我" @click="skips">
		<div id="box3" :style="{width:'100px',height:'100px',background:'blue',position:'absolute',right :0,top:0}" v-drag></div>
		<div class="content-box">
			<p>{{ text }}</p>
			<router-view></router-view>
		</div>



		
    </div>
</template>

<script>
export default {
	data(){
		return {
			isShow:false,
			isAddColor: true,
			colorValue: '#f00',
			text:'',
		}
	},
	 watch:{
		/* 监听路由变化而进行对应操作 */
    	$route(to,from) {
			this.text = to.meta.text;
		},
		// immediate:true,
    },
	/* 
		当前组件使用 （指令是一个方法）
		bind ,inserted,update,componentUpdate,unbind  组件的生命周期
	*/
	directive:{
		// clickoutside:{
		// 	inserted(el,bindings){
		// 		document.addEventListener('click',(e)=>{
		// 			console.log(e);
		// 			if(e.target || e.contains(el.target)){

		// 			}
		// 		});
				
		// 	},
		// },

	


	},

	methods: {
		/* 
			思路：可以在全局document上注册事件 当点击校验是否在cascader中 

			希望对某个元素进行一系列操作 可以封装自定义指令
		*/
		skips(){
			this.$router.push({path:'/father'});
		},

		close(){
			this.isShow = true;
		},

		open(){
			this.isShow = !this.isShow;
			console.log(this.isShow);
		},
    },

    beforeCreate() {}, //生命周期 - 创建之前
    created() {},
    beforeMount() {}, //生命周期 - 挂载之前
    mounted() {},
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style lang="less" scoped>
#template-list {
    .title {
        width: 200px;
        height: 100px;
        border: 1px #333 solid;
        margin: 0 auto;
	}
	.content{
		text-align: center;
		color:red;
		font-size: 16px;
	}

	.content-box{
		width:500px;
		height: 500px;
		border:4px #eee solid;
	}
}
</style>


