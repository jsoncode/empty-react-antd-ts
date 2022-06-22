import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "@/pages/App";
import Admin from '@/pages/admin'
import AdminHome from '@/pages/admin/Home';
import AdminList from '@/pages/admin/List';

import User from '@/pages/user'
import UserHome from '@/pages/user/Home';
import UserList from '@/pages/user/List';
import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<App/>}/>
                <Route path={'user'} element={<User/>}>
                    <Route index element={<UserHome/>}/>
                    <Route path={'list'} element={<UserList/>}/>
                </Route>
                <Route path={'admin'} element={<Admin/>}>
                    <Route index element={<AdminHome/>}/>
                    <Route path={'list'} element={<AdminList/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);