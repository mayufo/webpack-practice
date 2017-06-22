var htmlWebpackPlugin = require('html-webpack-plugin');

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
              exclude: /node_modules/ ,
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
