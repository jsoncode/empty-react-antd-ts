import * as React from 'react';
import { FC, ReactNode } from 'react';
import { Cascader } from 'antd';
import styles from './index.module.less'

const options = [
    {
        label: 'Light',
        value: 'light',
        children: new Array(20).fill(null).map((_, index) => ({
            label: `Number ${index}`,
            value: index,
        })),
    },
    {
        label: 'Bamboo',
        value: 'bamboo',
        children: [
            {
                label: 'Little',
                value: 'little',
                children: [
                    {
                        label: 'Toy Fish',
                        value: 'fish',
                    },
                    {
                        label: 'Toy Cards',
                        value: 'cards',
                    },
                    {
                        label: 'Toy Bird',
                        value: 'bird',
                    },
                ],
            },
        ],
    },
];

interface IProps {
    [key: string]: any;
}

const App: FC<IProps> = (props) => {
    const dropdownRender = (menus: ReactNode) => (
        <div className={styles.renderWrap}>
            <div className={styles.left}>
                {menus}
            </div>
        </div>
    );

    return <Cascader
        options={options}
        multiple
        showSearch
        maxTagCount="responsive"
        dropdownRender={dropdownRender}
        style={{ width: '100%' }}
        {...props}
    />
}

export default App;