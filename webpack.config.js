var htmlWebpackPlugin = require('html-webpack-plugin');

// var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    // context: '', // 运行环境的上下文
    // entry: ['./src/script/main.js', './src/script/a.js'],
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
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
            filename: 'main.html',
            inject: false,  // 也可以放在body标签里面
            title: 'webpack is good',
            date: new Date(),
            minify: {
                removeComments: true, // 删除注释
                collapseWhitespace: true  // 删除多余的空格
            },
            // chunks: ['main', 'a'],
            inlineSource: '.(js|css)$'
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            // filename: 'index-[hash].html',
            filename: 'a.html',
            inject: false,  // 也可以放在body标签里面
            title: 'a',
            // chunks: ['a']
            // excludeChunks:  ['b','c'],
            inlineSource: '.(js|css)$'
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            // filename: 'index-[hash].html',
            filename: 'b.html',
            inject: false,  // 也可以放在body标签里面
            title: 'b',
            // chunks: ['b']
            // excludeChunks: ['a','c'],
            inlineSource: '.(js|css)$'
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            // filename: 'index-[hash].html',
            filename: 'c.html',
            inject: false,  // 也可以放在body标签里面
            title: 'c',
            // chunks: ['c'],
            // excludeChunks: ['a','b'],
            inlineSource: '.(js|css)$'

        }),
        // new HtmlWebpackInlineSourcePlugin()
    ]

}
