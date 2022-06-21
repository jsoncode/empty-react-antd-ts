import React, { FC } from 'react';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";
import styles from './index.module.less'

interface IProps {
    [key: string]: any;
}

const Index: FC = (props: IProps) => {
    console.log(props);
    const navigate = useNavigate();

    return <div className={styles.page}>
        <Button className={styles.btn}> this is home button</Button>
        <Button
            type={'primary'}
            onClick={() => {
                navigate('/list')
            }}
        >
            goto list
        </Button>
    </div>
}

export default Index;