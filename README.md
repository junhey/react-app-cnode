# react-app-cnode

```bash
// 全局安装
npm install -g webpack

// package初始化
npm init

// 安装Webpack
npm install --save-dev webpack 

// 新建src和build目录
mkdir src && mkdir bulid

// 新建webpack.config.js配置文件，写入如下内容
touch webpack.config.js

module.exports = {
    entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "es2015", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}



// 在src上新建index.js,作为webpack的入口文件
touch src/index.js

// 安装babel loader和react react-dom
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react

npm install --save react react-dom

npm install --save-dev style-loader css-loader

npm install --save-dev postcss-loader autoprefixer

npm install --save-dev html-webpack-plugin

npm install --save-dev babel-plugin-react-transform react-transform-hmr

npm install --save-dev extract-text-webpack-plugin


```