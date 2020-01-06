// 引入配置
let { ERRORS } = require('../../consts');
// 暴露接口
module.exports = (req, res) => {
	// res.json(111)
	// 如果登录过
	if (req.session.username) {
		// 返回用户信息
		res.json({ errno: 0, data: req.session.username })
	} else {
		// 没有登录
		res.json(ERRORS.notLogin)
	}
}