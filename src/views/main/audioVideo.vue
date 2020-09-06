<template>
    <div>
        sdfg
        <div style=" padding:20px; border:1px red solid;">
			<!-- <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls width="400" height="300"></video> -->
			<video-player class="vjs-big-play-centered vjs-custom-skin "
				:playsinline="true"
        		:options="playerOptions1"></video-player>
		</div>
    </div>
</template>

<script>
console.log(123123123)
    import 'video.js/dist/video-js.css'
    import {videoPlayer} from 'vue-video-player'
    export default {
        components:{
            videoPlayer,
        },
        data(){
            return {
                playerOptions1: {
                    width: '500px', // 视频宽度,数字类型或者字符串，单位为px
                    // height: '360px', // 视频高度数字类型或者字符串，单位为px
                    // width: document.documentElement.clientWidth, //播放器宽度
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
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
                        timeDivider: '1', // 当前时间和持续时间的分隔符
                        durationDisplay: true, // 显示持续时间
                        remainingTimeDisplay: true, // 是否显示剩余时间功能
                        fullscreenToggle: true, // 是否显示全屏按钮
                        volumeControl:true,  //音量进度条
                    }
                },

                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: 'video/mp4',
                        src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
                    }],
                    poster: "../../static/images/test.jpg", //你的封面地址
                    width: document.documentElement.clientWidth, //播放器宽度
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: true,
                        fullscreenToggle: true  //全屏按钮
                    }
                }
            }

        },

        
    }
</script>

<style lang="less" scoped>
.vjs-big-play-centered {
    // max-width: 70%;
}

</style>