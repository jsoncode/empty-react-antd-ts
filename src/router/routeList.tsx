// 懒加载会特殊情况下会出现组件闪烁问题
// 由于使用懒加载的方式,导致首次加载时,必须有一个带ant组件的页面,否则首屏样式会有错乱
// 现在在首屏添加了ant-spin组件,这里就可以去掉了
// import User from '@/pages/user'

//使用懒加载管理路由,必须用Suspense进行处理 <Suspense><RoutePage/></Suspense>
// const App = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/App"));

import React from 'react'
import { RouteObject } from 'react-router-dom';
import App from '@/pages/App';
import NotFound from '@/pages/NotFound';
import { user } from "@/router/user";
import { admin } from '@/router/admin';

// 主路由
export const routeList: RouteObject[] = [
    {
        path: '/', element: <App/>,
    },
    { ...user },
    { ...admin },
    {
        path: '*', element: <NotFound/>,
    },
];
