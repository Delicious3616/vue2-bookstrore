'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
// 加载本地文件
// var appData = require('../api/home.json')//加载本地数据文件
// var announcement = appData.announcement//获取对应的本地数据
// var slides = appData.slides
// var latestUpdated = appData.latestUpdated
// var recommended = appData.recommended
// // 加载本地文件结束
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)




const express=require('express')
const app = express()
const data=require('../api/home.json')
const announcement=data.announcement
const slides=data.slides
const latestUpdated=data.latestUpdated
const recommended=data.recommended
const apiRoutes = express.Router();
apiRoutes.get('/slides', function (req, res) {
  res.json({
    errno: 0,
    data: slides
  });
});

apiRoutes.get('/latestUpdated', function (req, res) {
  res.json({
    errno: 0,
    data: latestUpdated
  });
});

apiRoutes.get('/recommended', function (req, res) {
  res.json({
    errno: 0,
    data: recommended
  });
});
apiRoutes.get('/announcement', function (req, res) {
  res.json({
    errno: 0,
    data: announcement
  });
});

app.use('/api', apiRoutes);




const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/announcement', (req, res) => {
        res.json({
          errno: 0,
          data: announcement
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
      }),
        app.get('/api/slides', (req, res) => {
          res.json({
            errno: 0,
            data: slides
          })
        }),
        app.get('/api/latestUpdated', (req, res) => {
          res.json({
            errno: 0,
            data: latestUpdated
          })
        }),
      app.get('/api/recommended', (req, res) => {
          res.json({
            errno: 0,
            data: recommended
          })
        })
    } //有的同学说报错，不能识别before,注意看下你的配置。

  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

app.use("/api",express.static("./static/api"))
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
