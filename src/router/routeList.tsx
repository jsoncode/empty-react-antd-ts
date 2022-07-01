// 懒加载会特殊情况下会出现组件闪烁问题
// 由于使用懒加载的方式,导致首次加载时,必须有一个带ant组件的页面,否则首屏样式会有错乱
// 现在在首屏添加了ant-spin组件,这里就可以去掉了

//使用懒加载管理路由,必须用Suspense进行处理 <Suspense><RoutePage/></Suspense>
// const App = React.lazy(() => import(/* webpackChunkName: "Admin" */ "@/pages/App"));

import React from 'react'
import { RouteObject } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PageContainer from "@/pages";
import Home from "@/pages/Home";
import { customComponents } from "@/router/customComponents";
import { utilsComponents } from "@/router/utilsComponents";

// 主路由
export const routeList: RouteObject[] = [
    {
        // 这里的pageContainer只是一个壳子,包含了公共的部分内容,子路由中的index才算真正首页
        path: '/', element: <PageContainer/>,
        children: [
            {
                index: true, element: <Home/>,
            },
            ...customComponents,
            ...utilsComponents,
        ]
    },
    {
        path: '*', element: <NotFound/>,
    },
];
