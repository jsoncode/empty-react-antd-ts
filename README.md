# 1.项目创建过程

指定项目名称的方式创建:

```shell
npx create-react-app my-app --template typescript
```

在一个目录里面创建:

```shell
npx --yes create-react-app . --template typescript
```

# 2. 安装antd

```shell
yarn add antd
```

# 高级配置 使用@craco/craco对项目重新配置

```shell
yarn add @craco/craco craco-less
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

然后在项目根目录创建一个 craco.config.js 用于修改默认配置。

```javascript
const CracoLessPlugin = require('craco-less')
const path = require("path");
module.exports = {
    babel: {
        // 使用babel-plugin-import 实现按需加载
        plugins: [[
            'import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
            }
        ]],
    },
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

# 自定义路径变量

在 tsconfig.json 添加baseUrl和paths字段

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

并在craco.config.js里面添加配置

```text
module.exports = {
   ...
   webpack: {
      alias: {
         '@': path.resolve('./src'),
      },
   },
}
```

# 最后,一定要安装less+less-loader

```shell
yarn add less less-loader@6.2.0
```

### 目录说明

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
