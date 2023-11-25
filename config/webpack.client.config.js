const path = require('path')
const { VueLoaderPlugin} = require('vue-loader/dist/index')

module.exports = {
  target: 'web', // 设置 target 为 node，将不会将引入的 node 内置模块（fs path 等）打包到 bundle 中
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/client'),
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
}