import ChineseInput from '@/components/ChineseInput';
import { Alert, Input } from 'antd';
import React, { FC, useState } from 'react';
import styles from './index.module.less'

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
    return <div className={styles.page}>
        <Alert
            message="优势"
            description={'减少非英文输入时的change触发次数, 提高性能, 在实时搜索时性能更加'}
            type="success"
        />
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