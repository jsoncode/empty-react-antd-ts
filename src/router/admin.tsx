import React from "react";
import Admin from "@/pages/admin";
import AdminHome from "@/pages/admin/Home";
import { customComponents } from "@/router/customComponents";
import { utilsComponents } from "@/router/utilsComponents";

export const admin = {
    path: '/admin', element: <Admin/>,
    children: [
        {
            index: true, element: <AdminHome/>,
        },
        ...customComponents,
        ...utilsComponents,
    ]
}