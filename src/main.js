import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import ApiList from './api/index'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Vant from 'vant';
import 'vant/lib/index.css';


Vue.config.productionTip = false;
Vue.prototype.$api = ApiList;

Vue.use(iView);
Vue.use(Vant);



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



/* 
	全局路由钩子
*/
router.beforeEach((to,from,next)=>{
	console.log('to',to);
	console.log('from',from);
	if(to.matched.some((item)=> item.meta.checkLogin )){
		next();
	}
})


new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');


