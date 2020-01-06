// 引入express
let { Router } = require('express');
// // 路由中间件
// let router = new Router();
// // 配置路径
// router.get('/', require('./home'))
// // admin页面
// router.get('/admin', require('./admin'))

// // 暴露接口
// module.exports = router;

// 链式调用
module.exports = new Router()
	// 首页
	.get('/', require('./home'))
	// 后台
	.get('/admin', require('./admin'))