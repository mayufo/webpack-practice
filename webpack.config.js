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
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com' //上线地址
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            // filename: 'index-[hash].html',
            filename: 'index.html',
            inject: false,  // 也可以放在body标签里面
            title: 'webpack is good',
            date: new Date(),
            minify: {
                removeComments: true, // 删除注释
                collapseWhitespace: true  // 删除多余的空格
            }
        })
    ]

}
