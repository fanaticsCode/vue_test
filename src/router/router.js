import Vue from 'vue'
import Router from 'vue-router'
// import { VueLoaderPlugin } from 'vue-loader';

Vue.use(Router);


// const router = new Router({
//     routes: [
//         {
//             path: '/',
//             redirect: 'list',
//         },
//         List,
//     ]
// });



// router.beforeEach((to,from,next)=>{
//     const [urls,path] = [
//         [
//             '/lsit',   //登录界面
//         ],
//         to.path
//     ];
//     console.log('---> ',urls);
//     if(urls.includes(path)){
//         let appKey = false;
//         if(path == '/' || path == '/lsit' && (!appKey)){
//             router.push({path:'/list'});
//         }else{
//             router.push({path:'/list'});
//         }
//     }

// })


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
                    path: '/father',
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
        }
    ]
});
