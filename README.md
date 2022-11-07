# webpackStudy
webpack学习，笔记、案例等等。
学习地址：B站

## 初始化webpack 
* -y表示全部默认*
```
  yarn init -y
```

## 添加webpack依赖
*--dev 安装在开发者依赖*
```
  yarn add webpack webpack-cli --dev
```

## 使用VScode插件live Server，可以直接运行html
*在html文件上，右键 Open with live Server*


## 打包命令 npx webpack 
会生成dist文件夹

## 新建webpack.config.js.
配置mode 可以设置开发模式。development production  打包的文件有区别
entry 配置入口文件位置
output 配置打包后的位置名
  filename 打包后的文件名
  path 配置位置 可以搭配 path工具


## pageloader 加载css文件
  安装 yarn add --dev style-loader css-loader
  webpack.config.js/module.rules 中配置loader

## 如何加载图片 webpack内置loder，不用专门安装了
  webpack.config.js/module.rules 中配置loader

## 如何在webpack中使用插件
  例： 自动生产html的插件
  安装 yarn add html-webpack-plugin --dev
  webpack.config.js/plugins 中配置插件
    title属性设置html标题
    
## 使用babel 兼容低版本写法
 安装 yarn add --dev babel-loader @babel/croe @babel/preset-env
 webpack.config.js/module.rules 中配置loader
  exclude 排除一些文件夹
  use.loader 指定使用那些loder
  user.options 给loader一些配置

## webpack.config.js 配置devtool: 'inline-source-map' 
  可以查看打包后的源代码

## 压缩打包 JS代码
  安装 yarn add --dev terser-webpack-plugin
  配置webpack.config.js/optimization
    minimize 是否压缩
    minimizer 使用什么压缩

## 热更新，自动重新打包，刷新页面
  安装 yarn add --dev webpack-dev-server
  配置webpack.config.js/devServer
    指定目录

## 配置快捷启动项 webpack.config.js/scripts

## 在打包文件中，增加hash
  配置webpack.config.js/output.filename

## 设置路径别名
  可以指定别名，替换掉相对路径
  配置webpack.config.js/resolve.alias
    utils: path.resolve(__dirname, 'src/assets/images)

## 可视化打包分析工具
  安装 yarn add -dev webpack-bundle-analyzer
  webpack.config.js/plugins 中配置插件

