// 引入数据库模块
let { collection, end } = require('../../db');
// 接口
module.exports = (req, res) => {
	// res.json(111)
	// 操作集合
	collection('product', res, (col, db) => {
		// 插入数据
		col
			.insertOne(req.body, (err, data) => {
				// console.log(err, data)
				// 有错误
				if (err) {
					// 提示错误
					return end('collectionInsertError', res, db)
				}
				// 插入成功
				if (data.result.n > 0) {
					// 成功了
					return end('success', res, db)
				}
				// 失败
				end('collectionInsertNoData', res, db)
			})
	})
}