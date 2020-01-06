// 引入数据库模块
let { collection, end, ObjectId } = require('../db');
// 接口
module.exports = (req, res) => {
	// res.json(111)
	// 操作集合
	collection('product', res, (col, db) => {
		// 查询数据
		col
			.findOne({ _id: ObjectId(req.query.id) }, (err, data) => {
				// console.log(data)
				end(data || {}, res, db);
			})
	})
}