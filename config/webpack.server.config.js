const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { VueLoaderPlugin} = require('vue-loader/dist/index')

module.exports = {
  target: 'node', // 设置 target 为 node，将不会将引入的 node 内置模块（fs path 等）打包到 bundle 中
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, '../build/server'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: ['.js', '.json', '.wasm', '.jsx', '.vue']
  },
  externals: [nodeExternals()], // 排除 node_modules 中的包
}