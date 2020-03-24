<template>
    <div id="app">
        <router-view></router-view>
        <!-- <List :option="option"></List> -->
    </div>
</template>

<script>
import List from "./views/main/List";
export default {
    components: {
        List
    },

    data() {
        return {
            option: [
                {
                    label: "蔬菜",
                    children: [
                        {
                            label: "白菜"
                        },
                        {
                            label: "花菜"
                        },
                        {
                            label: "红菜"
                        }
                    ]
                },
                {
                    label: "肉类",
                    children: [
                        {
                            label: "肥肉"
                        },
                        {
                            label: "瘦肉"
                        },
                        {
                            label: "肉肉"
                        }
                    ]
                }
            ]
        };
    },

    watch: {

    },

    

    beforeCreate() {}, //生命周期 - 创建之前
    created() {
        this.test();
    },
    beforeMount() {}, //生命周期 - 挂载之前
    mounted() {},
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    methods: {
        test(){
            this.$store.commit('SET_M_TOKEN','token123');
            console.log(this.$store.state.token);
        }
        
    },
};
</script>

<style lang="less">
#app {
    border: 1xp red solid;
}
</style>
