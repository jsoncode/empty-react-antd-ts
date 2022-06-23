# 1.使用create-react-app 创建项目

指定项目名称的方式创建:

```shell
npx create-react-app my-app --template typescript
```

或 在一个目录里面创建:

```shell
npx --yes create-react-app . --template typescript
```

# 2. 安装ui框架antd

```shell
yarn add antd
```

# 3. 高级配置 使用@craco/craco对项目重新配置

```shell
yarn add @craco/craco -D
```

修改package

```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

创建一个配置文件: craco.config.js

```javascript
module.exports = {}
```

# 4. 按需加载antd

安装依赖

```shell
yarn add babel-plugin-import less less-loader -D
```

修改配置: craco.config.js

```javascript
module.exports = {
    babel: {
        plugins: [[
            'import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true // 启用less
            }
        ]],
    },
};
```

# 5. 自定义antd主题

安装依赖

```shell
yarn add craco-less -D
```

修改配置: craco.config.js

```javascript
const CracoLessPlugin = require('craco-less')
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': 'red' },
                        javascriptEnabled: true,
                    },
                }
            }
        },
    ]
};
```

# 6.自定义路径变量

1. 在 tsconfig.json 添加baseUrl和paths字段

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

2. 并在craco.config.js里面添加配置

```javascript
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
}
```

# 7. 开启开启less/css module

修改配置: ./src/react-app-env.d.ts

```typescript
declare module '*.module.less' {
    const classes: {
        readonly [key: string]: string
    }
    export default classes
}
```

在组件中可以使用: App.tsx

```tsx
import React, { FC } from 'react';
import { Button } from "antd";
import styles from '@/pages/App.module.less' // 必须开启less module,文件名必须是 *.module.less

const Index: FC = () => {
    return <div className={styles.appPage}>
        <a>test</a>
        <Button>test</Button>
    </div>
}

export default Index;
```

App.module.less

```less
.appPage {
  padding: 20px;
  
  a{
    color: red;
  }
  
  :global{
    .ant-btn{
      color: red;
    }
  }
}
```

# 8. 关闭sourceMap

安装跨平台配置依赖

```shell
yarn add cross-env -D
```

修改package.json中的build命令

```json
{
  "scripts": {
    "build": "cross-env GENERATE_SOURCEMAP=false craco build"
  }
}
```

# 目录说明

```text
public/
    index.html      主文件
src
    components      公共组件
    pages           页面代码
        admin       管理员后台
        userPage    用户前台页面
    index.tsx       入口文件
config-overrides.js 项目配置文件
tsconfig.json       ts配置文件
```

# 其他参考资料:

[Ant Design API](https://ant.design/components/overview-cn/)

[React Router V6](https://reactrouter.com/docs/en/v6)
