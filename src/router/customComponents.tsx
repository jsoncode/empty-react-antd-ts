import CustomComponents from "@/pages/admin/CustomComponents";
import Drawer from "@/components/Darwer";
import ChineseInput from "@/pages/admin/CustomComponents/ChineseInput";
import Cascader from "@/pages/admin/CustomComponents/Cascader";
import React from "react";

export const customComponents= {
    path: 'customComponents',
    element: <CustomComponents/>,
    children: [
        {
            index: true,
            element: <Drawer/>
        },
        {
            path: 'ChineseInput',
            element: <ChineseInput/>
        },
        {
            path: 'Cascader',
            element: <Cascader/>
        }

    ]
}