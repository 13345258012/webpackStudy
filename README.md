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
``` javascript
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "dist.js",
    path: path.resolve(__dirname, 'dist')
  }
```

## pageloader 加载css文件
  安装 yarn add --dev style-loader css-loader
  webpack.config.js/module.rules 中配置loader
```javascript
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    },
  ]
}
```

## 如何加载图片 webpack内置loder，不用专门安装了
  webpack.config.js/module.rules 中配置loader
```javascript
module: {
  rules: [
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource"
    },
  ]
}
```

## 如何在webpack中使用插件
  例： 自动生产html的插件
  安装 
  ```
  yarn add html-webpack-plugin --dev
  ```
  webpack.config.js/plugins 中配置插件
    title属性设置html标题
  ```javascript
  plugins: [new HtmlWebpackPlugin({
    title: '博客列表'
  })],
  ```
    
## 使用babel 兼容低版本写法
 安装 yarn add --dev babel-loader @babel/core @babel/preset-env
 webpack.config.js/module.rules 中配置loader
  exclude 排除一些文件夹
  use.loader 指定使用那些loder
  user.options 给loader一些配置
  ```javascript
  module: {
    rules: [
      {
        test: /.\js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
  ```

## webpack.config.js 配置devtool: 'inline-source-map' 
  可以查看打包后的源代码
  ```js
    module.exports = {
      devtool: 'inline-source-map',
    }
  ```

## 压缩打包 JS代码
  安装
  ```
  yarn add --dev terser-webpack-plugin
  ```
  配置webpack.config.js/optimization
    minimize 是否压缩
    minimizer 使用什么压缩
  ```js
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  },
  ```

## 热更新，自动重新打包，刷新页面
  安装
  ```
  yarn add --dev webpack-dev-server
  ```
  配置webpack.config.js/devServer
    指定目录
  ```
  devServer: {
    static: './dist'
  }
  ```

## 配置快捷启动项 package.js/scripts
```js
"scripts": {
  "start": "webpack serve --open"
}
```

## 在打包文件中，增加hash,可避免文件缓存
  配置webpack.config.js/output.filename
  ```js
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, 'dist')
  },
  ```

## 设置路径别名
  可以指定别名，替换掉相对路径
  配置webpack.config.js/resolve.alias
  ```js
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  ```
  ```js
  // import {dateToStr} from '../../utils/date.js'
  import {dateToStr} from 'utils/date.js'
  ```

## 可视化打包分析工具
  安装
  ```
  yarn add --dev webpack-bundle-analyzer
  ```
  webpack.config.js/plugins 中配置插件
  ```js
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  ...
   
  plugins: [
    new BundleAnalyzerPlugin()
  ]
  ```

