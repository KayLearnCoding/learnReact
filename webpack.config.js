var path = require('path');
var dist_dir = path.resolve(__dirname, 'dist');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',  // 引入要打包的文件
    output : {
        path : dist_dir, // 打包生成路径
        filename : 'output.js',  //并不会生成此文件
    },
    mode:'development',
    // devServer:{
       //contentBase:,
    //    port:3200,
    // },
    module:{
        rules:[
            {
                test:/\.js?$/, //.jsx 
                loader:'babel-loader',
                exclude: /node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    },
    plugins:[
        // 开启HMR(热替换功能,替换更新部分,不重载页面！)
        // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
                // 打包启用的模板
            template: path.resolve(__dirname, './src/index.html'),
            //打包生成的文件名
            filename: 'index.html',
            minify: {
                // 压缩选项
                removeComments: true,    //移除HTML中的注释
                collapseWhitespace: true,    //删除空白符与换行符
            }
            }),
        ]
}