var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpackDevServer = require('webpack-dev-server');
// var  OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'js/[name].bundle.js'
    },
    module: {
      loaders: [
          {
              test: /\.js$/,
              loaders: ['babel'],
              exclude: path.resolve(__dirname, 'node_modules'),
              // include: path.resolve(__dirname, 'src')
          },
          {
              test: /\.css$/,
              loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader'],
          },
          {
              test:  /\.less$/,
              loaders: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']

          },
          {
              test:  /\.scss/,
              loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']

          },
          {
              test:  /\.html$/,
              loaders: ['html-loader']

          },
          {
              test: /\.ejs$/,
              loaders: ['ejs-loader']
          },
          // {
          //     test: /\.(png|jpg|gif|svg)$/i,
          //     loader: 'file-loader',
          //     query: {
          //         name: 'assets/[name]-[hash:5].[ext]'
          //     }
          // },
          // {
          //     test: /\.(png|jpg|gif|svg)$/i,
          //     loader: 'url-loader',
          //     query: {
          //         limit: 20000,
          //         name: 'assets/[name]-[hash:5].[ext]'
          //     }
          // },
          {
              test: /\.(png|jpg|gif|svg)$/i,
              loaders: [
                  // 'file-loader?name=assets/[name]-[hash:5].[ext]',
                  'url-loader?limit=100&name=assets/[name]-[hash:5].[ext]',
                  'image-webpack-loader'
              ]
          }
      ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        // stats: 'errors-only',
        // open: true // 启动后自动打开浏览器窗口
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',  // 也可以放在body标签里面
            title: 'may'
        }),

        new htmlWebpackPlugin(),
        // new webpackDevServer()
    ]

}
