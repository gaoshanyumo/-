// 暴露接口
module.exports = {
	// http端口号
	HTTP_PORT: 3000,
	// https端口号
	HTTPS_PORT: 3001,
	// 静态化配置
	STATIC: {
		'/static/': './static/',
		'/favicon.ico': './static/favicon.ico'
	},
	// 数据库地址
	MONGO_URL: 'mongodb://localhost:27017',
	// 数据库名称
	MONGO_NAME: 'ickt_26_vue',
	// 缓存
	UPLOAD_CACHE_DIR: '/cache/upload/',
	// 存储目录
	UPLOAD_SAVE_DIR: '/static/upload/',
	// 后台管理系统，显示商品的数量
	ADMIN_SHOW_PRODUCT_NUM: 8,
	// 移动端显示商品的数量
	HOME_SHOW_PRODUCT_NUM: 10,
	// 错误信息
	ERRORS: {
		// 成功
		success: { errno: 0, msg: 'success' },
		// 数据连接失败
		databaseError: { errno: 1, msg: '数据库错误' },
		// 集合插入数据失败
		collectionInsertError: { errno: 2, msg: '数据库错误' },
		// 集合没有插入数据
		collectionInsertNoData: { errno: 3, msg: '数据库错误' },
		// 集合查询数据失败
		collectionFindError: { errno: 4, msg: '数据库错误' },
		// 集合没有查询到数据
		collectionFindNoData: { errno: 5, msg: '没有数据了' },
		// 用户名或者密码错误
		loginError: { errno: 6, msg: '用户名或者密码错误' },
		// 用户尚未登录
		notLogin: { errno: 7, msg: '该用户尚未登录' },
		// 集合更新数据失败
		collectionUpdateError: { errno: 8, msg: '数据库错误' },
		// 集合没有更新数据
		collectionUpdateNoData: { errno: 9, msg: '数据库错误' },
		// 上传文件解析错误
		uploadParseError: { errno: 10, msg: '上传错误' },
		// 上传存储错误
		uploadSaveError:  { errno: 11, msg: '上传错误' },
		// 集合删除数据失败
		collectionRemoveError: { errno: 12, msg: '数据库错误' },
		// 集合没有删除数据
		collectionRemoveNoData: { errno: 13, msg: '数据库错误' },
	}
}