import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home'
import List from '@/pages/List'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={'/list'} element={<List/>}/>
                {/*<Route path="teams" element={<Teams/>}>
                        <Route path=":teamId" element={<Team/>}/> // 声明路由
                        <Route path="new" element={<NewTeamForm/>}/> // 具名路由
                        <Route index element={<LeagueStandings/>}/>
                    </Route>*/}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);