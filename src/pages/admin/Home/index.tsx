import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from './index.module.less'

const Index: FC = (s) => {
    return <div className={styles.page}>
        <h1>admin home</h1>

        <Link to={'/admin/list'}>goto list</Link>
    </div>
}

export default Index;