
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const devMode = true

module.exports = {

   mode: 'development',

   entry: {
      app: path.join(__dirname, './src/index.js')  // app.js作为打包的入口
   },
   // 输出目录
   output: {
      filename: '[name].[hash].js',  //name代表entry对应的名字; hash代表 整个app打包完成后根据内容加上hash。一旦整个文件内容变更，hash就会变化
      path: path.join(__dirname, './dist'), // 打包好之后的输出路径
      publicPath: '/' // 静态资源文件引用时的路径（加在引用静态资源前面的）
   },

   devServer: {
      contentBase: path.resolve( __dirname, './public' ),
      // index: resolve('./public/index.html'),
      port: '9090',
      // hot: true,
      // hotOnly: false,
      // 告诉开发服务器查看由开发服务器提供的文件。contentBase选项。默认情况下是禁用的。启用时，文件更改将触发重新加载整个页面。
      watchContentBase: true,
      clientLogLevel: 'silent',
      historyApiFallback: {
         index: '/'
      },
   },

   module:{
      rules: [
         // js
         {
            test: /.js(x)?$/,
            include: /node_madules[\\/]react-syntax-highlighter|src/,
            loader: 'babel-loader'
         },
         // css
         {
            test: /.css$/,
            // "scoped-css-loader" 然 react 也可已使用 scoped 的样式 :
            // 地址: http://npm.taobao.org/package/scoped-css-loader
            use: ["style-loader", "css-loader","scoped-css-loader"]

         },
         {
            test: /\.(svg)(\?.*)?$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[path][name]' + ( devMode ? '.[ext]' : '.[hash].[ext]' ),
                  }
               }
            ]
         },
         // images
         {
            test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
            use: [
               {
                  loader: 'url-loader',
                  options: {
                     name: '[path][name]' + ( devMode ? '.[ext]' : '.[hash].[ext]' ),
                     limit: 20480,
                     fallback: 'file-loader',
                  }
               }
            ]
         },
      ]
   },

   plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
         template: path.join (__dirname ,'public/index.html')
      })
   ],

   resolve:{
      aliasFields: ['browser'],
      // 尝试按顺序解析这些扩展。
      extensions: ['.jsx', '.js', '.json'],
      alias: {
         '@': path.resolve( __dirname , 'src' ),
         CSS: path.resolve( __dirname , 'src/assets/css' ),
         IMG: path.resolve( __dirname , 'src/assets/images' ),
         JS: path.resolve( __dirname ,'src/assets/javascript' ),
         view: path.resolve( __dirname , 'src/view' ),
         components: path.resolve( __dirname , 'src/components' ),
         router: path.resolve( __dirname , 'src/router' ),
         store: path.resolve( __dirname , 'src/store' ),
      }

   }

};