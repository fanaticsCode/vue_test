<!--
author:雷港
time:2020-09-09
component:可视化分析采集大屏
-->
<template>
    <div id="gather-fullscreen" class="wfull hfull">
        <div class="gf-header">
            <p class="gf-header-center">数据采集大屏</p>
            <div class="gf-header-right">
                <p class="gf-right-time">服务时长：
                    <span>200</span>小时
                    <span>50</span>分
                    <span>20</span>秒
                </p>
                <div :class="{fullScreen,outScreen:!isFullScreen,allScreen:isFullScreen}"  @click="fullScreen"></div>
            </div>
        </div>
        <div class="wfull hfull calcWH" style=" background-color:#000; border:1px red solid;">
            <!-- <title-text v-model="value111" text="test" isShowSelect @on-change="changeData"></title-text> -->
            <video id="myvideo"
                ref="video"
                class=''
                autoplay="autoplay"
                loop="loop"
                controls
                style='object-fit: fill;'>
                <source :src="imgSrc" type="video/mp4" />
            </video>
        </div>
    </div>
</template>

<script>
    import {TitleText} from './bigCollectModule';
    import elementResizeDetectorMaker from 'element-resize-detector'
    export default {
        components:{
            TitleText,
        },
        data(){
            return{
                imgSrc:'./bigScreenCollect1.mp4',
                // imgSrc:'../../../../public/bigScreenCollect.mp4',
                isFullScreen:false,
                value111:'',
                observer:null,
            }
        },


        computed:{
            fullScreenIcon(){
                return {
                    background: `url(./${this.isFullScreen ? 'outScreen.png':'allScreen.png'}) center center no-repeat`,
                }
            },
        },

        created(){
            this.calcVideo();
        },

        beforeDestroyed () {
            if (this.observer) {
            this.observer.disconnect()
            this.observer.takeRecords()
            this.observer = null
            }
        },



        methods:{
            /* 控制全屏与退出全屏 */
            fullScreen(){
                this.$nextTick(()=>{
                    let element = document.getElementById("gather-fullscreen");
                    if (this.isFullScreen) {
                        if (document.exitFullscreen) {
                            document.exitFullscreen();
                        } else if (document.webkitCancelFullScreen) {
                            document.webkitCancelFullScreen();
                        } else if (document.mozCancelFullScreen) {
                            document.mozCancelFullScreen();
                        } else if (document.msExitFullscreen) {
                            document.msExitFullscreen();
                        }
                    } else {
                        if (element.requestFullscreen) {
                            element.requestFullscreen();
                        } else if (element.webkitRequestFullScreen) {
                            element.webkitRequestFullScreen();
                        } else if (element.mozRequestFullScreen) {
                            element.mozRequestFullScreen();
                        } else if (element.msRequestFullscreen) {
                            // IE11
                            element.msRequestFullscreen();
                        }
                    }
                    this.isFullScreen = !this.isFullScreen;
                })
            },


            calcVideo(){
                this.$nextTick(()=>{
                    // window.addEventListener('resize', function () {
                    //     myChart.resize();
                    // });
                    // debugger;
                    // let dom = document.querySelector('.calcWH');
                    // let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                    // this.observer = new MutationObserver(function (mutationList) {
                    //     for (let mutation of mutationList) {
                    //         console.log(mutation)
                    //     }
                    // });
                    // this.observer.observe(dom,{ attributes: true, attributeFilter: ['style'], attributeOldValue: true });
                    // debugger;
                    // let h = this.$refs.video.offsetHeight;
                    // let w = this.$refs.video.offsetWidth;
                    // this.$refs.video.style.marginLeft = `-${w/2}px`;
                    let _this = this;
                    const erd = elementResizeDetectorMaker();
                    erd.listenTo(document.querySelector('.calcWH'),(element)=>{
                        _this.$nextTick(()=>{
                            _this.$refs.video.style.marginLeft = `-${_this.$refs.video.offsetWidth/2}px`;
                            console.log(element)
                        })
                    })
                })
            },

            changeData(obj){
                console.log(this.value111 , obj)
            },
        }
    }
</script>

<style lang="less" scoped>
.wfull{
    width:100vw;
}
.hfull{
    height:100vh;
}
#gather-fullscreen{
    box-sizing: border-box;
    
    // background-color: rgba(0, 10, 42, 0.9);
    // background-color: rgba(0, 10, 42, 0.9);
    /* 页头区域 */
    .gf-header{
        height: 80px;
        width: 100%;
        background: url(./gather_header.png) center center no-repeat;
        background-size: 100% 100%;
        background-color: #3264ff;
        background-color: rgba(0,10,42,0.9);
        position: relative;
        z-index:1000;
        .gf-header-center{
            width: fit-content;
            position: absolute;
            top:0;
            right: 0;
            left: 10px;
            bottom: 0;
            margin: auto;
            line-height: 80px;
            font-family: AlibabaPuHuiTiB;
            font-size: 34px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 3px;
            color: #ffffff;
            text-shadow: 0px 2px 10px #fff;

        }
        .gf-header-right{
            position: absolute;
            right: 30px;
            top: 30px;
            color: #fff;
            display: flex;
            align-items: center;
            .gf-right-time{
                width: 230px;
                font-family: DIN-Bold;
	            font-size: 16px;
                color: #516674;
                span{
                    font-family: MicrosoftYaHei;
                    font-weight: normal;
                    letter-spacing: 0px;
                    color: #ffffff;
                }
            }
            .fullScreen{
                height: 20px;
                width: 20px;
                margin-left: 30px;
                font-family: DIN-Bold;
                cursor: pointer;
            }
            .fullScreen.outScreen{
                background: url(./allScreen.png) center center no-repeat;
                background-size: 100% 100%;
            }
            .fullScreen.allScreen{
                background: url(./outScreen.png) center center no-repeat;
                background-size: 100% 100%;
            }

        }
    }

    /* 播放器 */
    #myvideo{
        border: 1px red solid;
        position: absolute;
        width: 75%;
        left: 50%;
        bottom:7%;
        margin-left: -37px;
        // margin-top: -15%;
        // min-width: 100%;
        // min-height: 100%;
        // height: auto;
        // width: auto;
        // z-index: 1;
    }
}
</style>