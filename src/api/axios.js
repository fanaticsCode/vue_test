import axios from 'axios';
import Vue from 'vue'
import store from '../store/index'
// import QS from 'qs';
import { LoadingBar } from 'iview';
import { Toast } from 'vant';

console.log('11---',store);
/* 
// 环境的切换
if (process.env.NODE_ENV == 'development') {
	axios.defaults.baseURL = 'https://www.baidu.com';
} else if (process.env.NODE_ENV == 'production') {
	axios.defaults.baseURL = 'https://www.production.com';
}

// 设置请求超时
axios.defaults.timeout = 10000;

//post设置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
 */


/* 提示函數 */
let Tip = msg => {
	Toast({
		message: msg,
		duration: 2000,
		forbidClick: true,
	})
}

/**
 * 跳转登录页
 * 携带当前路由参数，在登录页面完成登录后返回当前页面
 */
let ToLogin = () => {
	router.replace({
		path: '/login',
		query: {
			redirect: router.currentRoute.fullPath,
		}
	})
}

/**
 * 请求失败后的统一处理
 * @param {Number} status 请求状态码
 */
const ErrorHandle = (status, other) => {
	switch (status) {
		//401未登陆 ，跳转到登陆页
		case 401:
			ToLogin();
			break;
		//token过期 清楚token并跳转登录页
		case 403:
			Tip('登陆过期,请重新登陆');
			localStorage.removeItem('token');
			this.$store.state.commit('loginSuccess', null);
			setTimeout(() => {
				ToLogin();
			}, 1000);
			break;
		case 404:
			Tip('请求资源不存在');
			break;
		default:
			console.log(other);
	}
}

/* 创建实例 */
const instance = axios.create({
	timeout: 1000 * 10,
	withCredentials: true // 允许携带cookie
});
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* 
	请求拦截
	每次请求前，如果存在token则在请求头中携带token(Stortge存在token就携带)
	即使有token,也可能过期,所以每次携带
*/
instance.interceptors.request.use((config) => {
	debugger;
	let time = new Date().getTime();
	if(config.method == 'get'){
		if(typeof config.params != 'undefined'){
			config.params = {...config.params,t:time}
		}
		config.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
	}
	LoadingBar.start();
	console.log(config.params);
	const token = store.state.token;
	// 如果存在就运行 后一句 吧token赋值在请求头中
	token && (config.headers.Authorization == token)
	return config;
});


/**
 * 响应拦截器
 */
instance.interceptors.response.use((res) => {
	//请求成功
	LoadingBar.finish();
	return res.status == 200 ? Promise.resolve(res.data) : Promise.reject(res)
}, (error) => {
	//请求失败
	LoadingBar.error();
	const { response } = error;
	if (response) {
		//请求已发出，但是不在2xx的范围 调错误状态码函数
		ErrorHandle(response.status, response.data.message)
		return Promise.reject(response);
	} else {
		/*
			断网情况、请求超时,更新state的network状态
			network状态在app.vue中控制这一个全局的断网提示组件的显示隐藏
			断网组件中的刷新重新获取数据
		 */
		if (!window.navigator.onLine) {  //检查网络是否连接 属性》online
			store.commot('cahngeNetwork', null);
		} else {
			return Promise.reject(error);
		}
	}
});

export default instance;