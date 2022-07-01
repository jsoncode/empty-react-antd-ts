import React, { FC, useEffect } from 'react';
import { DB, renderHLJS } from '@/utils';
import styles from './index.module.less'
import { Button } from 'antd';

const Index: FC = () => {

    useEffect(() => {
        renderHLJS()
    }, [])

    const onClick = async () => {
        const db = new DB({
            dbName: 'school',
            tbName: 'class',
            primaryKey: 'id',
        })
        const result = await db.saveIndexedDB({
            id: 'test111',
            v1: '111',
            v2: '222',
        })
        console.log(result)
    }

    return <div className={styles.page}>
        <div style={{ marginBottom: 20 }}>
            <Button onClick={onClick}>
                保存一条数据
            </Button>
        </div>
        <pre><code className={'language-javascript'}>{onClick.toString()}</code></pre>
        <pre><code className={'language-javascript'}>{DB.toString()}</code></pre>
    </div>
}

export default Index;