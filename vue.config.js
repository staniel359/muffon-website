const webpack = require(
  'webpack'
)
const path = require(
  'path'
)

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.txt$/i,
          use: 'raw-loader'
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin(
        {
          $: 'jquery',
          jQuery: 'jquery'
        }
      )
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/styles/Shared.sass"'
      }
    }
  },
  outputDir: 'dist',
  pluginOptions: {
    i18n: {
      enableLegacy: true
    }
  },
  publicPath: './'
}
