import React from 'react'
import { RouteObject } from 'react-router-dom';

// 由于使用懒加载的方式,导致首次加载时,必须有一个带ant组件的页面,否则首屏样式会有错乱
// 现在在首屏添加了ant-spin组件,这里就可以去掉了
// import User from '@/pages/user'

//使用懒加载管理路由,必须用Suspense进行处理 <Suspense><RoutePage/></Suspense>
const App = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/App"));

const Admin = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/admin"));
const AdminHome = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/admin/Home"));
const AdminList = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/admin/List"));

const User = React.lazy(() => import(/* webpackChunkName: "User" */ "@/pages/user"));
const UserHome = React.lazy(() => import(/* webpackChunkName: "User" */ "@/pages/user/Home"));
const UserList = React.lazy(() => import(/* webpackChunkName: "User" */ "@/pages/user/List"));

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
                path: 'list', element: <AdminList/>,
            }
        ]
    }
];
