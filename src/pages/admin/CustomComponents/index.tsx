import React, { FC } from 'react';
import { Outlet } from "react-router-dom";
import styles from './index.module.less'

const Index: FC = () => {
    return <div className={styles.page}>
        <Outlet/>
    </div>
}

export default Index;