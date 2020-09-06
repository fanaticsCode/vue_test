<template>
    <div id="app">
        <router-view></router-view>
        <!-- <List :option="option"></List> -->
    </div>
</template>

<script>

export default {
    components: {
      
    },

    data() {
        return {
            
        };
    },

    watch: {

    },

    

    beforeCreate() {}, //生命周期 - 创建之前
    created() {
        this.test();
    },
    beforeMount() {}, //生命周期 - 挂载之前
    mounted() {

    },
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    methods: {
        test(){
            // this.$store.commit('SET_M_TOKEN','token123');
            // console.log(this.$store.state.token);
        },

        
    },
};
</script>

<style lang="less">
#app {
    border: 1xp red solid;
    #map{
        height: 500px;
        width: 800px;
        border: 1px red solid;
    }
}
</style>
