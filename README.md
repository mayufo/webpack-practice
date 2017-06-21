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
