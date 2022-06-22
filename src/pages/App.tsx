import React, { FC } from 'react';
import styles from '@/pages/App.module.less'
import { Link } from "react-router-dom";

const Index: FC = () => {
    return <div className={styles.appPage}>
        <Link to={'/user'}>aaaa</Link>
        <Link to={'/admin'}>bbbb</Link>
    </div>
}

export default Index;