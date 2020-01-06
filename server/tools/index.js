/***
 * 过滤数据的方法
 * @arr 	处理的数组
 * @keys 	保留的属性
 * return 	处理后的结果
 **/
exports.filter = (arr, keys) => {
	// 如果arr不是数组
	if (!Array.isArray(arr)) {
		return []
	}
	// 遍历数组
	return arr.map(item => {
		// 定义结果对象
		let result = {};
		// 遍历keys
		keys.forEach(key => {
			// key代表属性名称
			// 将item中的同名属性数据复制给result
			result[key] = item[key]
		})
		// 返回result
		return result;
	})
}