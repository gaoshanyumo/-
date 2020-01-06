// 引入数据库模块
let { collection, end, ObjectId } = require('../../db');
// 接口
module.exports = (req, res) => {
	// res.json(333)
	// console.log(req.query)
	// 操作数据库
	collection('product', res, (col, db) => {
		// 查询操作
		col
			.findOne({ _id: ObjectId(req.query.id) }, (err, data) => {
				// console.log(err, data)
				// 有错误
				if (err) {
					return end('collectionFindError', res, db);
				}
				// 有数据
				if (data) {
					return end({ errno: 0, data }, res, db)
				}
				// 没有数据
				return end('collectionFindNoData', res, db);
			})
	})
}