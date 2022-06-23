import React, { FC } from 'react';
import styles from './index.module.less'
import Drawer from '@/ant-doc/Darwer'

const Index: FC = (s) => {
    return <div className={styles.page}>
        <Drawer/>
    </div>
}

export default Index;