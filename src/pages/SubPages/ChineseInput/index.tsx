import ChineseInput from '@/components/ChineseInput';
import { Alert, Input } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import styles from './index.module.less'
import { renderHLJS } from "@/utils";

const Index: FC = () => {
    const [valueList, setValueList] = useState<string[]>([])
    const [value, setValue] = useState<string>('')

    const onChange = (e: any) => {
        const v: string = e.target.value;
        setValue(v)

        valueList.unshift(v)
        setValueList(valueList)
    }
    const onFocus = () => {
        setValue('')
        setValueList([])
    }

    useEffect(() => {
        renderHLJS()
    }, [])

    return <div className={styles.page}>
        <Alert
            message="优势"
            description={'减少非英文输入时的change触发次数, 提高性能. 用法与原Input组件相同'}
            type="success"
            style={{ marginBottom: 20 }}
        />
        <pre><code
            className={'language-tsx'}>{`<ChineseInput\n\x20\x20autoClear={true}\n\x20\x20value={value}\n\x20\x20onChange={onChange}\n\x20\x20{...}\n/>`}</code></pre>
        <div className={styles.label}>默认输入框:</div>
        <Input
            value={value}
            onChange={onChange}
            onFocus={onFocus}
        />
        <div className={styles.label}>ChineseInput:</div>
        <ChineseInput
            value={value}
            onChange={onChange}
            onFocus={onFocus}
        />
        <div className={styles.result}>
            结果: <pre>{valueList.join('\n')}</pre>
        </div>
    </div>
}

export default Index;