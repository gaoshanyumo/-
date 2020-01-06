// 引入express
let express = require('express');
// 引入ejs
let ejs = require('ejs');
// path
let path = require('path');
// 引入静态化配置
let { STATIC } = require('../consts');
// session
let session = require('express-session');
// 处理请求数据
let bodyParser = require('body-parser');

// 接口
module.exports = app => {
	// ejs插值语法
	ejs.delimiter = '$';
	// 设置模板引擎
	// app.set('view engine', 'ejs');
	// 拓展
	app.engine('.html', ejs.__express);

	// session
	app.use(session({
		secret: 'icketang',
		saveUninitialized: true,
		resave: false
	}))

	// 处理请求数据
	app.use(bodyParser.json())

	// 静态化
	// app.use('/static/', express.static(path.join(process.cwd(), './static/')))
	// app.use('/favicon.ico', express.static(path.join(process.cwd(), './static/favicon.ico')))
	// 遍历static
	for (let key in STATIC) {
		// key 			表示匹配的路径
		// STATIC[key] 	静态化的路径
		app.use(key, express.static(path.join(process.cwd(), STATIC[key])))
	}
}