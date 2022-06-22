import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less'

const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined/>,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined/>,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];

const App = () => {
    const [current, setCurrent] = useState('mail');

    const onClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <div className={styles.page}>
        <Menu className={styles.menu} onClick={onClick} selectedKeys={[current]} mode="inline" items={items}/>
        <div className={styles.rightContent}>
            <Outlet/>
        </div>
    </div>;
};

export default App;