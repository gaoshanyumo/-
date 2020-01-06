// 引入mongodb模块
let { MongoClient, ObjectId } = require('mongodb');
// 数据库地址
// let mongodUrl = 'mongodb://localhost:27017';
// // 数据库名称
// let mongoName = 'ickt_26_vue';
// 引入数据库配置
let { MONGO_URL, MONGO_NAME, ERRORS } = require('../consts');
/***
 * 操作集合
 * @name 		集合名称
 * @res 		响应对象
 * @cb 			回调函数
 **/
function collection(name, res, cb) {

	// 链接数据库
	MongoClient.connect(MONGO_URL, { useNewUrlParser: true }, (err, client) => {
		// console.log(err, client)
		// 有错误
		if (err) {
			// 提示错误
			// res.json({ errno: 1, msg: '链接数据库失败' });
			// // 关闭数据库，终止执行
			// return client.close();
			// return end({ errno: 1, msg: '链接数据库失败' }, res, client)
			return end('databaseError', res, client)
		}
		// 获取数据库
		let db = client.db(MONGO_NAME);
		// 获取集合
		// 执行回调函数，传递集合对象和client
		cb(db.collection(name), client)
	})
}

// 关闭数据库，并返回数据
function end(data, res, client) {
	// 如果是字符串
	if (typeof data === 'string') {
		res.json(ERRORS[data])
	} else {
		// 返回数据
		res.json(data);
	}
	// 关闭数据库
	client.close();
}

// 暴露接口
module.exports = {
	collection,
	end,
	ObjectId
}