import React, { FC } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
    [key: string]: any;
}

const Index: FC = (props: IProps) => {
    console.log(props);
    const navigate = useNavigate();
    return <div>
        <Button>this is list page</Button>
        <Button
            type={'primary'}
            onClick={() => {
                navigate('/')
            }}
        >
            back home
        </Button>
    </div>
}

export default Index;