import React from 'react'
import { RouteObject } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import PageContainer from "@/pages";
import Home from "@/pages/Home";
import Drawer from "@/components/Darwer";
import ChineseInput from "@/pages/SubPages/ChineseInput";
import EasyOut from "@/pages/SubPages/EasyOut";
import Ajax from "@/pages/SubPages/Ajax";
import IndexDB from "@/pages/SubPages/IndexDB";
import DoubleCharCodeLength from "@/pages/SubPages/DoubleCharCodeLength";
import CompanyDetail from '@/pages/SubPages/CompanyDetail';

// 主路由
export const routeList: RouteObject[] = [
    {
        // 这里的pageContainer只是一个壳子,包含了公共的部分内容,子路由中的index才算真正首页
        path: '*', element: <PageContainer/>,
        children: [
            {
                index: true, element: <Home/>,
            },
            {
                path: 'Drawer',
                element: <Drawer/>
            },
            {
                path: 'ChineseInput',
                element: <ChineseInput/>
            },

            {
                path: 'EasyOut',
                element: <EasyOut/>
            },
            {
                path: 'Ajax',
                element: <Ajax/>
            },
            {
                path: 'IndexDB',
                element: <IndexDB/>
            },
            {
                path: 'DoubleCharCodeLength',
                element: <DoubleCharCodeLength/>
            },
            {
                path: 'CompanyDetail',
                element: <CompanyDetail/>
            },
            {
                path: '*', element: <NotFound/>,
            },
        ]
    },
];
