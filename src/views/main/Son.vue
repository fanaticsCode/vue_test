<!--
 * @Author: your name
 * @Date: 2020-08-20 21:45:33
 * @LastEditTime: 2020-09-02 20:39:25
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \cwpe:\Project_code\github_project\vue_test\src\views\main\Son.vue
-->
<template>
    <div id="template-son">

        <div class="frame">
            <!-- <ul>
                <li v-for="(item,index) in arrList" :key="index">
                    {{ item.title }}
                </li>
            </ul> -->
            <div class="frame-box">
                <p>
                    <!-- 传入给引入的组件 名字（#text）  属性=“{}”(可传方法) -->
                    <slot name="text" :testFun="testFun"></slot>
                </p>
                <span  @click="testCd">点击---子</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                test:{
                    name:'name is lei',
                    age:'20岁',
                },
                list:[],
                test1:'123',
            }
        },

        props:{
            faFun:{
                type:Function,
            },
            // arrList:{
            //     type:Array,
            // }

        },

        created() {
        },

        methods:{
            testFun(){
                this.$nextTick(()=>{
                    let dom = document.querySelector('.frame-box');
                    dom.style.display = 'none';
                });
            },
            
            //子 给 父 传递方法
            testCd(){
                this.$emit('test1',{title:'这是子组件传来的值'});
            },
        },
    }
</script>

<style lang="less" scoped>
    @color:#ccc;
    #template-son{
        border:2px @color solid;
        margin:10px 0;

        .frame-box{
            width:50px;
            height: 50px;
            border-radius: 50%;
            background-color: hsla(200,50%,50%,.5);
            p{
                text-align: center;
                line-height: 50px;
            }
        }
    }
</style>