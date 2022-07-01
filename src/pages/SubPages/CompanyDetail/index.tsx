import React, { FC } from 'react';
import styles from './index.module.less'
import { Card } from "antd";

const Index: FC = () => {

    return <div className={styles.page}>
        <Card className={styles.headCard} bordered={false}>
            <div className={styles.avatar}>
                <span>组件测试</span>
            </div>
        </Card>
    </div>
}

export default Index;