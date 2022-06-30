import { Alert } from 'antd';
import React, { FC } from 'react';
import styles from './index.module.less'
import Cascader from "@/components/Cascader";

const Index: FC = () => {

    return <div className={styles.page}>
        <Alert
            style={{ marginBottom: 20 }}
            message="级联菜单"
            description={'客搜索的级联菜单'}
            type="success"
        />
        <Cascader/>
    </div>
}

export default Index;