// 引入数据库
let { collection, end } = require('../../db');
// 引入配置
let { ADMIN_SHOW_PRODUCT_NUM } = require('../../consts');
// 接口
module.exports = (req, res) => {
	// console.log(req.query)
	// 获取页码
	let page = req.query.page - 1;
	// 保证大于等于0
	page = page < 0 ? 0 : page;
	// res.json(111)
	// 操作集合
	collection('product', res, (col, db) => {
		// 查询操作
		col
			.find()
			// 倒序
			.sort({ _id: -1 })
			// 跳过的数量
			.skip(page * ADMIN_SHOW_PRODUCT_NUM)
			// 截取个数
			.limit(ADMIN_SHOW_PRODUCT_NUM)			
			// 转成数组
			.toArray((err, data) => {
				// console.log(err, data)
				// 有错误
				if (err) {
					return end('collectionFindError', res, db);
				}
				// 有数据
				if (data.length) {
					return end({ errno: 0, data }, res, db)
				}
				// 没有数据
				end('collectionFindNoData', res, db)
			})
	})
}