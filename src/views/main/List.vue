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

	    <div id="map" style="height: 500px;width: 850px;">

		</div>

		

		<div style="hieght:500px; padding:20px; border:1px red solid;">
			<video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls width="400" height="300"></video>
			<video-player class="video-player vjs-custom-skin"
				:playsinline="true"
        		:options="playerOptions1"></video-player>
		</div>
		
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import {videoPlayer} from 'vue-video-player'
export default {
	components:{
		videoPlayer
	},
	data(){
		return {
			isShow:false,
			isAddColor: true,
			colorValue: '#f00',
			text:'',

			playerOptions: {
				fluid: true, // 播放器适应容器大小
				aspectRatio: '16:9', // 播放器宽高比
				// width: 375, // 视频宽度,数字类型或者字符串，单位为px
				// height: 360, // 视频高度数字类型或者字符串，单位为px
				// 属性设置为false则不添加节点，对应节点在页面中将不存在
				playbackRates: true, // 播放倍数[0.7, 1.0, 1.5, 2.0]
				muted: false, // 是否静音
				autoplay: false, // 是否自动播放
				loop: false, // 是否重复播放
				poster: 'http://img.hb.aicdn.com/409467ed2fa5292b83fe954a840e27cf9bbf29b489286-YnjZ67_fw658', // 视频播放前（第一帧）显示的画面url
				preload: 'auto', // 'auto':立即开始加载视频，某些设备为了节省用户宽带不会预加载;'metadata':仅加载视频的元数据，其中包括视频的持续时间和尺寸等信息。有时，元数据将通过下载几帧视频来加载;'none':不要预加载任何数据。浏览器将等待用户点击“播放”开始下载。
				notSupportedMessage: '此视频暂无法播放，请稍后再试', // 无法播放媒体源时显示的默认消息。
				sources: [{
					type: 'video/mp4',
					src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
				}],
				techOrder: ['html5'], //, 'flash'], // 设置优先使用html5播放
				textTrackDisplay: false, // 字幕
				posterImage: true, // 略缩图--poster设置的图片将失效
				errorDisplay: false, // 错误信息显示
				loadingSpinner: true, // 正在加载中的动画
				bigPlayButton: true, // 播放按钮显示
				controlBar: {
					playToggle: true, // 播放按钮
					fullscreenToggle: true, // 全屏显示
					currentTimeDisplay: true, // 已播放时长
					timeDivider: true, // 时间分隔线
					durationDisplay: true, // 视频时长
					remainingTimeDisplay: true, // 剩余播放时长
					progressControl: {
						seekBar: { // 拖动条和进度条的容器
						loadProgressBar: true, // 加载进度显示
						playProgressBar: true // 播放指针显示
						// seekHandle: function (e) {
						//   console.log(e)
						// }
						}
					}, // 进度条
					// volumeControl: { // 音量控制条
					//   volumeBar: {
					//     volumeLevel: '',
					//     // volumeHandle: function () {}
					//   }
					// },
					muteToggle: false // 隐藏静音按钮
				}
			},


			playerOptions1: {
				playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
				autoplay: false, // 如果为true,浏览器准备好时开始回放。
				muted: false, // 默认情况下将会消除任何音频。
				loop: false, // 是否视频一结束就重新开始。
				preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
				language: 'zh-CN',
				aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
				fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
				sources: [{
					type: 'video/mp4',
					src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
				}],
				poster: '', // 封面地址
				notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
				controlBar: {
					timeDivider: true, // 当前时间和持续时间的分隔符
					durationDisplay: true, // 显示持续时间
					remainingTimeDisplay: true, // 是否显示剩余时间功能
					fullscreenToggle: true // 是否显示全屏按钮
				}
			}

			
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
		},
    },

    beforeCreate() {}, //生命周期 - 创建之前
    created() {},
    beforeMount() {}, //生命周期 - 挂载之前
    mounted() {
	    // 百度地图API功能
	    var map = new BMap.Map("map");    // 创建Map实例
	    map.centerAndZoom(new BMap.Point(121.551257,38.890002), 11);  // 初始化地图,设置中心点坐标和地图级别
	    //添加地图类型控件
	    map.addControl(new BMap.MapTypeControl({
		    mapTypes:[
			    BMAP_NORMAL_MAP,
			    BMAP_HYBRID_MAP
		    ]}));
	    map.setCurrentCity("大连");          // 设置地图显示的城市 此项是必须设置的
	    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    },
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

	/deep/ .vjs-custom-skin > .video-js .vjs-time-control,
	/deep/ .vjs-custom-skin > .vjs-no-flex .vjs-time-control {
		// border: 1px red solid;
		min-width: 1em;
		padding: 0;
		margin: 0 .1em;
		text-align: center;
		display: block;
	}
}
</style>


