const path = require('path')
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base.config')

module.exports = merge(baseConf, {
  target: 'web', // 设置 target 为 node，将不会将引入的 node 内置模块（fs path 等）打包到 bundle 中
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/client'),
    clean: true
  },
})