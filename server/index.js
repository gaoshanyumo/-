// 引入express
let express = require('express');
// 引入中间件
let middleware = require('./middleware');
// 引入server模块
let server = require('./server');
// 引入路由模块
let router = require('./router');

// 创建应用程序
let app = express();

// 中间件
middleware(app);

// 安装路由
router(app)

// 服务器
server(app);



// 引入mock
// let mock = require('./mock');
// mock(app)









// 引入express
// let express = require('express');
// 引入ejs
// let ejs = require('ejs');
// 引入http和https
// let http = require('http');
// let https = require('https');
// 读取文件
// let fs = require('fs');
// path
// let path = require('path');

// // 创建应用程序
// let app = express();

// // ejs插值语法
// ejs.delimiter = '$';
// // 设置模板引擎
// // app.set('view engine', 'ejs');
// // 拓展
// app.engine('.html', ejs.__express);

// // 静态化
// app.use('/static/', express.static(path.join(__dirname, './static/')))

// 定义路由
// app.get('/', (req, res) => {
// 	res.render('home.html')
// })
// // admin页面
// app.get('/admin', (req, res) => {
// 	res.render('admin.html', {
// 		title: '爱创课堂'
// 	})
// })

// 中间件的形式定义路由
// // 路由中间件
// let router = new express.Router();
// // 配置路径
// router.get('/', (req, res) => {
// 	res.render('home.html')
// })
// // admin页面
// router.get('/admin', (req, res) => {
// 	res.render('admin.html', {
// 		title: '爱创课堂'
// 	})
// })
// // 安装
// app.use(router)

// // mock数据
// app.use('/data/', (req, res, next) => {
// 	// 添加拓展名
// 	// req.url += '.json'
// 	// 切割数组
// 	let arr = req.url.split('?');
// 	// 添加拓展名
// 	arr[0] += '.json';
// 	// 合并成路径
// 	req.url = arr.join('?')
// 	// console.log(req.url)
// 	// next方法必须执行
// 	next();
// }, express.static(path.join(__dirname, './static/data/')))

// // mock数据
// // app.post('/admin/login', (req, res) => res.json({ errno: 0, data: 'ickt' }))
// app.post('/admin/login', (req, res) => res.json({ errno: 1, data: 'ickt', msg: '用户名或者密码不正确！' }))
// // 修改用户名和密码
// app.post('/admin/manager/update', (req, res) => res.json({ errno: 0, msg: 'success' }))
// // 图片上传
// app.post('/admin/product/upload', (req, res) => res.json({ errno: 0, data: '/static/img/list/01.jpg' }))
// app.post('/admin/product/create', (req, res) => res.json({ errno: 0 }))
// // 删除商品
// app.post('/admin/product/remove', (req, res) => res.json({ errno: 0 }))
// app.post('/admin/product/update', (req, res) => res.json({ errno: 0 }))
// // 后台管理系统mock数据
// app.use('/admin/', (req, res, next) => {
// 	// 添加拓展名
// 	// req.url += '.json'
// 	// 切割数组
// 	let arr = req.url.split('?');
// 	// 添加拓展名
// 	arr[0] += '.json';
// 	// 合并成路径
// 	req.url = arr.join('?')
// 	// console.log(req.url)
// 	// next方法必须执行
// 	next();
// }, express.static(path.join(__dirname, './static/data/')))


// // 端口号
// let httpPort = 3000;
// let httpsPort = 3001;
// // 读取秘钥 process.cwd(), __dirname
// let key = fs.readFileSync(path.join(__dirname, './ssl/private.pem'));
// let cert = fs.readFileSync(path.join(__dirname, './ssl/file.crt'));
// // 启动服务
// http.createServer(app)
// 	.listen(httpPort, res => console.log('http server listen at ' + httpPort))
// // https服务
// https.createServer({ key, cert }, app)
// 	.listen(httpsPort, res => console.log('http server listen at ' + httpsPort))





// // 向ickt_26_vue数据库的test集合中，插入hello ickt数据
// app.get('/test', (req, res) => {
// 	// res.json('success')
// 	// 引入mongodb模块
// 	// let mongodb = require('mongodb');
// 	// // 获取客户端
// 	// let { MongoClient } = mongodb;
// 	// 合并一步
// 	let { MongoClient } = require('mongodb');
// 	// 数据库地址
// 	let mongodUrl = 'mongodb://localhost:27017';
// 	// 数据库名称
// 	let mongoName = 'ickt_26_vue';
// 	// 链接数据库
// 	MongoClient.connect(mongodUrl, (err, client) => {
// 		// console.log(err, client)
// 		// 有错误
// 		if (err) {
// 			// 提示错误
// 			res.json({ errno: 1, msg: '链接数据库失败' });
// 			// 关闭数据库，终止执行
// 			return client.close();
// 		}
// 		// 获取数据库
// 		let db = client.db(mongoName);
// 		// 操作集合
// 		db.collection('test')
// 			// 插入数据
// 			.insertOne({ title: 'hello ickt 111!' }, (err, data) => {
// 				// console.log(err, data)
// 				// 有错误
// 				if (err) {
// 					// 提示错误
// 					res.json({ errno: 2, msg: '数据库操作失败' })
// 					// 关闭数据库
// 					return client.close();
// 				}
// 				// 如果成功
// 				if (data.result.n > 0) {
// 					// 成功
// 					res.json('success');
// 					// 关闭数据库
// 					return client.close();
// 				}
// 				// 没有插入数据
// 				res.json({ errno: 3, msg: '数据库操作失败' })
// 				// 关闭数据库
// 				return client.close();
// 			})
// 	})
// })

// 接口
app.get('/test/show', (req, res) => {
	// res.json('success')
	// 引入mongodb模块
	// let { MongoClient } = require('mongodb');
	// // 数据库地址
	// let mongodUrl = 'mongodb://localhost:27017';
	// // 数据库名称
	// let mongoName = 'ickt_26_vue';
	// // 链接数据库
	// MongoClient.connect(mongodUrl, (err, client) => {
	// 	// console.log(err, client)
	// 	// 有错误
	// 	if (err) {
	// 		// 提示错误
	// 		res.json({ errno: 1, msg: '链接数据库失败' });
	// 		// 关闭数据库，终止执行
	// 		return client.close();
	// 	}
	// 	// 获取数据库
	// 	let db = client.db(mongoName);
	// 	// 操作集合
	// 	db.collection('test')
	// 		// 插入数据
	// 		.insertOne()
	// })

	// 引入集合方法
	let { collection, end } = require('./db');
	// 操作集合
	collection('test', res, (col, client) => {
		// 查询集合
		col
			.insertOne({ title: 'hello ickt 111!' }, (err, data) => {
				// 有错误
				if (err) {
					// 提示错误
					// res.json({ errno: 2, msg: '数据库操作失败' })
					// // 关闭数据库
					// return client.close();
					// return end({ errno: 2, msg: '数据库操作失败' }, res, client)
					return end('collectionInsertError', res, client)
				}
				// 如果成功
				if (data.result.n > 0) {
					// 成功
					// res.json({ errno: 0, msg: 'success' });
					// // 关闭数据库
					// return client.close();
					return end('success', res, client)
				}
				// 没有插入数据
				// res.json({ errno: 3, msg: '数据库操作失败' })
				// // 关闭数据库
				// return client.close();
				return end('collectionInsertNoData', res, client)
			})
	})
})