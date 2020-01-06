// 引入数据配置
let { ERRORS } = require('../../consts');
// 引入数据库
let { collection, end } = require('../../db');
// 接口
module.exports = (req, res) => {
	// res.json(111)
	// 如果登录过
	if (req.session.username) {
		// 根据提交数据，修改用户名和密码
		// console.log(req.body)
		// 更新集合
		collection('manager', res, (col, db) => {
			// 更新
			col
				.updateOne(
					// 根据当前用户名查询。
					{ username: req.session.username },
					// 更新内容
					{ $set: req.body },
					// 监听结果
					(err, data) => {
						// console.log(err, data)
						// 有错误，提示错误
						if (err) {
							return end('collectionUpdateError', res, db)
						}
						// 更新成功
						if (data.result.n > 0) {
							// 更新成功，用户重新登录，要删除当前的session中的用户名
							delete req.session.username;
							// 返回数据
							return end('success', res, db)
						}
						// 更新失败
						end('collectionUpdateNoData', res, db)
					}
				)
		})
	} else {
		// 没有登录过
		res.json(ERRORS.notLogin)
	}
}