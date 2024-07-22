/*
 * @Author: ly525
 * @Date: 2019-12-14 22:43:55
 * @LastEditors: Shuwang_wu
 * @LastEditTime: 2024-07-22 17:28:46
 * @FilePath: \luban-h5-default\vue.config.js
 * @Github: https://github.com/ly525/luban-h5
 * @Description: Do not edit
 * @Copyright 2018 - 2020 luban-h5. All Rights Reserved
 */
const path = require('path')
const webpack = require('webpack')
// const isProd = process.env.NODE_ENV === 'production'
const target = 'http://localhost:1337'
const engineOutputDir = path.join(
  __dirname,
  'engine-assets'
)
const mainAppOutputDir = path.join(
  __dirname,
  'build-editor'
)
const coreEditorOutputDir = path.join(
  __dirname,
  'dist'
)
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin // 项目大小分析图
const isPro = process.env.NODE_ENV === 'production'

const generatePlugins = () => {
  let plugins = [
    // https://github.com/moment/moment/issues/2416
    new webpack.ContextReplacementPlugin(/moment\/locale$/, /(zh-cn)$/)
  ]
  if (isPro) {
    plugins = plugins.concat([
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"production"' } }),
      new BundleAnalyzerPlugin()
    ])
  } else {
    plugins = plugins.concat([
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } })
    ])
  }

  return plugins
}

let page
switch (process.env.PAGE) {
  case 'ENGINE':
    page = {
      entry: 'src/engine-entry.js',
      outputDir: engineOutputDir,
      // publicPath: './'
    }
    break
  case 'CORE_EDITOR':
    page = {
      entry: 'src/components/core/index.js',
      outputDir: coreEditorOutputDir
    }
    break
  case 'EDITOR':
  default:
    page = {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      outputDir: 'dist',
      outputDir: mainAppOutputDir,
      // publicPath: './'
    }
}

console.log(page, 'pagepagepagepage')

const configureWebpack = {
  devtool: 'source-map',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      core: path.join(__dirname, 'src/components/core')
    }
  },
  plugins: [...generatePlugins()],
  externals: {
    echarts: 'echarts',
    VeIndex: 'echarts'
  }
}

module.exports = {
  outputDir: page.outputDir,
  publicPath: '',
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  pages: { index: page },
  devServer: {
    proxy: {
      '^/auth|upload|content-manager|users-permissions|works|scripts|datasources|admin|psd-files|workforms|third-libs|engine-assets/':
        {
          target,
          changeOrigin: true,
          ws: false
        }
    }
  },
  configureWebpack,
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [
          // './src/theme'
        ]
      }
    },
    extract: false
  },
  pwa: {
    iconPaths: {
      favicon32: 'img/icons/favicon.ico',
      favicon16: 'img/icons/favicon.ico',
      appleTouchIcon: 'img/icons/favicon.ico',
      maskIcon: 'img/icons/favicon.ico',
      msTileImage: 'img/icons/favicon.ico'
    }
  }
}
