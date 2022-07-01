import React from "react";
import EasyOut from "@/pages/SubPages/EasyOut";
import Ajax from "@/pages/SubPages/Ajax";
import IndexDB from "@/pages/SubPages/IndexDB";
import DoubleCharCodeLength from "@/pages/SubPages/DoubleCharCodeLength";

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