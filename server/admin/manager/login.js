// 引入数据库模块
let { collection, end } = require('../../db');
// 暴露接口
module.exports = (req, res) => {
	// res.json('success')
	// 操作集合
	collection('manager', res, (col, db) => {
		// console.log(req.body)
		// 查询数据库
		col
			.findOne(req.body, (err, data) => {
				// console.log(err, data)
				// 有错误
				if (err) {
					// 提示错误
					return end('collectionFindError', res, db)
				}
				// 有数据
				if (data) {
					// 将用户名存储在session中
					req.session.username = req.body.username;
					// 登录成功
					return end({ errno: 0, data: req.body.username }, res, db)
				}
				// 用户名和密码错误，没有找到数据
				end('loginError', res, db)
			})

		// 插入一条数据
		// col.insertOne(req.body)
	})
}