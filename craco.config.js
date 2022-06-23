const CracoLessPlugin = require('craco-less')
const path = require("path");
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
        // plugins: {
        //     add: [], /* An array of plugins */
        // },
    },
    // devServer: { /* Any devServer configuration options: https://webpack.js.org/configuration/dev-server/#devserver. */ },
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