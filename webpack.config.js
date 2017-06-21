var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // context: '', // 运行环境的上下文
    // entry: ['./src/script/main.js', './src/script/a.js'],
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: './dist',
        filename: 'js/[name]-[chunkhash].js'
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index-[hash].html',
            inject: 'head'  // 也可以放在body标签里面
        })
    ]

}
