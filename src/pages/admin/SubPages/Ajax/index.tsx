import React, { FC, useEffect } from 'react';
import { ajax, renderHLJS } from '@/utils';
import styles from './index.module.less'

const Index: FC = () => {

    useEffect(() => {
        renderHLJS()
    }, [])
    return <div className={styles.page}>
        <pre><code className={'language-javascript'}>{ajax.toString()}</code></pre>
    </div>
}

export default Index;