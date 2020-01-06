// 引入formiable
let { IncomingForm } = require('formidable')
// let formidable = require('formidable');
// new formidable
// console.log(formidable)
// 引入path
let path = require('path');
// 引入fs
let fs = require('fs');
// 引入配置
let { UPLOAD_CACHE_DIR, UPLOAD_SAVE_DIR, ERRORS } = require('../../consts')
// 接口
module.exports = (req, res) => {
	// res.json('success')
	// console.log(IncomingForm)
	// 创建解析请求对象
	let form = new IncomingForm();
	// 修改缓存目录
	form.uploadDir = path.join(process.cwd(), UPLOAD_CACHE_DIR);
	// console.log(form)
	// 解析请求
	form.parse(req, (err, fileds, files) => {
		// console.log(err, 111, fileds, 222, files)
		// 有错误
		if (err) {
			// 提示错误
			return res.json(ERRORS.uploadParseError)
		}
		// 定义存储路径
		let filePath = UPLOAD_SAVE_DIR + 
			// 有20位数字组成文件名称
			String(Math.random()).slice(2, 12) + 
			String(Math.random()).slice(2, 12) + 
			// 拓展名
			path.extname(files.file.name)
		// console.log(1111, filePath)
		// 移动文件
		fs.rename(files.file.path, path.join(process.cwd(), filePath), err => {
			// 有错误
			if (err) {
				// 提示错误
				return res.json(ERRORS.uploadSaveError)
			}
			// 没有错误，返回正确信息
			res.json({ errno: 0, data: filePath });
		})
	})

}