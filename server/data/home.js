// 引入数据库
let { collection, end, ObjectId } = require('../db');
// 引入配置
let { HOME_SHOW_PRODUCT_NUM } = require('../consts');
// 引入数据适配器方法
let { filter } = require('../tools');
// 接口
module.exports = (req, res) => {
	// res.json(111)
	// 操作集合
	collection('product', res, (col, db) => {
		// 查询
		col
			.find()
			// 倒序
			.sort({ _id: -1 })
			// 截取
			.limit(HOME_SHOW_PRODUCT_NUM)
			// 转成数组
			.toArray((err, data) => {
				// 返回数据了
				end({ list: filter(data, ["img", "title", "sales", "price", "originPrice", "_id"]) }, res, db)
			})
	})
}