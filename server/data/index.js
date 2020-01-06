// 引入路由
let { Router } = require('express');

// 路由中间件
module.exports = new Router()
	// 配置路由
	// 首页接口
	.get('/data/home', require('./home'))
	// 分类数据
	.get('/data/list', require('./list'))
	// 商品详情
	.get('/data/detail', require('./detail'))
	// 搜索接口
	.get('/data/search', require('./search'))
	// 排序接口
	.get('/data/order', require('./order'))