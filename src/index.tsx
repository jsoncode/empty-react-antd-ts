import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PageRouter from '@/router'
import './index.css'
import { Spin } from 'antd';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            {/*使用懒加载管理路由,必须用Suspense进行处理*/}
            <Suspense fallback={<div className="pageLoading">
                <Spin/>
            </div>}>
                <PageRouter/>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);