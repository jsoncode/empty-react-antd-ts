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
