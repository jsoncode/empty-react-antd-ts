import React, { FC, useEffect } from 'react';
import { dbLength, renderHLJS } from '@/utils';
import styles from './index.module.less'

const Index: FC = () => {
    useEffect(() => {
        renderHLJS()
        test()
    }, [])

    const test = () => {
        const len = dbLength('中文123');
        console.log(len) // 长度为 7
    }

    return <div className={styles.page}>
        <pre><code className={'language-javascript'}>{test.toString() + '\n\n' + dbLength.toString()}</code></pre>
    </div>
}

export default Index;