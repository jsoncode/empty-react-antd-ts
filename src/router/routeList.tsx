import React from 'react'
import { RouteObject } from 'react-router-dom';

import App from '@/pages/App';
import NotFound from '@/pages/NotFound';
import User from '@/pages/user';
import UserHome from '@/pages/user/Home';
import UserList from '@/pages/user/List';

import Admin from '@/pages/admin';
import AdminHome from '@/pages/admin/Home';
import AdminList from '@/pages/admin/List';
import CustomComponents from '@/pages/admin/CustomComponents';
import Drawer from '@/components/Darwer'
// 懒加载会特殊情况下会出现组件闪烁问题


// 由于使用懒加载的方式,导致首次加载时,必须有一个带ant组件的页面,否则首屏样式会有错乱
// 现在在首屏添加了ant-spin组件,这里就可以去掉了
// import User from '@/pages/user'

//使用懒加载管理路由,必须用Suspense进行处理 <Suspense><RoutePage/></Suspense>
// const App = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/App"));
//
// const Admin = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/admin"));
// const AdminHome = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/admin/Home"));
// const AdminList = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/admin/List"));
// const CustomComponents = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/admin/CustomComponents"));
//
// const User = React.lazy(() => import(/* webpackChunkName: "User" */ "@/pages/user"));
// const UserHome = React.lazy(() => import(/* webpackChunkName: "User" */ "@/pages/user/Home"));
// const UserList = React.lazy(() => import(/* webpackChunkName: "User" */ "@/pages/user/List"));

// 主路由
export const routeList: RouteObject[] = [
    {
        path: '/', element: <App/>,
    },
    {
        path: '/user', element: <User/>,
        children: [
            {
                index: true, element: <UserHome/>,
            },
            {
                path: 'list', element: <UserList/>,
            }
        ]
    },
    {
        path: '/admin', element: <Admin/>,
        children: [
            {
                index: true, element: <AdminHome/>,
            },
            {
                path: 'customComponents', element: <CustomComponents/>,
                children: [{
                    index: true,
                    element: <Drawer/>
                }]
            },
            {
                path: 'list', element: <AdminList/>,
            }
        ]
    },
    {
        path: '*', element: <NotFound/>,
    },
];
