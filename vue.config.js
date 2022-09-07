const webpack = require(
  'webpack'
)
const path = require(
  'path'
)

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin(
        {
          $: 'jquery',
          jQuery: 'jquery'
        }
      )
    ],
    resolve: {
      alias: {
        '*': path.resolve(
          __dirname,
          './src'
        )
      }
    }
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
