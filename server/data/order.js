// 引入数据库
let { collection, end, ObjectId } = require('../db');
// 引入配置
let { HOME_SHOW_PRODUCT_NUM } = require('../consts');
// 引入数据适配器方法
let { filter } = require('../tools');
// 接口
module.exports = (req, res) => {
	// 条件
	let condition = {};
	// 解构数据
	let { type, id, desc } = req.query;
	// 设置分类
	if (type && type != 0) {
		// 设置分类
		condition.type = +type;
	}
	// res.json(111)
	// 如果是优惠排序
	if (id === 'discount') {
		// 操作集合
		collection('product', res, (col, db) => {
			// 查询
			col
				.find(condition)
				// 转化成数组
				.toArray((err, data) => {
					// data如果是数组，就排序
					if (Array.isArray(data)) {
						// 数组排序
						data.sort((a, b) => {
							// a的优惠 a.originPrice - a.price
							// b的优惠 b.originPrice - b.price
							// if (desc === 1) {
							// 	return (a.originPrice - a.price) - (b.originPrice - b.price)
							// } else {
							// 	return (b.originPrice - b.price) - (a.originPrice - a.price)
							// }
							return (a.originPrice - a.price) * desc - (b.originPrice - b.price) * desc;
						})
						// 截取10个
						data = data.slice(0, 10)
					}
					// 返回数据
					end(filter(data, ["img", "title", "sales", "price", "originPrice", "_id", "evaluate"]), res, db)
				})
		})
		return;
	}
	// 操作集合
	collection('product', res, (col, db) => {
		// 查询
		col
			.find(condition)
			// 排序
			.sort({ [id]: +desc })
			// 截取
			.limit(HOME_SHOW_PRODUCT_NUM)
			// 转化数组
			.toArray((err, data) => {
				// 返回数据
				end(filter(data, ["img", "title", "sales", "price", "originPrice", "_id", "evaluate"]), res, db)
			})
	})
}