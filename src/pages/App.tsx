import React, { FC } from 'react';
import { Link } from "react-router-dom";
import Icon from '@ant-design/icons'
import styles from '@/pages/App.module.less'

import { ReactComponent as Test } from '@/assets/test.svg'
import { ReactComponent as Test2 } from '@/assets/test2.svg'

const Index: FC = () => {
    return <div className={styles.appPage}>
        <div className={styles.btnWrap}>
            <Link to={'/user'} className={styles.link}>
                <Icon component={Test}/>
            </Link>
            <Link to={'/admin'} className={styles.link}>
                <Icon component={Test2}/>
            </Link>
        </div>
        <div>
            <pre>
                <code>
                    {
                    `"dependencies": {
    "antd": "^4.21.3",
    "react": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
},`
                    }
                    {
                        `
"devDependencies": {
    "@craco/craco": "^6.4.3",
    "craco-less": "^2.0.0",
    "less": "^4.1.3",
    "less-loader": "^11.0.0",
}`
                    }
                </code>
            </pre>
        </div>
    </div>
}

export default Index;