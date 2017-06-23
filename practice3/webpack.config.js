var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
// var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

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
          }
      ]
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',  // 也可以放在body标签里面
        })

        // new HtmlWebpackInlineSourcePlugin()
    ]

}
