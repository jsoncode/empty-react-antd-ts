import React from "react";
import EasyOut from "@/pages/admin/SubPages/EasyOut";
import Ajax from "@/pages/admin/SubPages/Ajax";
import IndexDB from "@/pages/admin/SubPages/IndexDB";
import DoubleCharCodeLength from "@/pages/admin/SubPages/DoubleCharCodeLength";

export const utilsComponents = [
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
]