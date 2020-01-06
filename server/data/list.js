// 引入数据库
let { collection, end } = require('../db');
// 引入配置
let { HOME_SHOW_PRODUCT_NUM } = require('../consts');
// 引入数据适配器方法
let { filter } = require('../tools');
// 接口
module.exports = (req, res) => {
	// 条件对象
	let condition = {};
	// 如果传递了分类id
	if (req.query.id && req.query.id != 0) {
		// 设置分类条件
		condition.type = +req.query.id;
	}
	// console.log(req.query)
	// 操作集合
	collection('product', res, (col, db) => {
		// 查询操作
		col
			.find(condition)
			// 倒序
			.sort({ _id: -1 })
			// 截取
			.limit(HOME_SHOW_PRODUCT_NUM)
			// 转换成数组
			.toArray((err, data) => {
				// 返回数据
				end(filter(data, ["img", "title", "sales", "price", "originPrice", "_id"]), res, db)
			})
	})
}