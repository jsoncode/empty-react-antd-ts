const { override, fixBabelImports, addWebpackAlias, adjustStyleLoaders } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader')
const path = require('path')
const closedMap = config => {
    // 修改掉webpack里面devtool的配置
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};

module.exports = override(
    // 使用babel-plugin-import来进行按需加载 ,必须安装babel-plugin-import
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true // css|boolean , 如果为true,表示使用less模式
    }),
    addLessLoader({
        // less配置 新版postcss中,需要加一层lessLoaderOptions,否则报错
        lessLoaderOptions: {
            lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                    // 配置主题色
                    'primary-color': '#f00',
                },
            }
        }
    }),
    // 配置自定义快捷路径,需要配合tsconfig.json中的 baseUrl和paths
    addWebpackAlias({
        '@': path.resolve('./src'),
    }),

    // 关闭css 输出sourceMap文件
    adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
        css.options.sourceMap = false;         // css-loader
        postcss.options.sourceMap = false;     // postcss-loader
        // when enable pre-processor,
        // resolve-url-loader will be enabled too
        if (resolve) {
            resolve.options.sourceMap = false;   // resolve-url-loader
        }
        // pre-processor
        if (processor && processor.loader.includes('sass-loader')) {
            processor.options.sourceMap = false; // sass-loader
        }
    }),

    // 关闭js输出sourceMap
    closedMap,
    // disableEsLint(), // 禁用eslint
    // useEslintRc(configFile), // 修改eslint默认代码规范
    // addWebpackPlugin(plugin), // 向webpack的配置中添加plugin插件
    // 更多配置参考官网: https://github.com/arackaf/customize-cra/blob/master/api.md#addtslintloaderloaderoptions
)