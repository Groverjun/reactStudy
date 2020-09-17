import Layout from '../layout/index'
import Home from '../views/home/index'
import App from '../App'
import Login from '../views/login/index'
import Test from '../views/home/children/test'
import Test2 from '../views/home/children/test2'
const router = [
    {
        path: '/',
        component: App,
        children:[
            {
                path: '/login',
                title:"登录",
                redirect:"/login",
                component: Login,
            },
            {
                path: '/index',
                component:Layout ,
                redirect:"/index/home",
                children: [
                    {
                        path: '/index/home',
                        title:"首页",
                        component: Home,
                        redirect:"/index/home/test",
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
            }
        ]
    },
   
    // {
    //     path: '/',
    //     component:Layout ,
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
    
];
export {router}