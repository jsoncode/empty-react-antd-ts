import React, { FC } from 'react';
import { Link } from "react-router-dom";
import Icon from '@ant-design/icons'
import styles from '@/pages/App.module.less'

import { ReactComponent as Test } from '@/assets/test.svg'

const Index: FC = () => {
    return <div className={styles.appPage}>
        <Icon component={Test}/>
        <Link to={'/user'}>aaaa</Link>
        <Link to={'/admin'}>bbbb</Link>
    </div>
}

export default Index;