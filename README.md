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

# 高级配置 使用react-app-rewired对项目重新配置

```shell
yarn add react-app-rewired customize-cra
```

修改package

```text
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

```javascript
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    return config;
};
```

# 使用babel-plugin-import 实现按需加载

```shell
yarn add babel-plugin-import
```

```text
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );

```

# 自定义主题 / 启用less

```text
- const { override, fixBabelImports } = require('customize-cra');
+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
-   style: 'css',
+   style: true,
  }),
+ addLessLoader({
+   lessOptions:{
+     javascriptEnabled: true,
+     modifyVars: { '@primary-color': '#1DA57A' },
+   },
+ }),
);
```

# 最后,一定要安装less+less-loader

```shell
yarn add less less-loader
```

# 其他问题

1. less-loader 6.x版本之后customize-cra对于less使用有问题.
   需要使用customize-cra-less-loader进行加兼容

2. less-loader 必须使用6.x,否则addLessLoader的配置将不会生效
   config-overrides.js

```javascript
const { override, fixBabelImports, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader')
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    // 'border-radius-base': '6px',
                    // 'primary-color': 'green',
                    // 'link-color': 'green'
                },
            }
        }
    }),
    addWebpackAlias({
        '@': path.resolve('./src'),
    }),
    addDecoratorsLegacy(),
)
```

package.json

```json
{
  "less": "^4.1.3",
  "less-loader": "^6.2.0"
}
```

# 其他参考资料:

[Ant Design API](https://ant.design/components/overview-cn/)

[React Router V6](https://reactrouter.com/docs/en/v6)
