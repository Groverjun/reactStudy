import Layout from '../layout/index'
import Home from '../views/home/index'
import Login from '../views/login/index'
import Test from '../views/home/children/test'
import Test2 from '../views/home/children/test2'
const router = [
    {
        path: '/',
        component:Layout ,
        children: [
            {
                path: '/home',
                title:"首页",
                component: Home,
                redirect:"/home",
                children: [
                    {
                        path: '/home/test',
                        redirect:"/home/test",
                        title:"test",
                        component: Test,
                    },
                    {
                        path: '/home/test2',
                        redirect:"/home/test2",
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
        redirect:"/login",
        component: Login,
    },
    // {
    //     path: '/',
    //     component: App,
    //     children:[
    //         {
    //             path: '/login',
    //             title:"登录",
    //             redirect:"/login",
    //             component: Login,
    //         },
    //         {
    //             path: '/home',
    //             component:Layout ,
    //             children: [
    //                 {
    //                     path: '/home',
    //                     title:"首页",
    //                     component: Home,
    //                     redirect:"/home",
    //                     children: [
    //                         {
    //                             path: '/home/test',
    //                             redirect:"/home/test",
    //                             title:"test",
    //                             component: Test,
    //                         },
    //                         {
    //                             path: '/home/test2',
    //                             redirect:"/home/test2",
    //                             title:"test2",
    //                             component: Test2,
    //                         }
    //                     ]
    //                 },
                    
    //             ]
    //         }
    //     ]
    // },
    
];
export {router}