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
                    'primary-color': '#f00',
                },
            }
        }
    }),
    addWebpackAlias({
        '@': path.resolve('./src'),
    }),
    addDecoratorsLegacy(),
)