// 引入path
let path = require('path');
// 判断环境
if (process.env.NODE_ENV === 'production') {
	// 发布的环境
	module.exports = {
		// 静态资源
		outputDir: path.join(process.cwd(), '../server/static/home'),
		// 模板
		indexPath: path.join(process.cwd(), '../server/views/home.html'),
		// 模板文件引入静态资源相对位置。
		publicPath: '/static/home'
	}
} else {
	// 请求代理对象
	let proxyObject = {
		target: 'http://localhost:3000'
	}
	// 开发环境
	module.exports = {
		// 服务器配置
		devServer: {
			// 代理
			proxy: {
				// '/data/home': {
				// 	// http://localhost:3000/data/home
				// 	target: 'http://localhost:3000'
				// },
				// // list请求
				// '/data/list': {
				// 	target: 'http://localhost:3000'
				// },
				'/data/home': proxyObject,
				'/data/list': proxyObject,
				// 排序
				'/data/order': proxyObject,
				// 搜索
				'/data/search': proxyObject,
				// 详情数据
				'/data/detail': proxyObject
			}
		}
	}
}