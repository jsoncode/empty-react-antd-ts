import Admin from "@/pages/admin";
import AdminHome from "@/pages/admin/Home";
import AdminList from "@/pages/admin/List";
import { customComponents } from "@/router/customComponents";
import React from "react";

export const admin = {
    path: '/admin', element: <Admin/>,
    children: [
        {
            index: true, element: <AdminHome/>,
        },

        {
            path: 'list', element: <AdminList/>,
        },

        { ...customComponents }
    ]
}