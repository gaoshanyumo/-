// 引入Router
let { Router } = require('express');

// 实例化
module.exports = new Router()
	// 配置路由
	// 查询用户登录信息
	.get('/admin/userinfo', require('./manager/userinfo'))
	// 退出
	.get('/admin/logout', require('./manager/logout'))
	// 商品列表
	.get('/admin/product/list', require('./product/list'))
	// 获取商品详情
	.get('/admin/product/detail', require('./product/detail'))

	// 登录
	.post('/admin/login', require('./manager/login'))
	// 修改管理员信息
	.post('/admin/manager/update', require('./manager/update'))
	// 上传商品图片
	.post('/admin/product/upload', require('./product/upload'))
	// 创建商品
	.post('/admin/product/create', require('./product/create'))
	// 删除商品
	.post('/admin/product/remove', require('./product/remove'))
	// 更新商品
	.post('/admin/product/update', require('./product/update'))