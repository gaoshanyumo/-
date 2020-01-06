// 引入path
let path = require('path');
// 引入模板
let HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack配置
let { CommonsChunkPlugin, UglifyJsPlugin } = require('webpack').optimize;
// 引入拆分样式插件
let ExtractTextPlugin = require('extract-text-webpack-plugin');
// 压缩css
let OptimizeCssAssets = require('optimize-css-assets-webpack-plugin');
// 配置
module.exports = {
	// 解决问题
	resolve: {
		// 拓展
		extensions: ['.js', '.vue'],
		// 别名
		alias: {
			vue$: 'vue/dist/vue.js',
			// @代表src
			'@': path.join(process.cwd(), './src'),
			'@c': path.join(process.cwd(), './src/components'),
			'@t': path.join(process.cwd(), './src/tools'),
			'@v': path.join(process.cwd(), './src/views')
		}
	},
	// 入口文件
	entry: {
		main: './src/main.js',
		lib: ['vue', 'element-ui']
	},
	// 发布
	output: {
		// 发布的相对路径
		path: path.join(process.cwd(), '../server'),
		// 多文件发布
		filename: './static/admin/[name].js',
		// 静态资源相对路径
		publicPath: '/'
	},
	// 模块
	module: {
		// 加载机
		rules: [
			// es6
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: /src/,
				options: {
					presets: ['es2015']
				}
			},
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					// 拆分css
					extractCSS: true,
					// es6转化成es5
					loaders: {
						js: ['babel-loader?presets[]=es2015']
					}
				}
			},
			// scss
			{
				test: /\.scss$/,
				// loader: 'style-loader!css-loader!sass-loader'
				loader: ExtractTextPlugin.extract({
					fallback: ['style-loader'],
					use: ['css-loader', 'sass-loader']
				})
			},
			// css
			{
				test: /\.css$/,
				// loader: 'style-loader!css-loader'
				loader: ExtractTextPlugin.extract({
					fallback: ['style-loader'],
					use: 'css-loader'
				})
			},
			// 字体图标
			{
				test: /\.(ttf|woff)$/,
				loader: 'url-loader'
			}
		]
	},
	// 插件
	plugins: [
		// 处理模板
		new HtmlWebpackPlugin({
			// 文件
			template: './public/index.html',
			// 发布
			filename: './views/admin.html',
			// 添加hash
			hash: true
		}),
		// 拆分库文件
		new CommonsChunkPlugin('lib'),
		// css打包的位置
		new ExtractTextPlugin('./static/admin/style.css'),
		// 压缩js
		// new UglifyJsPlugin(),
		// // 压缩css
		// new OptimizeCssAssets()
	]
}