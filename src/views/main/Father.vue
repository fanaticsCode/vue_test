
<template>
    <div id="tamplate-father">
        父级{{ test.title }}
        <son :arrList="arrList" :faFun="faFun" @test1="testFun">
            <!-- <template v-slot={item,index}>
                <div style="background-color:red;" v-show="index % 2">
                    {{item.title}}{{index}}
                </div>
            </template> -->
            <template #text="{testFun}" >
                <i @click="testFun">我是斜体</i>
            </template>
        </son>

        <!-- <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button> -->
    </div>
</template>

<script>
    import son from "./Son.vue";
    export default {
        components:{
            son,
        },

        data(){
            return{
                test:'',
                arrList:[
                    {
                        title:'测试0',
                    },
                    {
                        title:'测试1',
                    },
                    {
                        title:'测试2',
                    },
                    {
                        title:'测试3',
                    },
                    {
                        title:'测试4',
                    },
                ],
            }
        },

        props:{
            
        },

        created(){
            this.getDate();
        },

        methods:{
            faFun(){
                // this.testFun();
            },

            testFun(data){
                this.test = data;
            },
            
            getDate(){
                // let params = {
                //     monopolycode: '',
                //     monopolyname: '',
                //     dscomcode: '',
                //     payeename: '',
                //     page: 1,
                //     start: 0,
                //     limit: 20,
                // }
                // this.$api.getDate(params).then(res=>{
                //     console.log(res);
                // })
            }
        },
    }
</script>

<style lang="less" scoped>

</style>