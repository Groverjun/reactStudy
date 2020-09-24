import Layout from '@/layout/index'
import Home from '@/views/home/index'
import App from '@/App'
import Login from '@/views/login/index'
import Test from '../views/home/children/test'
import Test2 from '../views/home/children/test2'
import F404 from '@/views/other/404'
// console.log(App)
// console.log( require('@/App').default)
const routerLogin = [
    {
        path: '/',
        url:"App",
        // component:App,
        component: require('@/App').default,
        render:"/login",
        children:[
            {
                path: '/login',
                url:"views/login/index",
                title:"登录",
                component: Login,
            },
            {
                path: '/404',
                url:"views/other/404",
                title:"404",
                component: F404,
            },
        ]
    }    
]
const router = [
    {
        path: '/',
        component: App,
        render:"/index",
        url:"App",
        children:[
            {
                path: '/index',
                component:Layout ,
                disabled:true,
                url:"layout/index",
                render:"/index/home",
                children: [
                    {
                        path: '/index/home',
                        title:"首页",
                        url:"views/home/index",
                        component: Home,
                        render:"/index/home/test",
                        children: [
                            {
                                path: '/index/home/test',
                                title:"test",
                                url:"views/home/children/test",
                                component: Test,
                            },
                            {
                                path: '/index/home/test2',
                                url:"views/home/children/test2",
                                title:"test2",
                                component: Test2,
                            }
                        ]
                    },
                    
                ]
            },
            {
                path: '/login',
                url:"views/login/index",
                title:"登录",
                component: Login,
            },
            {
                path: '/404',
                url:"views/other/404",
                title:"404",
                component: F404,
            },
        ]
    }
    // {
    //     path: '/',
    //     component:Layout ,
    //     exact: true,
    //     children: [
    //         {
    //             path: '/home',
    //             title:"首页",
    //             component: Home,
    //             redirect:"/home/test",
    //             children: [
    //                 {
    //                     path: '/home/test',
    //                     title:"test",
    //                     component: Test,
    //                 },
    //                 {
    //                     path: '/home/test2',
    //                     title:"test2",
    //                     component: Test2,
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     path: '/login',
    //     title:"登录",
    //     redirect:"/login",
    //     component: Login,
    // },
    // {
    //     path: '/404',
    //     title:"404",
    //     component: F404,
    // },
    
];
export {router,routerLogin}