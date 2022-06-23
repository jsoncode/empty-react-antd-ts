import React, { FC } from 'react';
import { Link } from "react-router-dom";
import Icon from '@ant-design/icons'
import styles from '@/pages/App.module.less'

import { ReactComponent as Test } from '@/assets/test.svg'
import { ReactComponent as Test2 } from '@/assets/test2.svg'

const Index: FC = () => {
    return <div className={styles.appPage}>
        <Link to={'/user'} className={styles.link}>
            <Icon component={Test}/>
        </Link>
        <Link to={'/admin'} className={styles.link}>
            <Icon component={Test2}/>
        </Link>
    </div>
}

export default Index;