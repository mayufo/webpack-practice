# chapter 1

webpack hello.js hello.bundle.js


npm install css-loader style-loader --save-dev

css-loader 处理生成css文件
style-loader 是加载

如果不想在require写

可以在命令行敲

webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'


webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch 随时监听

webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader' --progress 看到打包过程

webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'  --progress --display-modules 展示打包的模块

webpack hello.js hello.bundle.js --module-bind 'css=style-loader!css-loader'  --progress --display-modules --display-reasons 可以看到打包这个模块的原因


# chapter 2 


> http://webpack.github.io/docs/configuration.html

改名字 为 webpack.dev.config.js

webpack --config webpack.dev.config.js

## entry

平行的不互相依赖

```
entyl: ['./entry1', 'entry2']
```
## output

多页面应用

```
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  }
}
```

[name] 打包的名字

[hash] 打包的版本号

[chunkhash] 每个文件的版本，相当于md5值

打包的情况

```js
output: {
        path: './dist',
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'http://cdn.com' //上线地址
   }
```


# chapter 3 生成index

npm install html-webpack-plugin --save-dev


> http://webpack.github.io/docs/using-plugins.html

可以遍历出里面的参数

```eje
<%= htmlWebpackPlugin.options.date %>
<% for (var key in htmlWebpackPlugin.files) {%>
<%= key %> : <%= JSON.stringify(htmlWebpackPlugin.files[key])%>
<% } %>

<% for (var key in htmlWebpackPlugin.options) {%>
<%= key %> : <%= JSON.stringify(htmlWebpackPlugin.options[key])%>
<% } %>
```

> 参考插件的api https://www.npmjs.com/package/html-webpack-plugin

打出的内容
```
Thu Jun 22 2017 11:52:57 GMT+0800 (中国标准时间)

publicPath : ""

chunks : {"main":{"size":24,"entry":"js/main-6409dbec7a578634313c.js","hash":"6409dbec7a578634313c","css":[]},"a":{"size":46,"entry":"js/a-ac3cfa9c31ab31c7ee2e.js","hash":"ac3cfa9c31ab31c7ee2e","css":[]}}

js : ["js/main-6409dbec7a578634313c.js","js/a-ac3cfa9c31ab31c7ee2e.js"]

css : []

manifest : 



template : "D:\\study\\webpack-practice\\node_modules\\html-webpack-plugin\\lib\\loader.js!D:\\study\\webpack-practice\\index.html"

filename : "index.html"

hash : false

inject : "head"

compile : true

favicon : false

minify : false

cache : true

showErrors : true

chunks : "all"

excludeChunks : []

title : "webpack is good"

xhtml : false

date : "2017-06-22T03:52:57.284Z"
```
> 一部分js放在头部，一部分放在body

通过设置

```html
<script src="<%= htmlWebpackPlugin.files.chunks.a.entry %>"></script>
```

压缩html

> https://www.npmjs.com/package/html-webpack-plugin 

minify 里面设置 可以看html-minifier 来设置

## 多页面的应用

可以用chunks：[] 以数组的方式来表现

注意在多页面应用的时候如果template的index.html不能有多余的备注

如果一个page中需要多个js,可以用excludeChunks

## 提高请求，将js inline在page中

```
npm install --save-dev html-webpack-inline-source-plugin
```

```js
plugins: [
  new HtmlWebpackPlugin({
		inlineSource: '.(js|css)$' // embed all javascript and css inline
	}),
  new HtmlWebpackInlineSourcePlugin()
]  
```

这时候inject: false

> 具体可以参考 https://github.com/DustinJackson/html-webpack-inline-source-plugin

也可以用

```
<%=
            compilation.assets[htmlWebpackPlugin.files.chunks.main.entry.substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
```

> 将main inline在html里面 ， 将对应的js 分别加入

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%= htmlWebpackPlugin.options.title %></title>
    <script type="text/javascript">
        <%=
            compilation.assets[htmlWebpackPlugin.files.chunks.main.entry.substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
    </script>

</head>

<body>
    <% for (var k in htmlWebpackPlugin.files.chunks) { %>
        <% if(k!== 'main') { %>
            <script type="text/javascript" src="<%= htmlWebpackPlugin.files.chunks[k].entry%>"></script>
        <% } %>
    <% } %>

<!--我是注释-->
</body>
</html>
```

```js
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

```