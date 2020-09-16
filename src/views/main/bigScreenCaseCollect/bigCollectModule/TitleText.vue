<!--
author:雷港
time:2020-09-10
component:可视化分析采集大屏-标题组件
-->
<template>
    <div class="big-screen-title">
        <div class="title-text">
            <div class="bg-quadrangle">
                <p>{{ text }}</p>
                <div class="bg-select">
                    <p @click='openSelect'>
                        下拉框
                        <i :class='{xly_icon_down:!openFlag,xly_icon_top:openFlag}'> </i>
                    </p>
                    <transition name='zoom-in-top'>
                        <ul class="gb-select-item" v-if="isShowSelect && openFlag">
                            <li v-for="(item,index) in selectList" :key="index" @click="currOption(item)">{{ item.label }}</li>
                        </ul>
                    </transition>
                </div>
            </div>
            <div class="bg-Small-quadrangle"></div>
            <div class="bg-Small-quadrangle"></div>
            <div class="bg-Small-quadrangle"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                openFlag:false,
            }
        },
        props:{
            values:{
                required:true,
            },
            /* 文字 */
            text:{
                type:String,
                // required:true,
            },
            /* 是否开启下拉框 */
            isShowSelect:{
                type:Boolean,
            },
            /* 下拉框数据 */
            selectList:{
                type:Array,
                default:() => ([
                    {value:1,label:'test1'},
                    {value:2,label:'test2'},
                    {value:3,label:'test3'},
                    {value:4,label:'test4'},
                ]),
            },
        },

        model:{
            prop: 'values',
            event: 'change'
        },

        methods:{
            openSelect(){
                this.openFlag = !this.openFlag;
            },
            currOption(curr){
                this.openFlag = !this.openFlag;
                this.$emit('change',curr.value);
                this.$emit('on-change',curr);
            },
        },


    }
</script>

<style lang="less" scoped>
.big-screen-title{
    .title-text{
        width: 390px;
        height: 34px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        .bg-quadrangle{
            width: 318px;
	        height: 34px;
            transform:skew(-20deg);
            background-image: linear-gradient(90deg, #0572cc 0%, rgba(5, 114, 201, 0.12) 100%);
            opacity: 0.4;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p{
                transform:skew(20deg);
                font-family: MicrosoftYaHei-Bold;
                font-size: 16px;
                font-weight: normal;
                font-stretch: normal;
                color: #fff;
                width: fit-content;
                margin-left: 30px;
            }
            .bg-select p{
                font-size: 12px;
                margin-right: 20px;
                padding:4px 4px 4px 0px;
                cursor: pointer;
            }
            .gb-select-item{
                margin: 0;
                padding: 0;
                position: absolute;
                top: 38px;
                right: -30px;
                // height: 100px;
                // width: 100px;
                transform:skew(20deg);
                background-color: #00b4ff;
                border-radius: 3px;
                list-style: none;
                &>li{
                    line-height: 30px;
                    text-align: center;
                    min-width: 100px;
                     color:  #3264fd;
                    &:hover{
                        color: #fff;
                        opacity: 0.5;
                        cursor: pointer;
                        // background-color: ;

                    }
                }
            }

        }
        .bg-Small-quadrangle{
            background-color: #172544;
            width: 7px;
	        height: 33px;
            transform:skew(-20deg);
            margin-left: 10px;
        }
    }
}
</style>