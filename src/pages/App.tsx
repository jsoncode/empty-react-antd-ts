import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from '@/pages/App.module.less'

const Index: FC = () => {
    return <div className={styles.appPage}>
        <Link to={'/user'}>aaaa</Link>
        <Link to={'/admin'}>bbbb</Link>
    </div>
}

export default Index;