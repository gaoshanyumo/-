// 引入express
let express = require('express');
// path
let path = require('path');

// 接口
module.exports = app => {
	// mock数据
	app.use('/data/', (req, res, next) => {
		// 添加拓展名
		// req.url += '.json'
		// 切割数组
		let arr = req.url.split('?');
		// 添加拓展名
		arr[0] += '.json';
		// 合并成路径
		req.url = arr.join('?')
		// console.log(req.url)
		// next方法必须执行
		next();
	}, express.static(path.join(process.cwd(), './static/data/')))

	// mock数据
	// app.post('/admin/login', (req, res) => res.json({ errno: 0, data: 'ickt' }))
	app.post('/admin/login', (req, res) => res.json({ errno: 1, data: 'ickt', msg: '用户名或者密码不正确！' }))
	// 修改用户名和密码
	app.post('/admin/manager/update', (req, res) => res.json({ errno: 0, msg: 'success' }))
	// 图片上传
	app.post('/admin/product/upload', (req, res) => res.json({ errno: 0, data: '/static/img/list/01.jpg' }))
	app.post('/admin/product/create', (req, res) => res.json({ errno: 0 }))
	// 删除商品
	app.post('/admin/product/remove', (req, res) => res.json({ errno: 0 }))
	app.post('/admin/product/update', (req, res) => res.json({ errno: 0 }))
	// 后台管理系统mock数据
	app.use('/admin/', (req, res, next) => {
		// 添加拓展名
		// req.url += '.json'
		// 切割数组
		let arr = req.url.split('?');
		// 添加拓展名
		arr[0] += '.json';
		// 合并成路径
		req.url = arr.join('?')
		// console.log(req.url)
		// next方法必须执行
		next();
	}, express.static(path.join(process.cwd(), './static/data/')))
}