import Layout from '@/layout/index'
import Home from '@/views/home/index'
import App from '@/App'
import Login from '@/views/login/index'
import F404 from '@/views/other/404'
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
                        title:"仪表盘",
                        url:"views/home/index",
                        component: Home,
                        icon:"icon-facebook",
                    },
                    {
                        path: '/index/checkClient',
                        title:"查客户",
                        url:"views/checkClient/index",
                        component: require('@/views/checkClient/index').default,
                        icon:"icon-facebook",
                    },
                    {
                        path: '/index/clientAdmins',
                        title:"客户管理",
                        url:"views/clientAdmin/index",
                        component: require('@/views/clientAdmin/index').default,
                        render:"/index/clientAdmins/clientAdmin",
                        icon:"icon-facebook",
                        children: [
                            {
                                path: '/index/clientAdmins/clientAdmin',
                                title:"客户管理",
                                url:"views/clientAdmin/clientAdmin",
                                component: require('@/views/clientAdmin/clientAdmin').default,
                                icon:"icon-facebook",
                            },
                            {
                                path: '/index/clientAdmins/signClient',
                                title:"签单客户",
                                url:"views/clientAdmin/signClient",
                                component: require('@/views/clientAdmin/signClient').default,
                                icon:"icon-facebook",
                            },
                            {
                                path: '/index/clientAdmins/publicClient',
                                title:"公海客户",
                                url:"views/clientAdmin/publicClient",
                                component: require('@/views/clientAdmin/publicClient').default,
                                icon:"icon-facebook",
                            },
                            {
                                path: '/index/clientAdmins/warning',
                                title:"到期预警",
                                url:"views/clientAdmin/warning",
                                component: require('@/views/clientAdmin/warning').default,
                                icon:"icon-facebook",
                            }
                        ]
                    },
                    {
                        path: '/index/salesTools',
                        title:"销售工具",
                        url:"views/salesTools/index",
                        component: require('@/views/salesTools/index').default,
                        icon:"icon-facebook",
                    },
                    {
                        path: '/index/clientData',
                        title:"客户数据",
                        url:"views/clientData/index",
                        component: require('@/views/clientData/index').default,
                        icon:"icon-facebook",
                    },
                    {
                        path: '/index/saleData',
                        title:"销售数据",
                        url:"views/saleData/index",
                        component: require('@/views/saleData/index').default,
                        icon:"icon-facebook",
                    },
                    {
                        path: '/index/daily',
                        title:"日常办公",
                        url:"views/daily/index",
                        component: require('@/views/daily/index').default,
                        icon:"icon-facebook",
                    },
                    {
                        path: '/index/systemSet',
                        title:"系统设置",
                        url:"views/systemSet/index",
                        component: require('@/views/systemSet/index').default,
                        icon:"icon-facebook",
                    }
                    
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