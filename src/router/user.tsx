import User from "@/pages/user";
import UserHome from "@/pages/user/Home";
import UserList from "@/pages/user/List";
import React from "react";

export const user = {
    path: '/user', element: <User/>,
    children: [
        {
            index: true, element: <UserHome/>,
        },
        {
            path: 'list', element: <UserList/>,
        }
    ]
}