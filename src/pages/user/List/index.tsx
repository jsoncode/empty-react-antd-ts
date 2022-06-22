import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from './index.module.less'

const Index: FC = (s) => {
    return <div className={styles.page}>
        <h1>user list</h1>

        <Link to={'/user'}>goto home</Link>
    </div>
}

export default Index