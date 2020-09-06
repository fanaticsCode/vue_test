/*
 * @Author: your name
 * @Date: 2020-08-20 21:45:33
 * @LastEditTime: 2020-09-02 21:18:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \cwpe:\Project_code\github_project\vue_test\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
/*api引入*/
import ApiList from './api/index'
/*iview引入*/
import iView from 'iview';
import 'iview/dist/styles/iview.css';
/*vant引入*/
import Vant from 'vant';
import 'vant/lib/index.css';
/*引入百度地图*/
import BaiduMap from 'vue-baidu-map';

Vue.config.productionTip = false;
Vue.prototype.$api = ApiList;

Vue.use(iView);
Vue.use(Vant);
console.log(router);
/*配置地图的ke*/
Vue.use(BaiduMap,{
	ak:'D9wpuQ5c9nEEBoAavqqVyjMdyjBS18PI',
});
/* 测试-test分支 */

/* 自定义指令 */
Vue.directive('drag', {
	inserted: function (el) {
		/* ------------------------------------------------ */
		let oDiv = el;   //当前元素
		oDiv.onmousedown = function (e) {
			e.preventDefault();
			let bw = document.body.clientWidth;
			let bh = document.body.clientHeight;
			//鼠标按下，计算当前元素距离可视区的距离
			let disX = e.clientX - oDiv.offsetLeft;
			let disY = e.clientY - oDiv.offsetTop;
			// 计算两边坐标
			document.onmousemove = function (e) {
				let l = 0, t = 0;
				// 拖动边界
				if (e.clientX >= bw) {
					l = bw - disX;
				} else if (e.clientX <= 0) {
					{
						l = 0 - disX;
					}
				} else {
					l = e.clientX - disX;
				}
				if (e.clientY >= bh) {
					t = bh - disY;
				} else if (e.clientY <= 0) {
					t = 0 - disY;
				}
				else {
					t = e.clientY - disY;
				}
				//移动当前元素
				oDiv.style.left = l + 'px';
				oDiv.style.top = t + 'px';
			};
			// 鼠标停止移动时，事件移除
			document.onmouseup = function (e) {
				document.onmousemove = null;
				document.onmouseup = null;
			};
		};
	}
});



/* 全局路由钩子*/
router.beforeEach((to,from,next)=>{
	// console.log('to',to);
	// console.log('from',from);
	// debugger;
	/* 判断路由是否登录 */
	if(to.matched.some((item)=> item.meta.checkLogin )){
		
		next();
	}
	// next();
})


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');


