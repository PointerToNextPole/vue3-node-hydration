const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { merge } = require('webpack-merge')
const baseConf = require('./webpack.base.config')

module.exports = merge(baseConf, {
  target: 'node', // 设置 target 为 node，将不会将引入的 node 内置模块（fs path 等）打包到 bundle 中
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server'),
    clean: true
  },
  externals: [nodeExternals()], // 排除 node_modules 中的包
})