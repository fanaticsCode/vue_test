import Vue from 'vue'
import Router from 'vue-router'
// import { VueLoaderPlugin } from 'vue-loader';

Vue.use(Router);


// export default router;


/* 
------------------------------------------------------------------------
 */

// const routerOjb = require.context('', false, /\.vue$/);
// console.log(routerOjb.keys());

export default new Router({
    routes: [
        {
            path: '/',
            name: 'list',
            meta:{
                checkLogin:true,
                text:'父组件',
            },
            component: () => import('../views/main/List.vue'),
            children: [
                {
                    path: '/father123',
                    name: 'father',
                    meta: {
                        text:'这是father组件'
                    },
                    //异步加载：懒加载，在需要的时候才加载，目的是节省内存占用
                    component: () => import('../views/main/Father.vue'),
                },
                {
                    path: '/saolei',
                    name: 'saolei',
                    meta: {
                        text:'扫雷组件'
                    },
                    component: () => import('../views/main/SaoLei.vue'),
                },
                
            ],
        },
        {
            path: '/audio',
            name: 'audio',
            meta: {
                checkLogin:true,
                text:'xly音视频'
            },
            component: () => import('../views/main/audioVideo.vue'),
        },
        {
            path: '/bigScreenCollect',
            name: 'bigScreenCollect',
            meta: {
                checkLogin:true,
                text:'大屏'
            },
            // component: () => import('../views/main/bigScreenCaseCollect/bigScreenCollect.vue'),
            component: () => import('../views/main/bigScreenCaseCollect/bigScreenCollect.vue'),
        },

    ]
});
