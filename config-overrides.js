const {
    override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy,
} = require('customize-cra')

const themes = require('./theme')

module.exports = override(
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: themes
        }
    }),
    addDecoratorsLegacy(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    })


)