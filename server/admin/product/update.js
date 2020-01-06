// 引入数据库模块
let { collection, end, ObjectId } = require('../../db');
// 接口
module.exports = (req, res) => {
	// res.json(111)
	// 获取id
	let id = req.body._id;
	// 删除id
	delete req.body._id;
	// 操作集合
	collection('product', res, (col, db) => {
		// 更新操作
		col
			.updateOne(
				// 查询条件
				{ _id: ObjectId(id) },
				// 更新的数据
				{ $set: req.body },
				// 回调函数
				(err, data) => {
					// console.log(err, 1111, data)
					// 错误
					if (err) {
						return end('collectionUpdateError', res, db);
					}
					// 更新成功
					if (data.result.n > 0) {
						return end('success', res, db);
					}
					// 更新失败
					end('collectionUpdateNoData', res, db);
				}
			)
	})
}