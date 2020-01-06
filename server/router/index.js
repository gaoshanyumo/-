// 引入page路由中间件
let page = require('../page');
// 后台管理系统路由中间件
let admin = require('../admin');
// 移动端路由中间件
let data = require('../data');
// 接口
module.exports = app => {
	// 安装
	app.use(page)
	// 安装后台管理系统路由中间件
	app.use(admin)
	// 安装移动端路由中间件
	app.use(data)
}