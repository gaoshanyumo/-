// 引入ObjectId方法
// let { ObjectId } = require('mongodb');
// 引入数据库模块
let { collection, end, ObjectId } = require('../../db');
// 接口
module.exports = (req, res) => {
	// res.json(222)
	// 操作集合
	collection('product', res, (col, db) => {
		// 删除操作
		// console.log(req.body)
		col
			.removeOne({ _id: ObjectId(req.body.id) }, (err, data) => {
				// console.log(err, data)
				// 有错误
				if (err) {
					// 提示错误
					return end('collectionRemoveError', res, db);
				}
				// 如果成功
				if (data.result.n > 0) {
					// 删除成功
					return end('success', res, db)
				}
				// 失败
				end('collectionRemoveNoData', res, db)
			})
	})
}