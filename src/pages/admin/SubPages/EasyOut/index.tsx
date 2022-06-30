import { Alert, Button } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { easyOut, renderHLJS } from '@/utils';
import styles from './index.module.less'

const Index: FC = () => {
    const [moving, setMoving] = useState(false);
    const [left, setLeft] = useState(0);

    useEffect(() => {
        renderHLJS()
    }, [])

    const onClick = () => {
        if (moving) {
            return;
        }
        easyOut(left, Math.abs(300 - left), 10, (current: number, isEnd: boolean) => {
            setMoving(!isEnd)
            setLeft(current)
        })
    }

    return <div className={styles.page}>
        <Alert
            message="缓冲动画"
            description={''}
            type="success"
            style={{ marginBottom: 20 }}
        />
        <div className={styles.box}>
            <Button onClick={onClick}>执行</Button>
            <div className={styles.animate} style={{ position: 'absolute', left: left, top: 80 }}>xxx</div>
            <div>
                Left: {left}
            </div>
            <div>
                moving: {moving.toString()}
            </div>
        </div>

        <pre><code className={'language-javascript'}>{easyOut.toString()}</code></pre>
    </div>
}

export default Index;