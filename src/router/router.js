import Layout from '../layout/index'
import Home from '../views/home/index'
import App from '../App'
import Login from '../views/login/index'
import Test from '../views/home/children/test'
import Test2 from '../views/home/children/test2'
import F404 from '../views/other/404'
const routerLogin = [
    {
        path: '/',
        component: App,
        render:"/login",
        children:[
            {
                path: '/login',
                title:"登录",
                component: Login,
            },
            {
                path: '/404',
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
        children:[
            {
                path: '/index',
                component:Layout ,
                disabled:true,
                render:"/index/home",
                children: [
                    {
                        path: '/index/home',
                        title:"首页",
                        component: Home,
                        render:"/index/home/test",
                        children: [
                            {
                                path: '/index/home/test',
                                title:"test",
                                component: Test,
                            },
                            {
                                path: '/index/home/test2',
                                title:"test2",
                                component: Test2,
                            }
                        ]
                    },
                    
                ]
            },
            {
                path: '/login',
                title:"登录",
                component: Login,
            },
            {
                path: '/404',
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