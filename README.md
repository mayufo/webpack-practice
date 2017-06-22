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
