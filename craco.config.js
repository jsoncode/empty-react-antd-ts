const path = require("path");
const CracoLessPlugin = require('craco-less')

module.exports = {
    babel: {
        plugins: [[
            'import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
            }
        ]],
    },
    // typescript: {
    //     enableTypeChecking: true /* (default value)  */
    // },
    webpack: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
    devServer: {
        /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver. */
        proxy: {
            '/api': {
                target: 'https://api.cn',
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        },
    },
    // devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => {
    //     return devServerConfig;
    // },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { '@primary-color': 'red' },
                        javascriptEnabled: true,
                    },
                }
            }
        },
    ]
};